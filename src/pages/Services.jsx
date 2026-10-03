import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead.jsx';
import { services } from '../data/content.js';

const tabs = [
  { id: 'all', label: 'All services' },
  { id: 'physical', label: 'Physical security' },
  { id: 'cyber', label: 'Cybersecurity' },
];

export default function Services() {
  const [tab, setTab] = useState('all');
  const list = services.filter((s) => tab === 'all' || s.domain === tab);

  return (
    <>
      <PageHead
        title="Security solutions"
        lead="Choose a service or combine them. Every engagement starts with a risk assessment of your site, your systems or both."
      />
      <section className="section">
        <div className="wrap">
          <div className="tabs" role="tablist" aria-label="Filter services">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={tab === t.id ? 'on' : ''}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="grid">
            {list.map((s) => (
              <article key={s.id} className={`card ${s.domain === 'cyber' ? 'card-cyber' : 'card-physical'}`}>
                <p className="tag">{s.domain === 'cyber' ? 'Cybersecurity' : 'Physical security'}</p>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul className="ticks">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="center">
            <Link className="btn btn-primary" to="/contact">Request a quote</Link>
          </p>
        </div>
      </section>
    </>
  );
}
