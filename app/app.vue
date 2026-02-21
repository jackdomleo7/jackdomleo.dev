<template>
  <div class="page">
    <a href="#maincontent" class="sr-only sr-only--focusable skip-link">Skip to main content</a>
    <Navigation />
    <main id="maincontent">
      <NuxtLayout />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation.vue';
import SiteFooter from './components/SiteFooter.vue';

useHead({
  htmlAttrs: {
    lang: 'en-GB'
  },
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', href: '/icon.png' }
  ],
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

.skip-link {
  display: block;
  position: fixed !important;
  top: 1rem;
  left: 1rem;
  z-index: 9999;
  padding: 0.5rem 1rem !important;
  background-color: var(--color-fg1);
  color: var(--color-accent);
  border-radius: 0.25rem;
  font-weight: 700;
  text-decoration: none;
}
</style>
