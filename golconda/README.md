# Golconda Security Services: website

React (Vite) front end with a Vercel serverless contact endpoint.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```
The contact form posts to `/api/contact`. To test it locally, install the Vercel CLI and run `vercel dev` instead of `npm run dev`.

## Add your logo
Save the original logo as `public/logo.png` (transparent background works best on the navy header). If you prefer SVG, change the `src` in `src/components/Logo.jsx`. Until the file exists, a placeholder mark is shown.

## Edit content
All public text (services, notifications, events, profiles, openings, contact details) is in `src/data/content.js`. Items marked SAMPLE are placeholders.

## Deploy: GitHub + Vercel
1. `git init && git add . && git commit -m "Initial site"`
2. Create an empty GitHub repository and push.
3. In Vercel choose Add New Project, import the repository. Framework preset: Vite. Build command `npm run build`, output `dist`.
4. Every push to `main` redeploys. Add your domain under Project Settings, Domains.

## Roadmap
**Phase 1 (this repo):** public site, responsive layout, contact endpoint (validated, logged to Vercel function logs).
**Phase 2:** PostgreSQL (Neon or Vercel Postgres) for contact submissions; Express/serverless API; team login with hashed passwords, server-side sessions and roles; dashboard to add, edit and delete services, events, notifications and profiles; protected document area.
**Phase 3:** email notification for new enquiries, audit log, rate limiting, backups.
