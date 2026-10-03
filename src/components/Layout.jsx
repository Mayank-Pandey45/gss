import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { nav, company } from '../data/content.js';

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-row">
          <Link to="/" aria-label="Golconda Security Services, home"><Logo light /></Link>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {n.label}
              </NavLink>
            ))}
            <Link className="btn btn-outline-light nav-login" to="/team-login">Team login</Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Logo light />
            <p className="footer-note">{company.tagline}</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>{company.address}</li>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></li>
              <li><Link to="/team-login">Team login</Link></li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
