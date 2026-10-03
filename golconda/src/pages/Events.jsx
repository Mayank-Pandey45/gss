import PageHead from '../components/PageHead.jsx';
import { events } from '../data/content.js';

export default function Events() {
  return (
    <>
      <PageHead title="Upcoming events" lead="Briefings, training days and workshops from our physical and cyber teams." />
      <section className="section">
        <div className="wrap narrow">
          {events.length === 0 && <p>No events are scheduled right now. Check back soon.</p>}
          <ul className="events">
            {events.map((e) => {
              const d = new Date(e.date);
              return (
                <li key={e.id}>
                  <div className="date-block" aria-hidden="true">
                    <span>{d.toLocaleDateString('en-IN', { day: 'numeric' })}</span>
                    <small>{d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</small>
                  </div>
                  <div>
                    <h3>{e.title}</h3>
                    <p className="meta">
                      <time dateTime={e.date}>{d.toLocaleDateString('en-IN', { dateStyle: 'long' })}</time>, {e.place}
                    </p>
                    <p>{e.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
