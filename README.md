# Graount — Multi-service affiliate website

Graount is a responsive static website template for a digital services affiliate directory.

## Pages and files
- `index.html` — home page and service category overview
- `services.html` — searchable and filterable directory
- `about.html` — about page and affiliate disclosure
- `styles.css` — responsive styles for mobile and desktop
- `script.js` — mobile menu and copyright year
- `services.js` — sample listings and configurable affiliate URL fields

## Before publishing
The service cards are sample category listings, not claims that Graount has partnerships with specific providers. Affiliate URLs are blank intentionally. In `services.js`, replace or update each listing with an actual provider, accurate details, and the affiliate URL issued by a program that has approved you. Do not invent URLs. If no approved link is available, leave `url: ""`; the page will show “Affiliate link not configured”.

Replace `your-email@example.com` in `about.html` with an email address you control. Review the disclosure and add privacy, cookie, terms and contact information appropriate to your actual business and affiliate programs.

## Publish using Android and GitHub Pages
1. Download `Graount-Website.zip` and extract it with your Android file manager.
2. Open GitHub in Chrome and go to your repository.
3. Choose **Add file → Upload files**. If it is not visible, use Chrome's three-dot menu → **Desktop site**, then reload the repository page.
4. Upload the six website files: `index.html`, `services.html`, `about.html`, `styles.css`, `script.js`, and `services.js`. You may upload `README.md` too. If Android's file picker cannot select multiple files, upload one at a time.
5. Add a commit message such as `Add Graount website` and tap **Commit changes**.
6. Open repository **Settings → Pages**. Choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then save.
7. Wait for GitHub Pages to publish and open the live URL shown on the Pages screen.
8. Test all pages, mobile navigation, search and category filters. Add only real, approved affiliate URLs and test them before sharing.

For a project repository, the URL usually resembles `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. Replace both examples with your real GitHub details; this is not a real URL.

## Configure an affiliate URL
For an individual item in `services.js`, replace the empty `url` value with the genuine URL from your affiliate dashboard, for example:
`url: "PASTE_YOUR_APPROVED_AFFILIATE_URL_HERE"`
Do not leave placeholder text in a live URL field.

This is a static website. It does not process payments or collect visitor data by itself.
