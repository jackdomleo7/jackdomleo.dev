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
    '@nuxt/image',
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
  image: {
    provider: 'ipx',
    ipx: {
      // Don't fail on missing images during static generation
      ...(process.env.CI && {
        maxAge: 0
      })
    },
    presets: {
      blog: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    },
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
  nitro: {
    prerender: {
      // Ignore image processing errors during static generation
      failOnError: false,
      crawlLinks: true
    }
  },
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