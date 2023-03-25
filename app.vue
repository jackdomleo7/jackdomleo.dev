<template>
  <div class="page">
    <ClientOnly>
      <CookieConsent v-if="trackingConsent === false" @close="onClose" />
    </ClientOnly>
    <Navigation />
    <main>
      <NuxtLayout />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import cookie from 'cookiejs';
import { bootstrap } from 'vue-gtag';
import CookieConsent from './components/CookieConsent.vue';
import Navigation from './components/Navigation.vue';
import SiteFooter from './components/SiteFooter.vue';

const { data: ogImage } = await useAsyncData((ctx) => { return ctx!.$contentful.getAsset('2HwSTbJwsbPDLabrSltaa3')})

/**
 * false = cookie not set
 * 'false' = user has not consented
 * 'true' = user has consented
 * 'unknown' = unknown
 */
 const trackingConsent = ref<false|'true'|'false'|'unknown'>('unknown')

if (process.client) {
  trackingConsent.value = cookie.get('analyticsConsented') as false|'true'|'false'
}

if (trackingConsent.value === 'true') {
  bootstrap().then(() => {})
}

function onClose() {
  trackingConsent.value = cookie.get('analyticsConsented') as false|'true'|'false'
}

useHead({
  htmlAttrs: {
    lang: 'en-GB'
  },
  titleTemplate: pageTitle => {
    const TITLE = 'Jack Domleo - Frontend & UX Developer'
    return pageTitle
      ? `${pageTitle} | ${TITLE}`
      : TITLE
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'name', content: 'Jack Domleo' },
    { property: 'og:locale', content: 'en_GB' },
    { property: 'og:type', content: 'website' },
    { property: 'og:host', content: 'https://jackdomleo.dev' },
    { property: 'og:image', content: ogImage.value?.fields.file?.url },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:type', content: ogImage.value?.fields.file?.contentType },
    { property: 'og:image:alt', content: ogImage.value?.fields.description },
    { name: 'twitter:title', content: 'Jack Domleo - Frontend & UX Developer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@jackdomleo7' },
    { name: 'twitter:creator', content: '@jackdomleo7' },
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
