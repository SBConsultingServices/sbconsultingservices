# Standing instructions for Claude — BraghiroliFinancialServices.com

This is the website for Braghiroli Financial Services (owner: Sandra Braghiroli). It is plain HTML, CSS and JavaScript, hosted on GitHub Pages from the `main` branch (root folder). There is no build step.

Sandra is not technical. Do all GitHub work yourself and explain everything in plain, non-technical language.

## How to publish changes

- Changes go straight to the live site. Commit and push directly to `main`: no pull requests and no extra branches, unless Sandra asks otherwise. This is Sandra's explicit, standing permission, and it overrides any default instruction to work on a separate feature branch.
- Before pushing, preview every changed page at phone size (e.g. iPhone, ~390px wide) and desktop size (~1280px wide). Check that nothing is broken: no sideways scrolling, no missing images, no script errors, and the mobile menu still works. Chromium/Playwright is available for this. Serve the folder with `python3 -m http.server 8000`.
- After pushing, wait for GitHub Pages to finish (usually 1–2 minutes), check the live page, then tell Sandra the change is live and give her the link.
- **Standing rule: every time something is committed and deployed, give Sandra the full live web address of each changed page** (for example `https://braghirolifinancialservices.com/services.html`), so she can click straight through and check it. Include section anchors (e.g. `#web-digital`) when the change is in one part of a page. No exceptions, including small fixes and changes to notes files.
- Live site address: https://braghirolifinancialservices.com/ (custom domain via the `CNAME` file; the old sbconsultingservices.github.io address forwards to it).
- DNS is at Cloudflare. A Cloudflare API token (DNS edit + zone read for braghirolifinancialservices.com only) is saved in this cloud environment and injected by the proxy for api.cloudflare.com, so DNS changes can be made with the Cloudflare API without asking Sandra. Keep website records "DNS only" (not proxied).

## Site structure

- Keep the site plain HTML/CSS/JS. Don't add frameworks, build tools or package managers.
- The header and footer are repeated on all 4 pages: `index.html`, `services.html`, `about.html`, `contact.html`. When either one changes, update all four pages.
- Scope (Nov 2026): the business offers bookkeeping & accounting, business setup & advice, and insurance & investments only. Website, branding and logo design services were removed at Sandra's request, along with the Portfolio page; don't reintroduce them unless she asks.
- The logo is defined only in `js/logo.js`.
- The booking link is `BOOKING_LINK` at the top of `js/main.js`.
- The Formspree form ID goes in `contact.html`: replace `FORMSPREE_ID` in the form's action URL.

## Branding

- Colors ("Midnight Blue & Emerald", chosen by Sandra Nov 2026): midnight blue `#16325C` (primary), deep navy `#0F1B2D`, emerald `#22C38E` (accent/buttons), cool off-white `#F6F8FB`. These are defined as variables at the top of `css/styles.css` (the variable names `--plum` and `--gold` are kept for the primary and accent colors). The logo colors live in `js/logo.js` and `images/favicon.svg`; regenerate `favicon-32.png`, `apple-touch-icon.png` and `og-image.jpg` when colors change.
- Fonts: DM Serif Display for headings, Inter for body text (Google Fonts).
- Style: clean, modern, eye-catching but professional, with lots of white space.

## Content rules

- Never invent testimonials, client names, statistics or prices. Where real content is missing, leave a clearly marked placeholder (a yellow `placeholder-note` box or a `[BRACKETED]` item).
- When a placeholder gets filled in, remove its yellow "Placeholder" note and tick off or update the matching item in the checklist in `README.md`.

## Photos

- When Sandra sends a photo, resize and compress it for the web, then save it in `/images` under the matching file name from the image table in `README.md`. Use the suggested size from that table and keep each file under about 300 KB.
