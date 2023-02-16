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
- **January 2023** - Redesigned site to be more minimalistic & rebuilt using Nuxt 3, TypeScript & SCSS. Replaced Prismic CMS & Nuxt Content with Contentful. Introduced use of Gumroad API.

Key links:
- [Linktree](https://jackdomleo.dev/links)
- [Sitemap](https://jackdomleo.dev/sitemap.xml)
- [Blog](https://jackdomleo.dev/blog)
- [Wayback Machine](https://web.archive.org/web/20230000000000*/https://jackdomleo.dev)

---

## Local Setup

- Node: v18
- npm: v9

Create a `.env` file with the following properties:
- `NUXT_BASE_URL`
- `NUXT_GOOGLE_ANALYTICS_ID`
- `NUXT_CTF_SPACE_ID` // Contentful
- `NUXT_CTF_CDA_ACCESS_TOKEN` // Contentful
- `NUXT_CTF_CDA_ACCESS_TOKEN_PREVIEW` // Contentful
- `NUXT_GUMROAD_ACCESS_TOKEN`

```bash
# Serve with hot reload at localhost:3000
$ npm run dev

# Generate static project
$ npm run generate

# Launch staging server
$ npm run preview

# Check project linting
$ npm run lint:check

# Lint & fix
$ npm run lint:fix

# Run tests
$ npm run test

# Run tests & update snapshots
$ npm run test:updateSnapshots

# Open test report
$ npm run test:openReport
```