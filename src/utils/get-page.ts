import { getEntry } from 'astro:content'

async function getPage(
  page: string,
): Promise<{ title: string; description: any; Content: any }> {
  const contentPage = await getEntry('pages', page)

  if (!contentPage) {
    throw new Error(
      `Home page content not found. Make sure src/content/pages/${page}.md exists.`,
    )
  }
  if (!contentPage) {
    throw new Error(
      `Home page content not found. Make sure src/content/pages/${page}.md exists.`,
    )
  }
  const { Content } = await contentPage.render()
  const { title, description } = contentPage.data

  return { title, description, Content }
}

export default getPage
