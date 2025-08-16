<template>
  <div class="page">
    <Navigation />
    <main>
      <NuxtLayout />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation.vue';
import SiteFooter from './components/SiteFooter.vue';

const TITLE = 'Jack Domleo - Frontend & UX Developer';
const DESCRIPTION = 'A Nottinghamshire-based frontend & UX developer, primarily working with Vue.js, Nuxt.js, TypeScript, SCSS & many more technologies.';

useHead({
  htmlAttrs: {
    lang: 'en-GB'
  },
  titleTemplate: pageTitle => {
    return pageTitle ? `${pageTitle} | ${TITLE}` : TITLE
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'name', content: 'Jack Domleo' },
    { name: 'description', content: DESCRIPTION },
    { name: 'keywords', content: 'Jack Domleo, Frontend Developer, UX Developer, Web Developer, JavaScript, Vue.js, Accessibility' },
    { name: 'author', content: 'Jack Domleo' },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESCRIPTION },
    { property: 'og:locale', content: 'en_GB' },
    { property: 'og:type', content: 'website' },
    { property: 'og:host', content: 'https://jackdomleo.dev' },
    { property: 'og:image', content: '/og.png' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:alt', content: 'Jack Domleo - Frontend & UX Developer' },
    { name: 'twitter:title', content: 'Jack Domleo - Frontend & UX Developer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/og.png' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'color-scheme', content: 'light dark' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    margin-top: 9rem;

    @media (min-width: $responsive-standard-tablet) {
      margin-top: 8rem;
    }
  }
}
</style>
