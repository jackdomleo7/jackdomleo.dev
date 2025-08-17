import { defineNuxtConfig } from 'nuxt/config'

const SEO = {
  TITLE: 'Jack Domleo - Frontend & UX Developer',
  DESCRIPTION: 'A Nottinghamshire-based frontend & UX developer, primarily working with Vue.js, Nuxt.js, TypeScript, SCSS & many more technologies.'
}

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
  site: {
    url: process.env.NUXT_BASE_URL
  },
  modules: [
    'nuxt-seo-utils',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/icon'
  ],
  seo: {
    meta: {
      charset: 'utf-8',
      robots: 'index, follow',
      titleTemplate: `%s - ${SEO.TITLE}`,
      description: SEO.DESCRIPTION,
      viewport: {
        width: 'device-width',
        initialScale: 1,
        viewportFit: 'cover'
      },
      themeColor: [
        { content: '#1b2024', media: '(prefers-color-scheme: dark)' },
        { content: '#fbfaf9', media: '(prefers-color-scheme: light)' },
      ],
      author: 'Jack Domleo',
      ogType: 'profile',
      profileFirstName: 'Jack',
      profileLastName: 'Domleo',
      profileGender: 'male',
      colorScheme: 'dark light',
      formatDetection: 'telephone=no',
      ogImage: '/og.png',
      ogImageType: 'image/png',
      ogImageHeight: 630,
      ogImageWidth: 1200,
      googleSiteVerification: 'HvfUFnpoWCO9iiPCIT1lfhLf555vptzDdIsBIl2s0BY'
    }
  },
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