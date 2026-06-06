# Auto CDP — Dash Matrix (Frontend)

A clickable, **frontend-only** prototype of an automotive Customer Data Platform with a
four-tier role "matrix." Pure HTML / CSS / vanilla JavaScript — **no build step, no backend.**
All data is mock/demo data baked into `assets/js/app.js`.

Themed in **Florida State garnet & gold**.

## What's inside
- **Welcome / landing page** with a demo sign-in (routes to the Owner dashboard).
- **Four role tiers** (switch any time from the top bar or the tier cards):
  - **Owner** — clients, billing, orders, invoices, platform-wide direct mail.
  - **Agency / Group** — multi-rooftop rollup, audiences, journeys, co-op.
  - **GM** — live shoppers, attention queue, predictive insights, **Team & Access**.
  - **Staff** — daily worklist, inventory matches, follow-ups.
- **CDP essentials**: unified customer profiles, no-code audience builder,
  source→destination data flow, journeys, consent/compliance.
- **Direct Mail Engine** (the differentiator) and a **GM Team & Access** screen for
  granting teammates campaign / mail / audience / report permissions.
- Command palette (Cmd/Ctrl-K), drill-downs, and a live event stream.

> This is a UI prototype. The "login" is a demo and does not authenticate; there is no
> server, database, or persisted data.

## Run locally
No dependencies. Either open `index.html` directly, or (recommended) serve it:

```bash
# from the project root
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy (GitHub Pages)
1. Push to GitHub (see below).
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Your site goes live at
   `https://<username>.github.io/<repo>/`.

## Structure
```
auto-cdp-frontend/
├── index.html              # markup only; links the css + js
├── assets/
│   ├── css/styles.css      # all styles (FSU theme, layout, components)
│   └── js/app.js           # data, views, routing, interactions
├── README.md
├── .gitignore
└── LICENSE
```
