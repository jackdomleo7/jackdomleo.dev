import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    basic: defineCollection(asSitemapCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        modified_time: z.date().optional()
      })
    })),
    article: defineCollection(asSitemapCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        published_time: z.date(),
        modified_time: z.date().optional(),
        tags: z.array(z.enum(['HTML', 'CSS', 'JavaScript', 'Vue', 'Nuxt', 'Accessibility', 'Tips', 'Problem Solving']))
      })
    }))
  }
})
