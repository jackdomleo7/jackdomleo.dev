require('dotenv').config()
const siteconfig = require('./siteconfig.json')

interface IGenerateRoute {
  route: string;
  payload?: Record<string, any>;
}

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
  components: true,
  plugins: [
    '@/plugins/reflect-metadata'
  ],
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
    Sitemap: `${siteconfig.base_url}/sitemap.xml`
  },
  sitemap: {
    hostname: siteconfig.base_url,
    exclude: ['/_icons', '/preview']
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
    async routes (): Promise<IGenerateRoute[]> {
      let generatedRoutes: IGenerateRoute[] = []

      // Blog pages
      const { $content } = require('@nuxt/content')
      const blogs = await $content({ deep: true }).fetch()
      blogs.forEach((blog: Record<string, any>) => {
        generatedRoutes.push(
          {
            route: `/blog/${blog.path}`,
            payload: blog
          }
        )
      })

      return generatedRoutes
    }
  }
}
