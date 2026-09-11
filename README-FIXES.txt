PANGASINAN HERITAGE - REPLACEMENT FILES

Copy these files into the matching locations in your existing project.
If Windows asks whether to replace/overwrite existing files, choose Yes.

REPLACE:
- app/page.tsx
- app/site/[slug]/page.tsx
- app/globals.css
- components/atoms/HeritageImage.tsx
- components/organisms/HeaderNavigation.tsx
- data/sites.ts
- .github/workflows/deploy.yml

ADD (new files):
- lib/basePath.ts
- public/balungao-hot-spring.svg

IMPORTANT:
- SearchForm.tsx can remain in the project, but the homepage no longer uses it.
- The replacement removes the non-functional search UI and uses an Explore button instead.
- The GitHub Actions workflow now uses npm install because the original ZIP has no package-lock.json; npm ci would fail without it.
- Public image paths are now prefixed correctly for GitHub Pages project URLs.
- Navigation hashes now work even when clicked from a heritage detail page.
- CSS now follows mobile-first min-width breakpoints.
- A keyboard skip link and per-site metadata were added.
