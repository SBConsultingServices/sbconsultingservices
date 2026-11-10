# Braghiroli Consulting — BraghiroliConsulting.com

The website for Braghiroli Consulting: websites, branding, and business support for small businesses and start-ups.

It's plain HTML, CSS, and a little JavaScript. There's no framework and no build step. Edit a file, save it, and the change is live once it's pushed to GitHub.

```
/index.html        Home
/services.html     Services (Website & Branding, Business Services)
/about.html        About Sandra
/portfolio.html    Our Work
/contact.html      Contact & Book an Appointment
/css/styles.css    All styles (brand colors and fonts are at the top, in :root)
/js/logo.js        The logo, defined in ONE place (see "Changing the logo")
/js/main.js        Booking link, mobile menu, contact form
/images/           Placeholder images and favicons
```

---

## What I still need to provide (checklist)

- [ ] **Photos**: replace the placeholder images (full list below) with real photos. Keep the same file names.
- [ ] **Portfolio items**: for each of the 6 cards in `portfolio.html`, replace the image, `[Client Name]`, `[Type of work]`, and `[Description]`.
- [ ] **Before & after screenshots**: `before-after-old.jpg` and `before-after-new.jpg`, plus the `[Client Name]` on the Portfolio page.
- [ ] **FORMSPREE_ID**: set up the contact form (see below).
- [ ] **BOOKING_LINK**: add your Calendly (or similar) link (see below).
- [ ] **Social media links**: replace the `[Social media links placeholder]` box in the footer of each page.
- [ ] **Final logo choice**: window (current), monogram, or growth icon (see below).
- [ ] **About page details**: replace `[Additional personal background, to be added by Sandra]` in `about.html`.
- [ ] Remove each yellow dashed "Placeholder" note once its content is filled in.

> Tip: search the project for `PLACEHOLDER`, `[`, and `FORMSPREE_ID` to find every spot.

---

## Image placeholders

Every placeholder is a light box labeled with its file name. To replace one, save your photo into `/images/` with **exactly the same file name** (a `.jpg`). If you'd rather use another name or format, update the `src` in the HTML too.

| File | What goes there | Where it appears | Suggested size |
|---|---|---|---|
| `hero-website-mockup.jpg` | A polished website on a laptop and phone | Home (hero), Services (Website & Branding section) | 1200 × 900 |
| `small-business-owner.jpg` | A café, shop, or contractor owner working on a laptop | Home ("Meet Paul") | 1200 × 900 |
| `sandra-headshot.jpg` | Friendly, well-lit professional headshot of Sandra | About | 800 × 1000 (portrait) |
| `sandra-with-client.jpg` | Sandra reviewing a laptop with a client at a desk | About | 1200 × 800 |
| `before-after-old.jpg` | Screenshot of an outdated website (before) | Home + Portfolio (Before & After) | 1200 × 800 |
| `before-after-new.jpg` | The same site after the redesign (after) | Home + Portfolio (Before & After) | 1200 × 800 |
| `portfolio-1.jpg` … `portfolio-6.jpg` | Client websites/logos on laptop and phone mockups | Portfolio (one per card) | 1200 × 900 |
| `og-image.jpg` | The preview image shown when the site is shared on social media/text | All pages (Open Graph) | 1200 × 630 |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser tab icon, made from the logo | All pages | 48 / 32 / 180 px |

Service icons are drawn in code (inline SVG line icons in the brand colors), so there's nothing to replace there.

Free photo sources: [Unsplash](https://unsplash.com) and [Pexels](https://www.pexels.com). Keep each photo under about 300 KB so pages load fast. [Squoosh](https://squoosh.app) can shrink them.

---

## Setting the placeholders

### Contact form: `FORMSPREE_ID`
A static site can't send email by itself, so the form uses [Formspree](https://formspree.io) (it has a free plan).
1. Create a Formspree account and a new form. It sends messages to sdbraghiroli@gmail.com.
2. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`. The last part (`abcdwxyz`) is your form ID.
3. In `contact.html`, find `https://formspree.io/f/FORMSPREE_ID` and replace `FORMSPREE_ID` with your ID.

Until this is done, the form shows visitors your email and phone number instead of sending. A "Prefer email?" mailto link is always shown under the form.

### Booking: `BOOKING_LINK`
Open `js/main.js` and paste your scheduling link at the top:
```js
var BOOKING_LINK = 'https://calendly.com/your-name/consultation';
```
Every "Book an Appointment" / "Book a Website Consultation" button on the site will use it and open it in a new tab. Until it's set, those buttons go to the Contact page.

### Social media links
In the footer of **each** of the 5 pages, replace:
```html
<p class="footer-social-ph">[Social media links placeholder]</p>
```
with, for example:
```html
<ul class="footer-links">
  <li><a href="https://www.facebook.com/yourpage">Facebook</a></li>
  <li><a href="https://www.instagram.com/yourhandle">Instagram</a></li>
  <li><a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a></li>
</ul>
```

### Changing the logo
The logo is defined only in `js/logo.js`. At the top of that file:
- `LOGO_STYLE = 'window'`: white browser window, gold title bar, serif "B" (default)
- `LOGO_STYLE = 'monogram'`: navy "Bc" monogram badge
- `LOGO_STYLE = 'growth'`: rising-bar growth icon
- Or set `LOGO_IMAGE = 'images/logo.svg'` to use a finished logo file everywhere.

If you change the logo, also update the favicons and `og-image.jpg` in `/images/`.

---

## Previewing the site on your computer

**Quickest:** double-click `index.html` to open it in your browser. Everything works except the contact form.

**Closer to the real thing:** run a tiny local web server from the project folder:
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser. Press `Ctrl+C` to stop it.

---

## Publishing on GitHub Pages

1. Merge the pull request into the `main` branch.
2. On GitHub, open the repository → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then click **Save**.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

### Pointing BraghiroliConsulting.com to it

1. In **Settings → Pages → Custom domain**, enter `braghiroliconsulting.com` and click **Save**. (GitHub adds a `CNAME` file to the repo for you.)
2. At your domain registrar (GoDaddy, Namecheap, Google/Squarespace Domains, etc.), open the DNS settings for BraghiroliConsulting.com and add:

   | Type | Name / Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `<your-username>.github.io` |

   Remove any old A/CNAME records for `@` or `www` that point somewhere else (for example a "parked" page).
3. DNS changes can take from a few minutes up to 24–48 hours. Once GitHub shows the domain as verified, tick **Enforce HTTPS** on the Pages settings screen.
4. Optional but recommended: in your GitHub account settings → **Pages**, [verify the domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) so no one else can claim it.

Full instructions: [GitHub Docs: Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

---

## Making changes later

- **Text:** edit the HTML files directly. The header and footer are repeated on each page, so update all five if you change a nav link or footer detail.
- **Colors and fonts:** change the variables at the top of `css/styles.css`.
- **Brand colors:** plum `#3B2A4A`, navy `#1C2B3A`, gold `#F2B66D`, off-white `#F7F6F2`. Fonts: DM Serif Display (headings) and Inter (body), from Google Fonts.
