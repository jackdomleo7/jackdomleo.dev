# [jackdomleo.dev](https://jackdomleo.dev)

![Website status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fjackdomleo.dev "Website status")
[![deploy](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml)

Jack Domleo's personal website & blog.

My online portfolio has transformed over the years from a static HTML, CSS and JavaScript site, to a Vue.js SPA application, to now a Nuxt.js static site.

Website timeline:
- **September 2018** - Created first website using HTML, CSS, JavaScript & Bootstrap 4.
- **September 2019** - Redesigned & rebuilt website using Vue.js, TypeScript & SCSS.
- **May 2020** - Redesigned & rebuilt website using Nuxt 2, TypeScript & SCSS. Introduced light & dark themes. Introduced blog using Nuxt Content.
- **January 2022** - Redesigned site using newly improved UI skills (still not good UI skills, but better). Introduced Jest & Prismic CMS.
- **January 2023** - Redesigned site to be more minimalistic & rebuilt using Nuxt 3, TypeScript & SCSS. Replaced Prismic CMS & Nuxt Content with Contentful.
- **August 2025** - Removed Contentful and reverted back to Nuxt Content

Key links:
- [Linktree](https://jackdomleo.dev/links)
- [Sitemap](https://jackdomleo.dev/sitemap.xml)
- [Blog](https://jackdomleo.dev/blog)
- [Wayback Machine](https://web.archive.org/web/20230000000000*/https://jackdomleo.dev)

---

## Local Setup

- Node: v22
- pnpm: v10

Create a `.env` file with the following properties:
- `NUXT_BASE_URL`

```bash
# Serve with hot reload at localhost:3000
$ pnpm run dev

# Generate static project
$ pnpm run generate

# Launch staging server
$ pnpm run preview

# Check project linting
$ pnpm run lint:check

# Lint & fix
$ pnpm run lint:fix

# Run tests
$ pnpm run test

# Open test report
$ pnpm run test:report
```