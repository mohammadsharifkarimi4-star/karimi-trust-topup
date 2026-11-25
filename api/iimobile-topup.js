export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      stage: 'validation',
      error: 'متد درخواست مجاز نیست (فقط POST پشتیبانی می‌شود).'
    });
  }

  const proxyBase = (process.env.PROXY_BASE_URL || 'http://161.97.150.196:1001').replace(/\/+$/, '');
  const apiBase = (process.env.IIMOBILE_API_BASE || 'https://recharge-apis.iimobile.af/v1/apis').replace(/\/+$/, '');
  const creditBundleId = String(
    process.env.IIMOBILE_CREDIT_BUNDLE_ID || process.env.IIMOBILE_DEFAULT_BUNDLE_ID || '543212506'
  ).trim();

  const { operator, phone, amount } = req.body || {};
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

  const payload = {
    operator: normalizedOperator,
    phone: normalizedPhone,
    bundle_id: creditBundleId,
    amount: numAmount
  };

  function extractCompanyMessage(data, fallbackText = '') {
    if (typeof data === 'string') return data.trim();
    if (!data || typeof data !== 'object') return String(fallbackText || '').trim();

    const msg =
      data.msg ??
      data.message ??
      data.error ??
      data.detail ??
      data?.data?.msg ??
      data?.data?.message ??
      data?.data?.error ??
      data.rawText ??
      fallbackText ??
      '';

    return typeof msg === 'object' ? JSON.stringify(msg) : String(msg).trim();
  }

  function isPositiveStatus(data) {
    if (!data || typeof data !== 'object') return false;
    const st = data.status;
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
    if (apiBase.endsWith('/v1/apis') && cleanPath.startsWith('/v1/api/')) {
      return `${apiBase.slice(0, -'/apis'.length)}${cleanPath}`;
    }
    return `${apiBase}${cleanPath}`;
  }

  async function postViaProxy(endpointPath, bodyObj) {
    const targetUrl = buildTargetUrl(endpointPath);
    const proxyUrl = `${proxyBase}/?url=${encodeURIComponent(targetUrl)}`;

    const resp = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-target-url': targetUrl
      },
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

    const companyMessage = extractCompanyMessage(raw, text || resp.statusText);
    return { resp, raw, targetUrl, companyMessage };
  }

  try {
    const initRes = await postViaProxy('/v1/api/initiate-transaction', payload);
    const initData = initRes.raw || {};
    const txId =
      initData.txid ??
      initData.transaction_id ??
      initData.id ??
      initData?.data?.txid ??
      initData?.data?.transaction_id ??
      initData?.data?.id;

    if (!initRes.resp.ok || (!isPositiveStatus(initData) && !txId)) {
      const statusCode = initRes.resp.status >= 400 ? initRes.resp.status : 400;
      const description = buildTransactionDescription({
        ok: false,
        stage: 'initiate',
        txid: txId,
        companyMessage: initRes.companyMessage
      });

      return res.status(statusCode).json({
        ok: false,
        stage: 'initiate',
        error: initRes.companyMessage || 'Initiate transaction failed',
        company_message: initRes.companyMessage,
        company_status: initData?.status ?? null,
        company_http_status: initRes.resp.status,
        txid: txId ?? null,
        tx_description: description,
        targetUrl: initRes.targetUrl,
        initiate_raw: initData,
        raw: initData
      });
    }

    if (txId !== undefined && txId !== null && txId !== '') {
      const parsedTxnId =
        /^\d+$/.test(String(txId)) && Number(txId) <= Number.MAX_SAFE_INTEGER
          ? Number(txId)
          : String(txId);

      const execRes = await postViaProxy('/v1/api/execute-transaction', {
        operator: normalizedOperator,
        txnid: parsedTxnId
      });
      const execData = execRes.raw || {};
      const execOk = execRes.resp.ok && isPositiveStatus(execData);
      const statusCode = execOk ? 200 : (execRes.resp.status >= 400 ? execRes.resp.status : 400);
      const description = buildTransactionDescription({
        ok: execOk,
        stage: 'execute',
        txid: txId,
        companyMessage: execRes.companyMessage || initRes.companyMessage
      });

      return res.status(statusCode).json({
        ok: execOk,
        stage: 'execute',
        txid: txId,
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
