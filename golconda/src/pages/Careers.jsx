import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead.jsx';
import { openings, company } from '../data/content.js';

export default function Careers() {
  return (
    <>
      <PageHead
        title="Work with us"
        lead="We hire disciplined, reliable people for guarding, supervision and cybersecurity roles, and we train them well."
      />
      <section className="section">
        <div className="wrap narrow">
          <h2>Current openings</h2>
          <ul className="jobs">
            {openings.map((o) => (
              <li key={o.id}>
                <div>
                  <h3>{o.title}</h3>
                  <p className="meta">{o.type}, {o.place}</p>
                  <p>{o.body}</p>
                </div>
                <a
                  className="btn btn-outline"
                  href={`mailto:${company.email}?subject=${encodeURIComponent('Application: ' + o.title)}`}
                >
                  Apply by email
                </a>
              </li>
            ))}
          </ul>
          <p>
            Do not see a fit? <Link className="text-link" to="/contact">Send us a message</Link> with your background and the role you have in mind.
          </p>
        </div>
      </section>
    </>
  );
}
