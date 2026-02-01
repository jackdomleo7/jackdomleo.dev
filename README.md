# [jackdomleo.dev](https://jackdomleo.dev)

![Website status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fjackdomleo.dev "Website status")
[![deploy](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/jackdomleo7/jackdomleo.dev/actions/workflows/deploy.yml)

The central hub of my professional presence, built with **Nuxt 4**. This project serves as a production testbed for my architectural standards and frontend expertise.

## ⏳ Project Evolution

- **Sept 2018**: Initial launch using fundamental web technologies and Bootstrap 4.
- **Sept 2019**: Migration to **Vue.js** and **TypeScript**, adopting **SCSS** for architecture-first styling.
- **May 2020**: Rebuilt with **Nuxt 2** for SSG performance; introduced a markdown-based blog.
- **Jan 2022**: UI/UX overhaul; integrated **Jest** and **Prismic** for headless CMS management.
- **Jan 2023**: Minimalist redesign and migration to **Nuxt 3** and **Contentful**.
- **Aug 2025**: Streamlined architecture by returning to **Nuxt Content** and upgrading to **Nuxt 4**. 
- **Feb 2026**: Repurposed to focus on **technical leadership** and high-leverage workflows, reflecting a shift toward architectural oversight.

---

## 🛠 Local Setup

- **Node**: v24
- **pnpm**: v10

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