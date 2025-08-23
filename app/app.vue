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
</style>
