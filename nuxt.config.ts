import readingTime from 'reading-time'
import { $content } from '@nuxt/content'
import highlightjs from 'highlight.js'
import Prismic from '@prismicio/client'
import { IPageProduct } from '@/types/cms'
import { IArticle, INuxtContentGeneric } from '@/types'

const highlightWrap = (code: string, lang: string): string => `<pre><code class="hljs ${lang}">${code}</code></pre>`
const metaDescription = 'A frontend & UX developer based in Nottinghamshire, UK primarily using Vue.js, Nuxt.js, TypeScript & SCSS.'

type NuxtRoute<T = unknown> =
  | string
  | {
      route: string
      payload?: T
    }

export default {
  target: 'static',
  head: {
    titleTemplate: '%s | Jack Domleo | Frontend & UX Developer',
    htmlAttrs: {
      lang: 'en-GB',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: metaDescription },
      { hid: 'name', name: 'name', content: 'Jack Domleo' },
      { hid: 'og:description', name: 'og:description', content: metaDescription },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:host', name: 'og:host', content: process.env.BASE_URL },
      { hid: 'og:image', name: 'og:image', content: `${process.env.BASE_URL}/og.png` },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jack Domleo. Frontend & UX developer.' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', name: 'og:image:height', content: '630' },
      { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@jackdomleo7' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@jackdomleo7' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'monetization', content: '$ilp.uphold.com/HQqg9QM4JyEj' },
      { hid: 'color-scheme', name: 'color-scheme', content: 'light dark' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/_nuxt/assets/fonts/Montserrat/Montserrat-Regular.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/_nuxt/assets/fonts/Montserrat/Montserrat-Bold.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/_nuxt/assets/fonts/Montserrat/Montserrat-Light.woff2',
        crossorigin: true,
      }
    ]
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'highlight.js/styles/atom-one-dark-reasonable.css',
    'node_modules/cooltipz-css/src/cooltipz',
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
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap' // Always declare last
  ],
  axios: {},
  content: {
    apiPrefix: '_blog',
    dir: 'blog',
    liveEdit: false,
    markdown: {
      highlighter(rawCode: string, lang: string): string {
        if (!lang) {
          return highlightWrap(highlightjs.highlightAuto(rawCode).value, lang)
        }
        return highlightWrap(highlightjs.highlight(rawCode, { language: lang }).value, lang)
      }
    }
  },
  feed: [{
    path: '/feed.xml',
    async create (feed) {
      feed.options = {
        title: 'Jack Domleo - blog',
        link: `${process.env.BASE_URL}/feed.xml`,
        description: 'Feed for Jack Domleo\'s blog.'
      };

      const posts = await $content({ deep: true, text: true }).sortBy('date', 'desc').fetch() as (IArticle & { text: string })[];
      posts.forEach(post => {
        feed.addItem({
          title: post.title,
          id: `${process.env.BASE_URL}/blog${post.path}`,
          link: `${process.env.BASE_URL}/blog${post.path}`,
          description: post.description,
          content: post.text,
          published: new Date(post.date),
          copyright: `All rights reserved ${new Date(post.date).getFullYear()}, Jack Domleo`,
          language: "en",
          author: [{
            name: "Jack Domleo",
            email: process.env.CONTACT_EMAIL,
            link: process.env.BASE_URL
          }]
        });
      });
    },
    cacheTime: 1000 * 60 * 15,
    type: 'rss2',
    data: ['']
  }],
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${process.env.BASE_URL}/sitemap.xml`
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: ['/_icons', '/preview']
  },
  build: {
    filenames: {
      font: () => '[path][name].[ext]'
    }
  },
  generate: {
    async routes (): Promise<NuxtRoute[]> {
      const generatedRoutes: NuxtRoute[] = []

      // Blog pages
      const blogs: IArticle[] = await $content({ deep: true }).fetch() as IArticle[]
      blogs.forEach((blog) => {
        generatedRoutes.push(
          {
            route: `/blog${blog.path}`,
            payload: blog
          }
        )
      })

      // Product pages
      const prismicClient = Prismic.client(process.env.PRISMIC_ENDPOINT, {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      })
      const products = await prismicClient.query<IPageProduct>(Prismic.Predicates.at('document.type', 'product'))
      products.results.forEach((productPage) => {
        generatedRoutes.push(
          {
            route: `/products/${productPage.uid}`,
            payload: productPage
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
  }
}
