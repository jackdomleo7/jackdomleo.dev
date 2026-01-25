# [jackdomleo.dev](https://jackdomleo.dev)

![Website status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fjackdomleo.dev "Website status")
[![deploy](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml)

Jack Domleo's personal website.

My online portfolio has transformed over the years from a static HTML, CSS and JavaScript site, to a Vue.js SPA application, to now a Nuxt.js static site.

Website timeline:
- **September 2018**: Initial launch using fundamental web technologies and Bootstrap 4.
- **September 2019**: Major migration to Vue.js and TypeScript, adopting SCSS for styling.
- **May 2020**: Rebuilt with Nuxt 2 to improve performance; introduced dual-theming and a markdown-based blog with Nuxt Content.
- **January 2022**: UI/UX overhaul focused on design refinement and integration of Jest for testing and Prismic as a CMS.
- **January 2023**: Minimalist redesign and migration to Nuxt 3; transitioned to Contentful for headless CMS management.
- **August 2025**: Streamlined architecture by returning to Nuxt Content and upgrading to Nuxt 4. Removed blog.
- **February 2026**: Repurposed to focus on technical leadership and high-leverage workflows, reflecting a shift toward architectural oversight.

---

## Local Setup

- Node: v24
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

# Lint & fix
$ pnpm run lint

# Run tests
$ pnpm run test

# Open test report
$ pnpm run test:report
```