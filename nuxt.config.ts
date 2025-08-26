import { defineNuxtConfig } from 'nuxt/config'
import variables from './app/utilities/variables'

const SEO = {
  TITLE: `Jack Domleo - ${variables.OCCUPATION}`,
  DESCRIPTION: `A Nottinghamshire-based ${variables.OCCUPATION.toLowerCase()}, primarily working with Vue.js, Nuxt.js, TypeScript, SCSS & many more technologies.`
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
    'cooltipz-css/src/cooltipz-classes.scss',
    '~/assets/styles/main.scss'
  ],
  site: {
    url: process.env.NUXT_BASE_URL,
    name: SEO.TITLE
  },
  modules: [
    'nuxt-seo-utils',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/icon'
  ],
  seo: {
    meta: {
      charset: 'utf-8',
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
      ogType: 'website',
      colorScheme: 'dark light',
      formatDetection: 'telephone=no',
      ogImage: '/og.png',
      ogImageType: 'image/png',
      ogImageHeight: 630,
      ogImageWidth: 1200,
      googleSiteVerification: 'HvfUFnpoWCO9iiPCIT1lfhLf555vptzDdIsBIl2s0BY'
    }
  },
  schemaOrg: {
    // Global identity that other schemas can reference
    identity: {
      type: 'Person',
      name: 'Jack Domleo',
      url: process.env.NUXT_BASE_URL,
      image: `${process.env.NUXT_BASE_URL}/me.webp`,
      jobTitle: variables.OCCUPATION,
      worksFor: {
        type: 'Organization',
        name: 'Ocean Finance',
        url: 'https://www.oceanfinance.co.uk'
      },
      address: {
        type: 'PostalAddress',
        addressRegion: 'Nottinghamshire',
        addressCountry: 'UK'
      },
      sameAs: [
        variables.LINKEDIN_URL,
        variables.GITHUB_URL,
        variables.CODEPEN_URL
      ],
      knowsAbout: [
        'Vue.js',
        'Nuxt.js', 
        'TypeScript',
        'SCSS',
        'Frontend Development',
        'UX Design',
        'Web Accessibility',
        'Storybook',
        'Vite',
        'Vitest'
      ]
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