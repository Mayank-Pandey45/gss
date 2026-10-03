import PageHead from '../components/PageHead.jsx';
import { profile } from '../data/content.js';

export default function Company() {
  return (
    <>
      <PageHead title="Company profile" lead={profile.intro} />
      <section className="section">
        <div className="wrap">
          <h2>What we stand for</h2>
          <div className="grid grid-3">
            {profile.values.map((v) => (
              <article key={v.title} className="card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <h2>Leadership</h2>
          <div className="grid grid-3">
            {profile.leadership.map((p, i) => (
              <article key={i} className="card person">
                <div className="avatar" aria-hidden="true">{p.role[0]}</div>
                <h3>{p.name}</h3>
                <p className="meta">{p.role}</p>
                <p>{p.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
