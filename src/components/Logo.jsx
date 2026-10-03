import { useState } from 'react';

// Drop the original logo at /public/logo.png (or logo.svg: change the src below).
// Until it exists, the built-in mark is shown instead.
export default function Logo({ light = false }) {
  const [missing, setMissing] = useState(false);
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      {missing ? (
        <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
          <rect width="64" height="64" rx="12" fill="#2F6FED" />
          <path d="M12 50V30h6v-6h6v6h4v-8h8v8h4v-6h6v6h6v20z" fill="#F3F5F8" />
          <path d="M28 50v-9a4 4 0 0 1 8 0v9z" fill="#2F6FED" />
        </svg>
      ) : (
        <img className="logo-img" src="/logo.png" alt="" onError={() => setMissing(true)} />
      )}
      <span className="logo-text">
        <strong>Golconda</strong>
        <span>Security Services</span>
      </span>
    </span>
  );
}
