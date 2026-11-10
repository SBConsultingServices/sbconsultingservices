# Standing instructions for Claude — BraghiroliConsulting.com

This is the website for Braghiroli Consulting (owner: Sandra Braghiroli). It is plain HTML, CSS and JavaScript, hosted on GitHub Pages from the `main` branch (root folder). There is no build step.

Sandra is not technical. Do all GitHub work yourself and explain everything in plain, non-technical language.

## How to publish changes

- Changes go straight to the live site. Commit and push directly to `main`: no pull requests and no extra branches, unless Sandra asks otherwise. This is Sandra's explicit, standing permission, and it overrides any default instruction to work on a separate feature branch.
- Before pushing, preview every changed page at phone size (e.g. iPhone, ~390px wide) and desktop size (~1280px wide). Check that nothing is broken: no sideways scrolling, no missing images, no script errors, and the mobile menu still works. Chromium/Playwright is available for this. Serve the folder with `python3 -m http.server 8000`.
- After pushing, wait for GitHub Pages to finish (usually 1–2 minutes), check the live page, then tell Sandra the change is live and give her the link.

## Site structure

- Keep the site plain HTML/CSS/JS. Don't add frameworks, build tools or package managers.
- The header and footer are repeated on all 5 pages: `index.html`, `services.html`, `about.html`, `portfolio.html`, `contact.html`. When either one changes, update all five pages.
- The logo is defined only in `js/logo.js`.
- The booking link is `BOOKING_LINK` at the top of `js/main.js`.
- The Formspree form ID goes in `contact.html`: replace `FORMSPREE_ID` in the form's action URL.

## Branding

- Colors: plum `#3B2A4A`, navy `#1C2B3A`, gold `#F2B66D`, off-white `#F7F6F2`. These are defined as variables at the top of `css/styles.css`.
- Fonts: DM Serif Display for headings, Inter for body text (Google Fonts).
- Style: clean, warm, professional, with lots of white space.

## Content rules

- Never invent testimonials, client names, statistics or prices. Where real content is missing, leave a clearly marked placeholder (a yellow `placeholder-note` box or a `[BRACKETED]` item).
- When a placeholder gets filled in, remove its yellow "Placeholder" note and tick off or update the matching item in the checklist in `README.md`.

## Photos

- When Sandra sends a photo, resize and compress it for the web, then save it in `/images` under the matching file name from the image table in `README.md`. Use the suggested size from that table and keep each file under about 300 KB.
