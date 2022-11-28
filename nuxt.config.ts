// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    typeCheck: true,
    strict: true
  },
  runtimeConfig: {
    public: {
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  css: [
    'modern-normalize/modern-normalize.css',
    '~/assets/styles/main.scss'
  ],
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/variables/responsive.scss" as *;'
        }
      }
    }
  }
})
