# Cache Busting Guide for MG Art Pro

This document explains how CSS and static asset caching works on the site and how to ensure site visitors immediately receive styling and script updates without browser caching issues.

---

## 1. Why Cache Issues Happen

Browsers automatically store local copies of static files like `/assets/css/main.css` and `/assets/js/main.js` to speed up page load times. When changes are made to CSS or JS files on the server without changing their request URL, browsers may serve the old cached version until the cache expires or is manually cleared.

---

## 2. Recommended Solution: Query String Versioning

Since MG Art Pro is a static HTML site without a build pipeline, the cleanest and most effective method is **Cache Busting via Query Strings**.

### How It Works
Add a version query parameter (`?v=...`) to the asset link in HTML:

```html
<!-- Stylesheet reference -->
<link rel="stylesheet" href="/assets/css/main.css?v=20260905" />

<!-- JavaScript reference -->
<script defer src="/assets/js/main.js?v=20260905"></script>
```

When the query parameter changes (e.g. from `?v=20260905` to `?v=20260906` or `?v=2`), browsers treat it as a distinct URL and immediately download the updated file.

---

## 3. Workflow for Future CSS / JS Updates

Whenever you make visual CSS or JS script changes:

1. **Update the version parameter** across all HTML files.
2. Example using zsh / terminal command:
   ```bash
   find . -name "*.html" -exec sed -i '' 's|/assets/css/main.css?v=[^"]*|/assets/css/main.css?v=20260906|g' {} +
   ```

---

## 4. Alternative: Server / Hosting Cache Headers

If hosting on platforms like Netlify, Vercel, or Apache/Nginx, you can also configure HTTP Cache-Control headers:

```http
# Short cache for static CSS/JS
Cache-Control: public, max-age=0, must-revalidate
```

Using query string versioning (`?v=...`) alongside sensible server headers guarantees instant updates for all site visitors across mobile and desktop browsers.
