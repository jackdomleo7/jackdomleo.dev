import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    basic: defineCollection(asSitemapCollection({
      type: 'page',
      source: '*.md'
    }))
  }
})
