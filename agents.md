# agents.md — AI Agent Context for jackdomleo.dev

Personal portfolio site for Jack Domleo, Lead Frontend Engineer.
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

### Content
- Markdown pages in `content/` are served via `[slug].vue` using `<ContentRenderer>`.
- Rich text styles are in `app/assets/styles/rich-text.scss`.

### Performance
- `v-once` is applied to all static sub-trees (icons, nav items, footer) to prevent unnecessary re-renders.
- Use `ComponentName.server.vue` where applicable to keep data fetching server-side only.
- Core web vitals are important so consider optimum performance without change behaviour or content.
- Fonts are self-hosted (no remote font requests); `font-display: swap` is set in `_fonts.scss`.
- The site is statically generated (`nuxi generate`) — all pages are pre-rendered HTML.

### Accessibility
- Follow WCAG 2.2 AA as a minimum standard.
- Use semantic HTML.
- The `.sr-only` global utility class is used to provide screen-reader-only context (e.g. icon button labels, decorative link supplements).