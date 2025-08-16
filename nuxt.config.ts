import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  typescript: {
    typeCheck: process.env.NODE_ENV === 'dev',
    strict: true
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BASE_URL
    }
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'cooltipz-css/src/cooltipz.scss',
    '~/assets/styles/main.scss'
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    // '@nuxtjs/sitemap'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'min-dark'
          }
        }
      }
    },
    experimental: { sqliteConnector: 'native' }
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons'
      }
    ]
  },
  // site: {
  //   url: process.env.NUXT_BASE_URL
  // },
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/variables/responsive.scss" as *;@use "sass:math";'
        }
      }
    }
  },
  compatibilityDate: '2025-08-07'
})