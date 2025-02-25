import { getCollection } from 'astro:content'

async function getPosts() {
  const postsCollection = await getCollection('posts', ({ data }) => {
    return data.draft !== true
  })

  if (!postsCollection) {
    throw new Error('No posts found. Make sure src/content/posts/*.md exists.')
  }

  const posts = postsCollection.sort((a, b) => {
    if (!a.data.pubDate || !b.data.pubDate) {
      throw new Error('No publish date found')
    }
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  })

  return posts
}

export default getPosts
