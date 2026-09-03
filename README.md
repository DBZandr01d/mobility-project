# The Mobility Project

A pump.fun charity campaign led by **Maria Del Sol** — United Nations Verified
Agent, adaptive surfer and double amputee — to redesign mobility and hope for
disabled people. Donations go to [Dare2tri](https://dare2tri.org/).

## What this is

A single-page web app. Every tab is a clean URL — `/`, `/mission`,
`/interviews`, `/books`, `/competitions` — with no `.html` in the address bar.
There is no build step: open `index.html` and it runs.

```
index.html                 app shell (header, footer, intro film, lightbox)
404.html                   byte-copy of index.html — the static-host SPA fallback
assets/css/app.css         the whole design system
assets/js/config.js        ← the only file to edit for the pump.fun mint address
assets/js/views.js         page content, one function per route
assets/js/app.js           router, nav, reveals, lightbox, intro film
assets/img/                logo lock-up, mark, app icons
assets/photos|life|books|competitions|interviews|video/   original media
```

## Changing the token

Edit `MINT_ADDRESS` in `assets/js/config.js`. Every "Buy on pump.fun" link on
every page picks it up.

## Adding or editing content

Each route is a function in `assets/js/views.js` returning an HTML string.
Add a route by writing the function and registering it in the `ROUTES` map at
the bottom of that file, then add a `NAV_ITEMS` entry for the tab.

## Running locally

```bash
npx serve -s .
```

`-s` makes unknown paths fall back to `index.html`, so pasting a deep link like
`/books` into the address bar works exactly as it will in production.

`python -m http.server 8000` also works for clicking around, but it has no
fallback: deep links typed directly return 404. Opening `index.html` straight
off disk works too — the router falls back to hash URLs (`index.html#/books`)
because `file://` has no History API support.

## Deploying

The clean URLs need the host to serve `index.html` for unknown paths.

- **GitHub Pages** — nothing to do. `404.html` is the fallback and `.nojekyll`
  keeps Jekyll out of the way. A project page served at `/<repo>/` is detected
  at runtime, so no base-path config is needed.
- **Netlify** — `_redirects` is in place (legacy `.html` URLs 301 to the clean
  ones, everything else falls through to the app).
- **Vercel** — `vercel.json` is in place.

`books.html`, `competitions.html` and `interviews.html` remain as small
redirect stubs so links published before the rebrand still land in the right
place.
