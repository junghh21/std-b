const H = { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', 'Cache-Control': 'no-store' }
export const onRequest = () => Response.json({ ok: true, t: new Date().toISOString() }, { headers: H })
