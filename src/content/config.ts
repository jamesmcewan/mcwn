import { feedLoader } from '@ascorbic/feed-loader'
import { defineCollection } from 'astro:content'

const zom = defineCollection({
  loader: feedLoader({
    url: 'https://zom.sh/rss.xml',
  }),
})

export const collections = { zom }
