import PageHead from '../components/PageHead.jsx';
import { notifications } from '../data/content.js';

export default function Notifications() {
  return (
    <>
      <PageHead title="Notifications" lead="Policy changes, deployment updates and announcements for clients and partners." />
      <section className="section">
        <div className="wrap narrow">
          {notifications.length === 0 && <p>No notifications at the moment. Check back soon.</p>}
          <ul className="timeline">
            {notifications.map((n) => (
              <li key={n.id}>
                <time dateTime={n.date}>
                  {new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
