# The Pangasinan Heritage Digital Showcase

## Activity 1.1 + Activity 2.1 / 2.2

**Project Title:** The Pangasinan Heritage Digital Showcase  
**Student Name:** ______________________________  
**Selected Framework:** React + Next.js 14 App Router  
**Architecture:** Static Site Generation (SSG) / static export  
**Deployment:** GitHub Pages

### Activity 1.1
The project uses Atomic Design:
- `components/atoms/` — Button, ColorToken, HeritageImage, Typography
- `components/molecules/` — NavigationItem, SearchForm, HeritageCard
- `components/organisms/` — HeaderNavigation, HeritageGrid
- `data/` — heritage content
- `app/` — pages/routes
- `public/` — lightweight local SVG assets

### Activity 2.1 — Static Site Generation
`next.config.mjs` uses:

```js
output: "export"
```

Running `npm run build` generates the static website in `out/`.

Dynamic heritage pages are generated from `generateStaticParams()` in:
`app/site/[slug]/page.tsx`

### Activity 2.2 — GitHub Pages
The project includes:
`.github/workflows/deploy.yml`

The workflow:
1. Installs dependencies.
2. Builds the Next.js static export.
3. Uploads `out/` as a GitHub Pages artifact.
4. Deploys the artifact to GitHub Pages.

For a repository named `my-heritage-showcase`, the build is given:

```text
NEXT_PUBLIC_BASE_PATH=/my-heritage-showcase
```

This makes project-page links and static assets work under:
`https://USERNAME.github.io/my-heritage-showcase/`

### Local Run

```bash
npm install
npm run dev
```

Open:
`http://localhost:3000`

### Test the production build

```bash
npm run build
```

If successful, the generated site is in:

```text
out/
```

### GitHub Pages Setup
1. Create a public GitHub repository.
2. Upload/push this entire project.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main`.
6. The included workflow builds and deploys the site.
7. Copy the generated GitHub Pages URL into the Activity 2 submission.

### Lighthouse
Run Chrome DevTools → Lighthouse on the live GitHub Pages URL.
Record:
- Performance
- Accessibility
- Best Practices
- SEO

Do not invent scores. Attach the real Lighthouse screenshot/PDF after deployment.
