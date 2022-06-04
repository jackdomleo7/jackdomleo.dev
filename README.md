# [jackdomleo.dev](https://jackdomleo.dev)

![Website status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fjackdomleo.dev "Website status")
[![deploy](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml)

Jack Domleo's personal website & blog.

My online portfolio has transformed over the years from a static HTML, CSS and JavaScript site, to a Vue.js SPA application, to now a Nuxt.js static site.

Key links:
- [Linktree](https://linktr.ee/jackdomleo7)
- [🕸 sitemap](https://jackdomleo.dev/sitemap.xml)
- [Blog](https://jackdomleo.dev/blog)
- [Figma for this site](https://www.figma.com/file/2yHwcL7eCVKiWFCBOugiTm/jackdomleo.dev)

---

## Local Setup

Create a `.env` file with the following properties:
- `BASE_URL`
- `CONTACT_EMAIL`
- `GOOGLE_ANALYTICS_ID`
- `PRISMIC_ENDPOINT`
- `PRISMIC_ACCESS_TOKEN`

```bash
# Clean install dependencies (also useful if you ever want to delete node_modiles rapidly)
$ npm run nukeNodeModules

# Serve with hot reload at localhost:3000
$ npm run dev

# Generate static project
$ npm run generate

# Launch staging server
$ npm run start

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
