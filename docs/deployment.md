# Deployment Notes (GitHub Pages)

## Hosting Model
- Static HTML/CSS/JS only.
- No build pipeline is required.
- Publish from the repository root on the `feature/redesign` branch (or merge to your production branch and publish from there).

## GitHub Pages Setup
1. Open repository settings.
2. Go to **Pages**.
3. Set source to **Deploy from a branch**.
4. Select the deployment branch and `/ (root)` folder.
5. Save and verify the Pages URL is active.

## Final URL Structure
- /
- /about/
- /artists/conductors/
- /artists/conductors/julian-rachlin/
- /artists/conductors/thomas-sanderling/
- /artists/conductors/cesar-alvarez/
- /artists/conductors/evan-alexis-christ/
- /artists/conductors/fabio-mastrangelo/
- /artists/conductors/hobart-earle/
- /artists/conductors/ruben-gazarian/
- /artists/conductors/andris-poga/
- /artists/conductors/dmytro-logvin/
- /artists/soloists/
- /ensembles/
- /orchestras/
- /orchestras/new-symphony-orchestra-israel/
- /orchestras/new-symphony-orchestra-israel/musicians/
- /orchestras/new-symphony-orchestra-israel-ru/
- /orchestras/ashdod-festival/
- /contact/

## SEO Assets
- `robots.txt` includes `Sitemap` directive.
- `sitemap.xml` includes all current production routes.
- Shared favicon at `/assets/icons/favicon.svg`.
