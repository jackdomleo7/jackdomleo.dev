import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    basic: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        modified_time: z.date().optional()
      })
    }),
    article: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        published_time: z.date(),
        modified_time: z.date().optional(),
        tags: z.array(z.string())
      })
    })
  }
})
