import { getEntry } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

interface PageData {
  title: string
  description: string
  decoration?: string
}

interface PageResult {
  title: string
  description: string
  Content: any
  decoration?: string
}

async function getPage(page: string): Promise<PageResult> {
  const contentPage = (await getEntry('pages', page)) as
    | CollectionEntry<'pages'>
    | undefined

  if (!contentPage) {
    throw new Error(
      `Home page content not found. Make sure src/content/pages/${page}.md exists.`,
    )
  }

  const { Content } = await contentPage.render()
  const { title, description, decoration } = contentPage.data as PageData

  return { title, description, Content, decoration }
}

export default getPage
