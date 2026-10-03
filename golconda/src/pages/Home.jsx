import { useState } from 'react';
import { Link } from 'react-router-dom';
import Ramparts from '../components/Ramparts.jsx';
import { layers, services, notifications, events, company } from '../data/content.js';

const fmt = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Home() {
  const [active, setActive] = useState(null);
  const physical = services.filter((s) => s.domain === 'physical');
  const cyber = services.filter((s) => s.domain === 'cyber');

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>{company.tagline}</h1>
            <p className="lead">
              Golconda Security Services protects people, property and information. We plan
              guarding, access control and surveillance together with penetration testing,
              monitoring and compliance, so there is no gap between the two.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/contact">Request a security review</Link>
              <Link className="btn btn-outline-light" to="/services">View services</Link>
            </div>
            <ul className="layer-list" onMouseLeave={() => setActive(null)}>
              {layers.map((l, i) => (
                <li key={l.name}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                    className={active === i ? 'on' : ''}
                  >
                    <strong>{l.name}</strong>
                    <span>{l.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-art">
            <Ramparts active={active} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Two disciplines, one security plan</h2>
          <div className="split">
            <div className="panel">
              <h3>Physical security</h3>
              <ul className="plain">
                {physical.map((s) => <li key={s.id}>{s.title}</li>)}
              </ul>
            </div>
            <div className="panel panel-blue">
              <h3>Cybersecurity</h3>
              <ul className="plain">
                {cyber.map((s) => <li key={s.id}>{s.title}</li>)}
              </ul>
            </div>
          </div>
          <p className="center"><Link className="btn btn-primary" to="/services">See what each service includes</Link></p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap two-col">
          <div>
            <h2>Latest notifications</h2>
            <ul className="feed">
              {notifications.slice(0, 3).map((n) => (
                <li key={n.id}>
                  <time dateTime={n.date}>{fmt(n.date)}</time>
                  <strong>{n.title}</strong>
                </li>
              ))}
            </ul>
            <Link className="text-link" to="/notifications">All notifications</Link>
          </div>
          <div>
            <h2>Upcoming events</h2>
            <ul className="feed">
              {events.slice(0, 3).map((e) => (
                <li key={e.id}>
                  <time dateTime={e.date}>{fmt(e.date)}</time>
                  <strong>{e.title}</strong>
                  <span>{e.place}</span>
                </li>
              ))}
            </ul>
            <Link className="text-link" to="/events">All events</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Tell us what you need to protect</h2>
          <p>Share your site or systems and we will propose a review within two working days.</p>
          <Link className="btn btn-primary" to="/contact">Contact us</Link>
        </div>
      </section>
    </>
  );
}
