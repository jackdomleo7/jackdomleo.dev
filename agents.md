# agents.md — AI Agent Context for jackdomleo.dev

Personal portfolio site for Jack Domleo, Senior Frontend Developer.  
Live URL: https://jackdomleo.dev | Repo: https://github.com/jackdomleo7/jackdomleo.dev

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Nuxt 4 (SSR / static generation via `nuxi generate`) |
| Language | TypeScript (strict mode) |
| UI | Vue 3 (Composition API, `<script lang="ts" setup>`) |
| Styling | SCSS (scoped per component + global partials in `app/assets/styles/`) |
| Icons | `@nuxt/icon` with a custom Iconify icon set (`custom:*`) |
| Content | `@nuxt/content` — Markdown files live in `content/` |
| State | No Pinia store; shared constants via `app/utilities/variables.ts` |
| Testing | Vitest + `@vue/test-utils` + happy-dom |
| SEO | `nuxt-seo-utils`, `nuxt-schema-org`, `@nuxtjs/sitemap`, `@nuxtjs/robots` |
| Package manager | **pnpm** (do not use npm or yarn) |

---

## Commands

```bash
pnpm dev          # Start dev server (opens browser automatically)
pnpm generate     # Build static site output
pnpm preview      # Preview the generated build
pnpm lint         # ESLint (auto-fix, max 0 warnings)
pnpm test         # Run Vitest (clears coverage first)
pnpm test:report  # Open HTML coverage report
```

---

## Folder Structure

```
app/
  assets/
    fonts/          # Self-hosted Roboto & Roboto Mono
    icons/          # Custom SVG icons used with @nuxt/icon
    styles/         # Global SCSS partials (imported via main.scss)
      _colors.scss  # CSS custom properties for colour tokens
      _font-sizes.scss
      _responsive.scss  # CSS variables (DO NOT use in media queries)
      scss/variables/responsive.scss  # SCSS variables — USE THESE in @media queries
  components/
    Navigation.vue
    ProjectList.server.vue  # Server component — rendered at build time
    SiteFooter.vue
  layouts/
    default.vue
  pages/
    index.vue       # Homepage: hero, about, skills, projects preview
    projects.vue
    work.vue
    links.vue
    [slug].vue      # Dynamic pages driven by Nuxt Content
  utilities/
    variables.ts    # Shared runtime constants (occupation, URLs, year, experience)
content/
  privacy-policy.md
public/
  projects/         # Project screenshots
  work/             # Work/employer logos
nuxt.config.ts
content.config.ts
vitest.config.ts
vitest.setup.ts
```

---

## Key Conventions

### SCSS
- **Always use SCSS variables** (`$responsive-*`) in `@media` queries, never CSS custom properties (CSS variables don't work in media queries).
- All breakpoint SCSS variables are defined in `app/assets/styles/scss/variables/responsive.scss` and imported globally via `vite.css.preprocessorOptions`.
- Component styles use BEM naming (`.block__element--modifier`) and are `scoped`.
- Global utilities (`container`, `link`, `sr-only`) are applied as plain classes and defined in `app/assets/styles/`.

### Icons
- Icons are referenced as `custom:<icon-key>` via the `<Icon>` component, e.g. `<Icon name="custom:html" mode="svg" />`.
- Always set `mode="svg"` on `<Icon>`.

### Variables
- Shared constants (occupation title, URLs, computed years of experience, current year) live in `app/utilities/variables.ts`.
- Runtime env vars are exposed via `useRuntimeConfig()` — see `nuxt.config.ts` `runtimeConfig.public`.

### SEO / Schema
- Per-page canonical URLs are set with `useHead()`.
- Schema.org structured data uses `useSchemaOrg()` from `nuxt-schema-org`.
- Global identity (Person schema for Jack Domleo) is configured in `nuxt.config.ts`.

### Components
- `ProjectList.server.vue` is a Nuxt server component — keep data fetching server-side only.
- `v-once` is used on static sub-trees (icons, navigation items) for performance.

### Content
- Markdown pages in `content/` are served via `[slug].vue` using `<ContentRenderer>`.
- Rich text styles are in `app/assets/styles/rich-text.scss`.

### Performance
- `v-once` is applied to all static sub-trees (icons, nav items, footer) to prevent unnecessary re-renders.
- `ProjectList.server.vue` is a Nuxt server component — data fetching is server-side only, reducing client JS.
- Hero image uses `loading="eager"` and `fetchpriority="high"`; all other images use `loading="lazy" fetchpriority="low"`.
- Fonts are self-hosted (no remote font requests); `font-display: swap` is set in `_fonts.scss`.
- The site is statically generated (`nuxi generate`) — all pages are pre-rendered HTML.
- Animations are wrapped in `@media (prefers-reduced-motion: no-preference)` guards throughout.

### Accessibility
- Follow WCAG 2.2 AA as a minimum standard.
- Use semantic HTML elements (`<nav>`, `<header>`, `<footer>`, `<section>`, `<main>`, etc.) rather than divs where appropriate.
- The `.sr-only` global utility class is used to provide screen-reader-only context (e.g. icon button labels, decorative link supplements).
- Interactive elements (links, buttons) must always have an accessible label — either visible text or `aria-label` / `.sr-only` text.
- Navigation uses `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden`, and `role="menu"` / `role="menuitem"` correctly.
- All images must have meaningful `alt` text; decorative images use `alt=""`.
- Focus management is handled for mobile nav open/close interactions.
- `touch-action: manipulation` is applied globally to links and buttons to prevent 300ms tap delay on mobile.

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `NUXT_BASE_URL` | Full site URL (e.g. `https://jackdomleo.dev`), required for canonical URLs, OG tags, and Schema.org |
