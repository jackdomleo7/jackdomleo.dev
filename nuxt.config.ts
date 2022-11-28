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
  modules: [
    '@nuxt/image-edge'
  ],
  image: {
    screens: {
      smallmobile: 340,
      standardmobile: 390,
      largemobile: 450,
      smalltablet: 640,
      standardtablet: 768,
      largetablet: 1000,
      smalldesktop: 1366,
      standarddesktop: 1920,
      largedesktop: 2880,
      '4kdesktop': 3840
    }
  },
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
