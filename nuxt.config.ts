import * as contentful from 'contentful'
import type { ContentfulEntries } from './types/CMS/Entries'

const contentfulClient = contentful.createClient({
  space: process.env.NUXT_CTF_SPACE_ID,
  accessToken: process.env.NODE_ENV === 'development' ? process.env.NUXT_CTF_CDA_ACCESS_TOKEN_PREVIEW : process.env.NUXT_CTF_CDA_ACCESS_TOKEN
})

async function getBlog(): Promise<string[]> {
  const routes: string[] = []

  const blog = await contentfulClient.getEntries<Pick<ContentfulEntries.Article, 'slug'|'publishDate'>>({ content_type: 'article', limit: 1000, select: ['fields.slug', 'fields.publishDate'] })
  for (const article of blog.items) {
    routes.push(`/blog/${new Date(article.fields.publishDate).getFullYear()}/${article.fields.slug}`)
  }

  return routes
}

async function getBasicPages(): Promise<string[]> {
  const routes: string[] = []

  const basicPages = await contentfulClient.getEntries<Pick<ContentfulEntries.BasicPage, 'slug'>>({ content_type: 'basicPage', limit: 1000, select: ['fields.slug'] })
  for (const page of basicPages.items) {
    routes.push(`/${page.fields.slug}`)
  }

  return routes
}

async function getProducts(): Promise<string[]> {
  const routes: string[] = []

  const products = await contentfulClient.getEntries<Pick<ContentfulEntries.Product, 'slug'>>({ content_type: 'product', limit: 1000, select: ['fields.slug'] })
  for (const product of products.items) {
    routes.push(`/products/${product.fields.slug}`)
  }

  return routes
}

export default defineNuxtConfig({
  ssr: true,
  typescript: {
    typeCheck: process.env.NODE_ENV === 'dev',
    strict: true
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BASE_URL,
      GOOGLE_ANALYTICS_ID: process.env.NUXT_GOOGLE_ANALYTICS_ID,
      CTF_SPACE_ID: process.env.NUXT_CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.NUXT_CTF_CDA_ACCESS_TOKEN,
      CTF_CDA_ACCESS_TOKEN_PREVIEW: process.env.NODE_ENV === 'development' ? process.env.NUXT_CTF_CDA_ACCESS_TOKEN_PREVIEW : undefined,
      GUMROAD_ACCESS_TOKEN: process.env.NUXT_GUMROAD_ACCESS_TOKEN
    }
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'highlight.js/styles/felipec.css',
    'cooltipz-css/src/cooltipz.scss',
    '~/assets/styles/main.scss'
  ],
  modules: [
    '@nuxt/image-edge',
    'nuxt-icons',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap'
  ],
  image: {
    contentful: {},
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
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: 'theme--',
    classSuffix: ''
  },
  sitemap: {
    hostname: process.env.NUXT_BASE_URL
  },
  hooks: {
    async 'nitro:config' (nitroConfig) {
      if (nitroConfig.dev) { return }
      nitroConfig.prerender!.routes = [...(await getBlog()), ...(await getBasicPages()), ...(await getProducts())]
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
  }
})
