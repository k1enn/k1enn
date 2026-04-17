# Portfolio — Astro

Migration of `portfolio-react` (CRA + Chakra UI) to Astro 5 + React islands.

## Stack

- Astro 5 (static site generation)
- React 18 islands for interactive components
- Framer Motion for animations
- React Icons for iconography
- Plain CSS (no UI framework) — design tokens via CSS variables

## Scripts

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npm run preview   # serve dist/
```

## Routes

- `/` — home (hero, tech carousel, connect, featured projects, footer)
- `/projects` — all projects grid

## Structure

```
src/
  layouts/Layout.astro     shared head + global CSS
  pages/
    index.astro            home route
    projects.astro         all-projects route
  components/
    *.astro                pure static Astro components
    *.jsx                  React islands (client:load)
  data/projects.json       project list
  styles/                  global stylesheets
```

## Islands (React, client:load)

Header, Overlay, Navbar, Technology, ScrollToTop, Loading — anything that uses `window`, scroll listeners, `requestAnimationFrame`, or mount-time state.

## Static Astro components

Footer, Connect, Projects, ProjectCard, SectionHeading — pure SSR, scroll-in animations via CSS + IntersectionObserver utility.

## Deploy

GitHub Pages via `dist/`. Domain `k1en.site` via `public/CNAME`.
