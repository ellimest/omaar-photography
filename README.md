# Omaar Antonio — photography website

A responsive, static portfolio using your Between Stops photographs. No installation, paid domain, third-party fonts, or build step. Open index.html to preview locally. Instagram inquiries work without a server. The inquiry copier works on HTTPS; local browser previews may require manual copying.

## Publish from GitHub

1. Create a public GitHub repository named `omaar-photography` (or use an existing repository).
2. Upload the contents of this folder directly to the repository root. Keep the assets folder intact. Upload the files, not this ZIP.
3. For a portfolio-only GitHub Pages edition, change `SHOW_COMMERCIAL_OFFERS = true` to `false` in site.js. The session and print sections and navigation link will be removed. For a permanent portfolio-only source, also delete the `.commercial` elements from index.html before publishing.
4. Open repository Settings → Pages → Build and deployment → Deploy from a branch. Select main and / (root), then Save.
5. GitHub will show your actual published URL. Usually it is https://YOUR-USERNAME.github.io/omaar-photography/. Leave the custom domain field empty; don't create a CNAME file.

GitHub Pages restricts using its service to run an online business or a site primarily facilitating commercial transactions. For the full session/pricing edition, keep this repository on GitHub and deploy through an appropriate static host, such as Cloudflare Pages. Verify that host's current plan and terms before deploying. For a static host use no build command; output directory is the repository root. No secrets or payment collection are included.

Official documentation:
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## Edit the site

- Copy, prices, Instagram links, photo alt text: index.html.
- Colors, layout, responsive rules: styles.css.
- Inquiry copy, image viewer, portfolio-only switch: site.js.
- Images: assets/. Relative paths support GitHub project-site URLs.

The descriptive image captions are proposed editorial labels, not claims about existing artwork titles. This site uses your street/film series as portfolio work; it does not represent those images as courthouse wedding commissions.

## Before advertising the film packages

Confirm commercial darkroom access, available paper sizes, costs, and realistic print turnaround. Prices are introductory offers carried over from the planning workbook. Confirm venue permissions and availability before booking. Supply cancellation, payment and delivery terms directly to clients before collecting money. No booking dates or payments are accepted by the site.

## Verification

HTML local asset targets, image decoding, JavaScript syntax, and ZIP contents were checked. Browser rendering was not tested in this environment. The source includes mobile breakpoints, keyboard focus styles, a native accessible image dialog, and reduced-motion support. Verify the deployed site on a phone and desktop before promotion.

Photography © Omaar Antonio. Do not reuse the photographs without permission.
