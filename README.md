# Vanta Property Group website

A static website (HTML, CSS and JavaScript). No build step or installation needed.

## Structure
```
index.html          the page content
css/styles.css      all styling (colours are variables at the top)
js/main.js          quote form and before/after sliders
images/
  logo.webp         logo used on the site (800px, transparent circle)
  logo.png          same logo as PNG, for social profiles etc.
  logo-original.png your original full-resolution logo
  favicon.png, apple-touch-icon.png
  work/             before/after photos (currently placeholders)
```

## Add your before/after photos
Replace the eight files in `images/work/` with your own photos, keeping the same filenames
(for example `exterior-cleaning-before.jpg` and `exterior-cleaning-after.jpg`).
Use JPG, landscape 4:3 (around 1200 x 900 px), ideally under 300 KB each.
Take the before and after from the same angle so the slider lines up.

## Update your details
Search for these in `index.html` and `js/main.js` and replace them:
- `07000 000000` and `07000000000` (phone number, display and link)
- `hello@vantapropertygroup.co.uk` (email, including the enquiry form in `js/main.js`)
- the three "Placeholder" review boxes in `index.html`: only add genuine client reviews

## Put it online
Upload the whole folder to a host (Cloudflare Pages, Netlify, or your domain provider's
hosting, uploading to `public_html`). Keep the folder structure exactly as it is.

## Notes
- The enquiry form opens the visitor's email app. For direct sending, use a form service such as Formspree.
- Fonts load from Google Fonts, so the first view needs an internet connection.
