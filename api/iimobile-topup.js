export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const proxyBase = (process.env.PROXY_BASE_URL || 'http://161.97.150.196:1001').replace(/\/+$/, '');
  const apiBase = (process.env.IIMOBILE_API_BASE || 'https://recharge-apis.iimobile.af/v1/apis').replace(/\/+$/, '');
  const creditBundleId = String(process.env.IIMOBILE_CREDIT_BUNDLE_ID || process.env.IIMOBILE_DEFAULT_BUNDLE_ID || '543212506').trim();

  const { operator, phone, amount } = req.body || {};
  const numAmount = Number(amount);

  if (!operator || !phone || Number.isNaN(numAmount) || numAmount <= 0) {
    return res.status(400).json({
      ok: false,
      error: 'operator, phone, and valid positive amount are required for topup'
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

  function isPositiveStatus(data) {
    if (!data || typeof data !== 'object') return false;
    const st = data.status;
    return st === 1 || st === 2 || st === '1' || st === '2' || st === true || data.success === true;
  }

  function formatFriendlyError(data, fallbackMsg) {
    const rawMsg = String(
      (data && (data.message || data.error || data.msg || data.detail)) || fallbackMsg || ''
    ).trim();

    const lower = rawMsg.toLowerCase();
    if (
      lower.includes('low balance') ||
      lower.includes('insufficient') ||
      lower.includes('not enough balance') ||
      lower.includes('موجودی')
    ) {
      return 'سیستم موجودی ندارد؛ شارژ انجام نشد.';
    }
    return rawMsg || 'درخواست شارژ توسط سرویس مقصد تایید نشد.';
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

    return { resp, raw, targetUrl };
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
      const friendlyError = formatFriendlyError(initData, 'Initiate transaction failed');
      const statusCode = initRes.resp.status >= 400 ? initRes.resp.status : 400;
      return res.status(statusCode).json({
        ok: false,
        stage: 'initiate',
        no_balance: friendlyError.includes('موجودی'),
        error: friendlyError,
        targetUrl: initRes.targetUrl,
        raw: initData
      });
    }

    if (txId !== undefined && txId !== null && txId !== '') {
      const parsedTxnId = /^\d+$/.test(String(txId)) && Number(txId) <= Number.MAX_SAFE_INTEGER
        ? Number(txId)
        : String(txId);

      const execRes = await postViaProxy('/v1/api/execute-transaction', {
        operator: normalizedOperator,
        txnid: parsedTxnId
      });
      const execData = execRes.raw || {};
      const execOk = execRes.resp.ok && isPositiveStatus(execData);
      const friendlyError = execOk ? undefined : formatFriendlyError(execData, 'Execute transaction failed');
      const statusCode = execOk ? 200 : (execRes.resp.status >= 400 ? execRes.resp.status : 400);

      return res.status(statusCode).json({
        ok: execOk,
        stage: 'execute',
        txid: txId,
        initiate: initData,
        no_balance: friendlyError ? friendlyError.includes('موجودی') : false,
        error: friendlyError,
        targetUrl: execRes.targetUrl,
        raw: execData
      });
    }

    return res.status(200).json({
      ok: true,
      stage: 'initiate',
      targetUrl: initRes.targetUrl,
      raw: initData
    });
  } catch (err) {
    const isTimeout = err && (err.name === 'TimeoutError' || err.name === 'AbortError');
    return res.status(isTimeout ? 504 : 502).json({
      ok: false,
      error: isTimeout
        ? 'پاسخ‌گویی پروکسی یا سرویس مقصد زمان‌بر شد.'
        : (err && err.message ? err.message : 'Proxy request failed')
    });
  }
}
