export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      stage: 'validation',
      error: 'متد درخواست مجاز نیست (فقط POST پشتیبانی می‌شود).'
    });
  }

  const proxyBase = String(process.env.PROXY_BASE_URL || 'http://161.97.150.196:1001')
    .trim()
    .replace(/\/+$/, '');

  const rawApiBase = String(process.env.IIMOBILE_API_BASE || 'https://recharge-apis.iimobile.af/v1/apis')
    .trim()
    .replace(/\/+$/, '');

  const apiBase = rawApiBase.endsWith('/v1/apis') ? rawApiBase : `${rawApiBase}/v1/apis`;

  const creditBundleId = String(
    process.env.IIMOBILE_CREDIT_BUNDLE_ID || process.env.IIMOBILE_DEFAULT_BUNDLE_ID || '543212506'
  ).trim();

  const envToken = String(
    process.env.IIMOBILE_JWT_TOKEN || process.env.IIMOBILE_TOKEN || process.env.IIMOBILE_API_KEY || ''
  )
    .trim()
    .replace(/^Bearer\s+/i, '')
    .trim();

  const reqAuth = String(req.headers?.authorization || '').trim();
  const authHeaderValue = reqAuth || (envToken ? `Bearer ${envToken}` : '');

  const body = req.body || {};
  const { operator, phone, amount, bundle_id } = body;
  const numAmount = Number(amount);

  if (!operator || !phone || Number.isNaN(numAmount) || numAmount <= 0) {
    return res.status(400).json({
      ok: false,
      stage: 'validation',
      error: 'اپراتور، شماره تماس و مبلغ معتبر (بزرگ‌تر از صفر) برای شارژ الزامی است.'
    });
  }

  const normalizedOperator = String(operator).trim().toLowerCase();
  const normalizedPhone = String(phone).trim();
  const effectiveBundleId = String(bundle_id || creditBundleId).trim() || creditBundleId;

  const payload = {
    operator: normalizedOperator,
    phone: normalizedPhone,
    bundle_id: effectiveBundleId,
    amount: numAmount
  };

  function cleanHtmlMessage(text, fallbackStatus) {
    const str = String(text || '').trim();
    if (!str) return fallbackStatus ? `HTTP ${fallbackStatus}` : '';
    const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(str);
    if (!looksLikeHtml) return str;

    const titleMatch = str.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const h1Match = str.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const summary = (h1Match?.[1] || titleMatch?.[1] || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return summary ? `${summary} (پاسخ HTML از سرور)` : `خطای HTTP ${fallbackStatus || ''} (پاسخ HTML از سرور)`.trim();
  }

  function extractCompanyMessage(data, rawText = '', httpStatus = '') {
    if (typeof data === 'string') {
      return cleanHtmlMessage(data, httpStatus);
    }
    if (!data || typeof data !== 'object') {
      return cleanHtmlMessage(rawText, httpStatus);
    }

    const msg =
      data.msg ??
      data.message ??
      data.error ??
      data.detail ??
      data?.data?.msg ??
      data?.data?.message ??
      data?.data?.error ??
      '';

    if (msg) {
      return typeof msg === 'object' ? JSON.stringify(msg) : cleanHtmlMessage(String(msg), httpStatus);
    }

    if (data.rawText) {
      return cleanHtmlMessage(data.rawText, httpStatus);
    }

    return cleanHtmlMessage(rawText, httpStatus);
  }

  function extractTxId(data) {
    if (!data || typeof data !== 'object') return '';
    const val =
      data.txid ??
      data.txnid ??
      data.transaction_id ??
      data.id ??
      data?.data?.txid ??
      data?.data?.txnid ??
      data?.data?.transaction_id ??
      data?.data?.id ??
      '';
    return String(val || '').trim();
  }

  function isPositiveStatus(data) {
    if (!data || typeof data !== 'object') return false;
    const st = data.status ?? data?.data?.status;
    return st === 1 || st === 2 || st === '1' || st === '2' || st === true || data.success === true;
  }

  function buildTransactionDescription({ ok, stage, txid, companyMessage }) {
    const statusLabel = ok ? 'موفق' : 'ناموفق';
    const parts = [
      `${statusLabel} | شارژ اعتباری ${normalizedOperator} | شماره: ${normalizedPhone} | مبلغ: ${numAmount}`,
      `مرحله: ${stage}`
    ];
    if (txid !== undefined && txid !== null && String(txid) !== '') {
      parts.push(`کد تراکنش شرکت: ${txid}`);
    }
    if (companyMessage) {
      parts.push(`واکنش شرکت: ${companyMessage}`);
    }
    return parts.join(' | ');
  }

  function buildTargetUrl(endpointPath) {
    const cleanPath = `/${String(endpointPath).replace(/^\/+/, '')}`;
    return `${apiBase}${cleanPath}`;
  }

  async function postViaProxy(endpointPath, bodyObj) {
    const targetUrl = buildTargetUrl(endpointPath);
    const proxyUrl = `${proxyBase}/?url=${encodeURIComponent(targetUrl)}`;

    const headers = {
      'Content-Type': 'application/json',
      'x-target-url': targetUrl
    };
    if (authHeaderValue) {
      headers['Authorization'] = authHeaderValue;
    }

    const resp = await fetch(proxyUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(bodyObj),
      signal: AbortSignal.timeout(15000)
    });

    const text = await resp.text();
    let raw = {};
    try {
      raw = text ? JSON.parse(text) : {};
    } catch {
      raw = { rawText: text };
    }

    const companyMessage = extractCompanyMessage(raw, text || resp.statusText, resp.status);
    return { resp, raw, targetUrl, companyMessage };
  }

  try {
    const initRes = await postViaProxy('/v1/api/initiate-transaction', payload);
    const initData = initRes.raw || {};
    const txId = extractTxId(initData);

    if (!initRes.resp.ok || (!isPositiveStatus(initData) && !txId)) {
      const statusCode = initRes.resp.status >= 400 ? initRes.resp.status : 400;
      const description = buildTransactionDescription({
        ok: false,
        stage: 'initiate',
        txid: txId || null,
        companyMessage: initRes.companyMessage
      });

      return res.status(statusCode).json({
        ok: false,
        stage: 'initiate',
        error: initRes.companyMessage || 'Initiate transaction failed',
        company_message: initRes.companyMessage,
        company_status: initData?.status ?? null,
        company_http_status: initRes.resp.status,
        txid: txId || null,
        tx_description: description,
        targetUrl: initRes.targetUrl,
        initiate_raw: initData,
        raw: initData
      });
    }

    if (txId) {
      const parsedTxnId =
        /^\d+$/.test(txId) && Number(txId) <= Number.MAX_SAFE_INTEGER
          ? Number(txId)
          : txId;

      const execRes = await postViaProxy('/v1/api/execute-transaction', {
        operator: normalizedOperator,
        txnid: parsedTxnId
      });
      const execData = execRes.raw || {};
      const execOk = execRes.resp.ok && isPositiveStatus(execData);
      const finalTxId = extractTxId(execData) || txId;
      const statusCode = execOk ? 200 : (execRes.resp.status >= 400 ? execRes.resp.status : 400);
      const description = buildTransactionDescription({
        ok: execOk,
        stage: 'execute',
        txid: finalTxId,
        companyMessage: execRes.companyMessage || initRes.companyMessage
      });

      return res.status(statusCode).json({
        ok: execOk,
        stage: 'execute',
        txid: finalTxId,
        message: execOk ? (execRes.companyMessage || 'Recharge Successful') : undefined,
        error: execOk ? undefined : (execRes.companyMessage || 'Execute transaction failed'),
        company_message: execRes.companyMessage,
        initiate_company_message: initRes.companyMessage,
        company_status: execData?.status ?? null,
        company_http_status: execRes.resp.status,
        tx_description: description,
        initiate_raw: initData,
        execute_raw: execData,
        targetUrl: execRes.targetUrl,
        raw: execData
      });
    }

    const description = buildTransactionDescription({
      ok: true,
      stage: 'initiate',
      txid: null,
      companyMessage: initRes.companyMessage
    });

    return res.status(200).json({
      ok: true,
      stage: 'initiate',
      message: initRes.companyMessage || 'Initiated',
      company_message: initRes.companyMessage,
      company_status: initData?.status ?? null,
      company_http_status: initRes.resp.status,
      tx_description: description,
      targetUrl: initRes.targetUrl,
      initiate_raw: initData,
      raw: initData
    });
  } catch (err) {
    const isTimeout = err && (err.name === 'TimeoutError' || err.name === 'AbortError');
    const transportMsg = isTimeout
      ? 'پاسخ‌گویی پروکسی یا سرویس مقصد زمان‌بر شد (تایم‌اوت).'
      : (err && err.message ? err.message : 'Proxy request failed');

    return res.status(isTimeout ? 504 : 502).json({
      ok: false,
      stage: 'transport',
      error: transportMsg,
      company_message: transportMsg,
      tx_description: buildTransactionDescription({
        ok: false,
        stage: 'transport',
        txid: null,
        companyMessage: transportMsg
      })
    });
  }
}
