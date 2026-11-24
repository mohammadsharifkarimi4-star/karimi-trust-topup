export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const proxyBase = (process.env.PROXY_BASE_URL || 'http://161.97.150.196:1001').replace(/\/+$/, '');
  const apiBase = (process.env.IIMOBILE_API_BASE || 'https://recharge-apis.iimobile.af').replace(/\/+$/, '');
  const defaultBundleId = process.env.IIMOBILE_DEFAULT_BUNDLE_ID || '543212506';

  const { operator, phone, bundle_id, amount } = req.body || {};
  if (!operator || !phone) {
    return res.status(400).json({ ok: false, error: 'operator and phone are required' });
  }

  const normalizedOperator = String(operator).trim().toLowerCase();
  const normalizedPhone = String(phone).trim();
  const effectiveBundleId = bundle_id ? String(bundle_id).trim() : String(defaultBundleId).trim();

  const payload = {
    operator: normalizedOperator,
    phone: normalizedPhone,
    bundle_id: effectiveBundleId
  };
  if (amount !== undefined && amount !== null && amount !== '') {
    payload.amount = Number(amount);
  }

  function isPositiveStatus(data) {
    if (!data || typeof data !== 'object') return false;
    const st = data.status;
    if (st === 1 || st === 2 || st === '1' || st === '2' || st === true || st === 'success' || st === 'ok') {
      return true;
    }
    if (data.success === true) return true;
    return false;
  }

  function formatFriendlyError(data, fallbackMsg) {
    const rawMsg = String(
      (data && (data.message || data.error || data.msg || data.detail)) || fallbackMsg || ''
    ).trim();

    const lower = rawMsg.toLowerCase();
    if (
      lower.includes('balance') ||
      lower.includes('insufficient') ||
      lower.includes('credit') ||
      lower.includes('fund') ||
      lower.includes('موجودی')
    ) {
      return 'سیستم موجودی ندارد؛ شارژ انجام نشد.';
    }
    return rawMsg || 'درخواست شارژ توسط سرویس مقصد تایید نشد.';
  }

  async function postViaProxy(endpointPath, bodyObj) {
    const targetUrl = `${apiBase}${endpointPath}`;
    const proxyUrl = `${proxyBase}/?url=${encodeURIComponent(targetUrl)}`;
    const resp = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-target-url': targetUrl
      },
      body: JSON.stringify(bodyObj)
    });
    const raw = await resp.json().catch(() => ({}));
    return { resp, raw };
  }

  try {
    const initRes = await postViaProxy('/v1/api/initiate-transaction', payload);
    const initData = initRes.raw || {};
    const txId =
      initData.txid ||
      initData.transaction_id ||
      initData.id ||
      (initData.data && (initData.data.txid || initData.data.transaction_id || initData.data.id));

    if (!initRes.resp.ok || (!isPositiveStatus(initData) && !txId)) {
      const friendlyError = formatFriendlyError(initData, 'Initiate transaction failed');
      return res.status(initRes.resp.status >= 400 ? initRes.resp.status : 400).json({
        ok: false,
        stage: 'initiate',
        no_balance: friendlyError.includes('موجودی'),
        error: friendlyError,
        raw: initData
      });
    }

    if (txId) {
      const execRes = await postViaProxy('/v1/api/execute-transaction', {
        operator: normalizedOperator,
        txnid: Number(txId) || txId
      });
      const execData = execRes.raw || {};
      const execOk = execRes.resp.ok && (isPositiveStatus(execData) || execData.status === undefined);
      const friendlyError = execOk ? undefined : formatFriendlyError(execData, 'Execute transaction failed');

      return res.status(execRes.resp.status || 200).json({
        ok: execOk,
        stage: 'execute',
        txid: txId,
        initiate: initData,
        no_balance: friendlyError ? friendlyError.includes('موجودی') : false,
        error: friendlyError,
        raw: execData
      });
    }

    return res.status(initRes.resp.status || 200).json({
      ok: true,
      stage: 'initiate',
      raw: initData
    });
  } catch (err) {
    return res.status(502).json({
      ok: false,
      error: err && err.message ? err.message : 'Proxy request failed'
    });
  }
}
