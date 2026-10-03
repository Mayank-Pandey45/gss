import PageHead from '../components/PageHead.jsx';

// Phase 1: sign-in is intentionally not active. Phase 2 adds real authentication
// (hashed passwords, server-side sessions, roles) and the team dashboard.
export default function Login() {
  return (
    <>
      <PageHead title="Team login" lead="For Golconda staff only." />
      <section className="section">
        <div className="wrap narrow">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="notice notice-info" role="status">
              <strong>Team sign-in is not active yet.</strong> The dashboard for editing services, events,
              notifications and profiles launches in the next phase, once authentication is in place.
            </div>
            <label>Work email
              <input type="email" disabled autoComplete="username" />
            </label>
            <label>Password
              <input type="password" disabled autoComplete="current-password" />
            </label>
            <button className="btn btn-primary" disabled>Sign in</button>
          </form>
        </div>
      </section>
    </>
  );
}
