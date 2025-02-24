import { z, defineCollection } from 'astro:content'
import { rssSchema } from '@astrojs/rss'

const postSchema = rssSchema.extend({
  draft: z.boolean().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export type Post = z.infer<typeof postSchema>

const posts = defineCollection({
  schema: postSchema,
})

export const collections = { posts }
