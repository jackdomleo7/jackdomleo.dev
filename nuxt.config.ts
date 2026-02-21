import { defineNuxtConfig } from 'nuxt/config'
import variables from './app/utilities/variables'

const SEO = {
  TITLE: `Jack Domleo - ${variables.OCCUPATION}`,
  DESCRIPTION: `Personal website of Jack Domleo, a ${variables.OCCUPATION.toLowerCase()} specialising in JavaScript-based technologies and web development.`
}

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      meta: [
        {
          // Content-Security-Policy restricts which resources the browser is allowed to load. GitHub Pages does not support custom response headers, so this must be set as a <meta http-equiv> tag instead. Note: frame-ancestors is ignored by browsers when set via a meta tag (it only works as a response header), but all other directives are honoured. Key directives:
          // - default-src 'self'      → block all resources not explicitly permitted
          // - script-src 'unsafe-inline' → required by Nuxt's inline hydration scripts
          // - style-src 'unsafe-inline'  → required for Vue's scoped style injection
          // - frame-ancestors 'none'  → prevents this page being embedded in an iframe (clickjacking)
          // - base-uri 'self'         → prevents <base> tag hijacking
          // - form-action 'self'      → prevents forms from submitting to external URLs
          'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
        },
        {
          // Referrer-Policy controls how much referrer information is sent with outbound requests. strict-origin-when-cross-origin: sends the full URL for same-origin requests, but only the origin (no path/query) for cross-origin requests, and nothing over HTTP. This prevents leaking page URLs to third-party services via the Referer header.
          name: 'referrer',
          content: 'strict-origin-when-cross-origin'
        }
      ]
    }
  },
  typescript: {
    typeCheck: process.env.NODE_ENV === 'dev',
    strict: true
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'cooltipz-css/src/cooltipz-classes.scss',
    '~/assets/styles/main.scss'
  ],
  site: {
    url: 'https://jackdomleo.dev',
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
      url: 'https://jackdomleo.dev',
      image: 'https://jackdomleo.dev/me.webp',
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
        'Frontend Engineering',
        'Vue.js',
        'Nuxt.js',
        'TypeScript',
        'Web Accessibility (WCAG)',
        'Technical Leadership'
      ]
    }
  },
  content: {
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
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/variables/responsive.scss" as *;@use "sass:math";'
        }
      }
    }
  },
  compatibilityDate: '2026-01-21'
})