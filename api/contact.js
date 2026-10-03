// Vercel serverless function: POST /api/contact
// Phase 1: validates input and writes the enquiry to the function logs.
// Phase 2: replace the console.log with an INSERT into PostgreSQL
// (see README) and send a notification email to the team.

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

  // Honeypot: pretend success so bots do not retry
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const entry = {
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 30),
    interest: clean(body.interest, 60),
    message: clean(body.message, 3000),
    receivedAt: new Date().toISOString(),
  };

  if (!entry.name) return res.status(400).json({ error: 'Enter your name.' });
  if (!emailRe.test(entry.email)) return res.status(400).json({ error: 'Enter a valid email address.' });
  if (entry.message.length < 10) return res.status(400).json({ error: 'Write a message of at least 10 characters.' });

  console.log('CONTACT_ENQUIRY', JSON.stringify(entry));
  return res.status(200).json({ ok: true });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
