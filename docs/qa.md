# Navigation and catalogue QA — 27 September 2026

- Production build: TypeScript, Vite, and prerendering pass for home, catalogue, two case studies, and 404.
- Static verification: 97 local links/anchors/assets pass; home retains exactly two featured cards and excludes Other Projects; both repository URLs occur on home, catalogue, and the corresponding case study.
- Brand regression tests: all five pass (default/saved themes, intro timing, repeat visits, reduced motion, blocked storage).
- Development server and production preview run successfully.
- Browser: `/projects` redirects to `/projects/` with the correct prerendered title; mobile menu and desktop Projects link work; case-study keyboard navigation, back/forward, and reload verified.
- Responsive checks: no horizontal page overflow on all four content routes at 320px; catalogue additionally inspected at 390, 768, and 1440px; homepage inspected at 1280px. Desktop and mobile screenshots reviewed, including light-theme archive and tablet case study.
- Hero Developer size is exactly 50% of the prior CSS sizing at every breakpoint (19.2px at 320px, 57.6px at 1280px).
- Dark/light themes and persistence checked; browser error/warning log empty in the final preview session.
- No new dependencies, fake demo links, commits, remote changes, or deployment.

The project remains an uncommitted local repository. Publishing remains a separate phase.
