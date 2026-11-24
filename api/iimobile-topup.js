export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const proxyBase = 'http://161.97.150.196:1001';
  const apiBase = 'https://recharge-apis.iimobile.af';

  const { operator, phone, bundle_id, amount } = req.body || {};
  if (!operator || !phone) {
    return res.status(400).json({ ok: false, error: 'operator and phone are required' });
  }

  const normalizedOperator = String(operator).trim().toLowerCase();
  const normalizedPhone = String(phone).trim();
  const effectiveBundleId = bundle_id ? String(bundle_id).trim() : '543212506';

  const payload = {
    operator: normalizedOperator,
    phone: normalizedPhone,
    bundle_id: effectiveBundleId
  };
  if (amount !== undefined && amount !== null && amount !== '') {
    payload.amount = Number(amount);
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

    if (!initRes.resp.ok || (initData.status != 1 && initData.status != 2)) {
      return res.status(initRes.resp.status || 400).json({
        ok: false,
        stage: 'initiate',
        raw: initData
      });
    }

    if (txId) {
      const execRes = await postViaProxy('/v1/api/execute-transaction', {
        operator: normalizedOperator,
        txnid: Number(txId) || txId
      });
      const execData = execRes.raw || {};
      return res.status(execRes.resp.status || 200).json({
        ok: execRes.resp.ok && (execData.status == 1 || execData.status == 2),
        stage: 'execute',
        initiate: initData,
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
