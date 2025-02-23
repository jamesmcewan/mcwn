import { z, defineCollection } from 'astro:content'
import { rssSchema } from '@astrojs/rss'

const posts = defineCollection({
  schema: rssSchema.extend({
    draft: z.boolean().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { posts }
