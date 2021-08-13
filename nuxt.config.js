require('dotenv').config()

export default {
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Jack Domleo - Frontend & UX Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'node_modules/cooltipz-css/src/cooltipz',
    '@/assets/styles/main.scss'
  ],
  plugins: [
    '@/plugins/reflect-metadata'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    '@nuxtjs/prismic',
    '@nuxtjs/color-mode'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  prismic: {
    endpoint: 'https://jackdomleo-dev.cdn.prismic.io/api/v2',
    apiOptions: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  },
  colorMode: {
    classPrefix: 'theme--',
    classSuffix: ''
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
    '@nuxtjs/sitemap' // Always declare last
  ],
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${process.env.BASE_URL}/sitemap.xml`
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: ['/_icons']
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  content: {
    apiPrefix: '_blog',
    dir: 'blog',
    liveEdit: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => `/blog/${file.path}`)
    }
  }
}
