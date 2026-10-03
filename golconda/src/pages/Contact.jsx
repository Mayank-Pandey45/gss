import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';
import { company } from '../data/content.js';

const empty = { name: '', email: '', phone: '', interest: 'Physical security', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'The message could not be sent.');
      setStatus('sent');
      setForm(empty);
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  return (
    <>
      <PageHead title="Contact us" lead="Tell us about your site or systems. We reply within two working days." />
      <section className="section">
        <div className="wrap contact-grid">
          <form className="form" onSubmit={onSubmit} noValidate={false}>
            {status === 'sent' ? (
              <div className="notice notice-ok" role="status">
                <strong>Message sent.</strong> Our team will get back to you within two working days.
              </div>
            ) : (
              <>
                <label>Full name
                  <input required maxLength={120} value={form.name} onChange={set('name')} autoComplete="name" />
                </label>
                <div className="row">
                  <label>Email
                    <input required type="email" maxLength={160} value={form.email} onChange={set('email')} autoComplete="email" />
                  </label>
                  <label>Phone (optional)
                    <input type="tel" maxLength={30} value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  </label>
                </div>
                <label>I am interested in
                  <select value={form.interest} onChange={set('interest')}>
                    <option>Physical security</option>
                    <option>Cybersecurity</option>
                    <option>Both</option>
                    <option>Careers</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>Message
                  <textarea required rows={6} maxLength={3000} value={form.message} onChange={set('message')} />
                </label>
                {/* Honeypot: hidden from people, filled in by bots */}
                <label className="hp" aria-hidden="true">Website
                  <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
                </label>
                {status === 'error' && <div className="notice notice-err" role="alert">{error} Check your details and send again, or email us directly.</div>}
                <button className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending' : 'Send message'}
                </button>
              </>
            )}
          </form>
          <aside className="contact-side">
            <h3>Direct contact</h3>
            <p>{company.address}</p>
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            <p><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></p>
          </aside>
        </div>
      </section>
    </>
  );
}
