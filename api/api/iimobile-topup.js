export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const token = (process.env.IIMOBILE_JWT_TOKEN || '').trim();
  const proxyBase = 'http://161.97.150.196:1001';
  const apiBase = 'https://recharge-apis.iimobile.af';

  if (!token) {
    return res.status(500).json({ ok: false, error: 'IIMOBILE_JWT_TOKEN is missing' });
  }

  const { operator, phone, bundle_id, amount } = req.body || {};
  if (!operator || !phone) {
    return res.status(400).json({ ok: false, error: 'operator and phone are required' });
  }

  const targetUrl = `${apiBase}/v1/api/initiate-transaction`;
  const proxyUrl = `${proxyBase}/?url=${encodeURIComponent(targetUrl)}`;

  const payload = {
    operator: String(operator).trim().toLowerCase(),
    phone: String(phone).trim()
  };
  if (bundle_id) payload.bundle_id = String(bundle_id).trim();
  if (amount !== undefined && amount !== null && amount !== '') payload.amount = Number(amount);

  try {
    const resp = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
        'x-target-url': targetUrl
      },
      body: JSON.stringify(payload)
    });

    const data = await resp.json().catch(() => ({}));
    return res.status(resp.status).json({
      ok: resp.ok && (data.status == 1 || data.status == 2),
      raw: data
    });
  } catch (err) {
    return res.status(502).json({
      ok: false,
      error: err && err.message ? err.message : 'Proxy request failed'
    });
  }
}
