import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import { santise } from 'src/helper/santise'
const parser = new MarkdownIt()

async function getItems() {
  const allPosts = await getCollection('posts')
  const publishedOnly = allPosts.filter((post) => post.data.draft !== true)

  const postItems = publishedOnly.map((post) => {
    return {
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: parser.render(post.body),
      link: `/posts/${post.slug}/`,
    }
  })

  return postItems
}

export async function GET() {
  return rss({
    title: 'Mighty Dinosaur',
    description: 'James writes stuff',
    site: import.meta.env.SITE,
    items: await getItems(),
  })
}
