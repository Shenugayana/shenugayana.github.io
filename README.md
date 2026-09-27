# Shenugayana — Portfolio

A static portfolio with a monochrome foundation and controlled acid-green accents connecting professional software engineering and database experience with ongoing cybersecurity, data science, and AI work.

## Review milestone

The frontend is ready for UI review. No deployment workflow, remote push, or GitHub Pages setting has been applied. The existing public user site remains unchanged.

## Stack

React 19, TypeScript 6, Vite 8, Tailwind CSS 4, Lucide React. Custom semantic components suit this content-focused site; no charting library or shadcn package is needed. No backend, analytics, remote fonts, or runtime API calls.

Node 24 is recommended (Vite supports Node 20.19+ or 22.12+). The project uses npm and a committed-ready lockfile.

## Local setup

```powershell
cd D:\Projects\ShenugayanaPortfolio
npm ci
npm run dev -- --port 5180 --strictPort
```

Open http://127.0.0.1:5180/. The dev server only listens on loopback.

## Production build and review

```powershell
npm run build
npm run check:static
npm run preview -- --port 4180 --strictPort
```

Build runs TypeScript validation, Vite bundling, and static React prerendering. Each case study is emitted as its own `index.html`; navigation uses ordinary links. This avoids SPA routing fallbacks and supports direct requests and refreshes on GitHub Pages. React hydrates the existing HTML for the mobile navigation.

Routes:

- `/`
- `/projects/password-auditor/`
- `/projects/intelliops/`
- `/404.html`

## Project structure

```text
public/                 CV PDF and favicon
src/
  components/           Header, footer, contact, tags, project cards, diagrams
  data/                 Profile, experience, education, skills, projects
  pages/                Home and reusable project detail page
  App.tsx               Static pathname selection
  main.tsx              React hydration
  styles.css            Responsive monochrome design system
scripts/
  prerender.mjs         Static HTML generation
  verify-static.mjs     Internal link, anchor, and asset validation
docs/
  content-sources.md    Evidence and content boundaries
  qa.md                 Review record
```

## Updating content

Edit `src/data/` rather than duplicating content in components. Featured project `github` and `demo` URLs are optional; leave them absent until public URLs are available. The dissertation's optional `research` records can hold future verified methodology, evaluation, outcomes, or other research sections. Add screenshots or datasets only when available and appropriate to publish. Keep implemented, ongoing, and planned work distinct.

The supplied CV is copied into `public/Shenugayana-Arulananthan-CV.pdf`. Contact details are sourced from that CV. IntelliOps content comes from the owner's project brief; team technologies are not represented as individual proficiency or verified production delivery.

## GitHub Pages deployment

Live destination: https://shenugayana.github.io/ in `Shenugayana/shenugayana.github.io`.

`.github/workflows/deploy.yml` publishes updates to `main` through GitHub Actions. It uses Node 24, installs the lockfile with `npm ci`, runs brand tests, builds and prerenders the site, checks static links, and uploads only `dist/` to GitHub Pages. The deploy job has Pages and identity-token permissions; the build job only needs repository read access.

Repository Settings → Pages must use **GitHub Actions** as its build source. Run the deployment workflow manually to republish an unchanged commit. Production routes are real static directories, so direct links and refreshes work without a SPA fallback. The Vite base is `/` for this user site.

The previous site's commits remain in the repository history. Legacy `/projects.html` and `/resume.html` redirect to the catalogue and experience section. To roll back, revert the portfolio replacement commit and restore branch-based publishing, or redeploy a known-good Actions commit.

Do not commit `node_modules`, `dist`, local caches, credentials, `.env` files, or logs. Future changes can be reviewed in a branch before merging to `main`.

## Visual identity and themes

The default theme is dark. Light mode is a complete alternative with off-white surfaces and a darker accessible green for text. Color tokens and brand styling are centralized in `src/identity.css`; existing responsive layout rules remain in `src/styles.css`.

`Wordmark` is shared by the header and `BrandIntro`. A pre-render script (`public/brand-init.js`) applies the saved theme before the page renders. Theme selection is saved in localStorage and remains usable if storage is unavailable.

The introductory S → Shenugayana reveal runs once per tab session, completes in approximately 1.95 seconds, and has a 2.1-second failsafe. It does not rerun for section navigation or subsequent page loads in that session. Reduced-motion visitors skip it; Tab and Escape dismiss it immediately. The overlay is decorative, hidden from assistive technology, and absent without JavaScript. Prerendered page content remains in the HTML.

```powershell
npm run test:brand
npm run build
npm run check:static
```

`test:brand` checks default/saved themes, intro timing, repeat visits, reduced motion, and storage-failure fallback. Existing content, links, CV file, static routes, and GitHub Pages base configuration are retained. No deployment was performed for the visual update.

## Project catalogue

`/projects/` contains featured case-study previews, selected application work, and a compact archive. `/projects` redirects to the same static directory on GitHub Pages and in the local production preview. Existing case-study URLs are preserved.

Edit `src/data/projects.ts`: `presentationLevel` controls catalogue placement (`case-study`, `selected`, or `archive`). Numbering is generated in catalogue order. Set `detailPath` only for an existing detail page and use complete confirmed repository URLs in `github` and optional `secondRepo`. Projects without public links remain readable without fake buttons. The separate `featured` flag on detailed projects controls homepage visibility, so promoting a catalogue entry does not automatically expand the homepage.

`src/pages/Projects.tsx` renders the catalogue from this metadata; `src/catalogue.css` scopes its layouts independently of the approved homepage and case-study designs. The two supplied featured repositories are connected across cards, catalogue, and detail pages. No live-demo URLs have been added.
