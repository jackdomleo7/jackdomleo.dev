import readingTime from 'reading-time'
import { $content } from '@nuxt/content'
import highlightjs from 'highlight.js'
import { IArticle, INuxtContentGeneric } from '@/types'

const highlightWrap = (code: string, lang: string): string => `<pre><code class="hljs ${lang}">${code}</code></pre>`

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
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'monetization', content: '$ilp.uphold.com/HQqg9QM4JyEj' },
      { hid: 'color-scheme', name: 'color-scheme', content: 'light' }
    ],
    link: [
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
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap' // Always declare last
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      name: 'Jack Domleo',
      description:
        'A frontend & UX developer based in Nottinghamshire, UK primarily using Vue.js, Nuxt.js, TypeScript & SCSS.',
      ogType: 'profile',
      ogHost: process.env.BASE_URL,
      ogImage: {
        path: '/og.png',
        width: '1200',
        height: '630',
        type: 'image/png'
      },
      twitterCard: 'summary_large_image',
      twitterSite: '@jackdomleo7',
      twitterCreator: '@jackdomleo7'
    }
  },
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
    Allow: '/'
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
