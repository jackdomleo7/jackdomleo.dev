import readingTime from 'reading-time'
import { $content } from '@nuxt/content'
import { IArticle, INuxtContentGeneric } from '@/types'

interface IGenerateRoute {
  route: string;
  payload?: IArticle;
}

export default {
  target: 'static',
  head: {
    titleTemplate: '%s | Jack Domleo | Frontend & UX Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'monetization', content: '$ilp.uphold.com/HQqg9QM4JyEj' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'modern-normalize/modern-normalize.css',
    '~/assets/styles/main.scss'
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxtjs/prismic',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: process.env.NODE_ENV === 'development'
  },
  prismic: {
    endpoint: process.env.PRISMIC_ENDPOINT,
    modern: true,
    apiOptions: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  },
  styleResources: {
    scss: [
      '~/assets/styles/_responsive-vars.scss'
    ]
  },
  image: {
    prismic: {}
  },
  colorMode: {
    classPrefix: 'theme--',
    classSuffix: ''
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap' // Always declare last
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  content: {
    apiPrefix: '_blog',
    dir: 'blog',
    liveEdit: false
  },
  robots: {
    UserAgent: '*',
    Allow: '/'
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: ['/_icons', '/preview']
  },
  build: {
  },
  generate: {
    async routes (): Promise<IGenerateRoute[]> {
      const generatedRoutes: IGenerateRoute[] = []

      // Blog pages
      const blogs: IArticle[] = await $content({ deep: true }).fetch() as IArticle[]
      blogs.forEach((blog) => {
        generatedRoutes.push(
          {
            route: `/blog/${blog.path}`,
            payload: blog
          }
        )
      })

      return generatedRoutes
    }
  },
  hooks: {
    'content:file:beforeInsert': (document: INuxtContentGeneric & IArticle) => {
      if (document.extension === '.md') {
        const { minutes } = readingTime(document.text)

        document.readingTime = Math.ceil(minutes)
      }
    }
  },
}
