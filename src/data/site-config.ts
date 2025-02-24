export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface ElsewhereLink {
  name: string
  url: string
}

export interface ToolingLink {
  name: string
  url: string
}

export interface SiteConfig {
  baseURL: string
  languageCode: string
  title: string
  author: string
  subtitle: string
  description: string
  themeColor: {
    light: string
    dark: string
  }
  favicons: number[]
  appletouch: number[]
  android: number[]
  social: SocialLink[]
  elsewhere: ElsewhereLink[]
  tooling: ToolingLink[]
}

const siteConfig: SiteConfig = {
  baseURL: 'https://mightydinosaur.dev/',
  languageCode: 'en-gb',
  title: 'mightydinosaur.dev',
  author: 'James McEwan',
  subtitle: 'James McEwan is a mighty dinosaur',
  description:
    'James McEwan is a developer and creative based in Edinburgh, Scotland',
  themeColor: {
    light: '#f5f3ff',
    dark: '#18181b',
  },
  favicons: [16, 32, 96, 128, 196],
  appletouch: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180],
  android: [192, 512],
  social: [
    {
      name: 'jamesmcewan',
      url: 'https://github.com/jamesmcewan',
      icon: 'github',
    },
    {
      name: '@mightydinosaur.dev',
      url: 'https://bsky.app/profile/mightydinosaur.dev',
      icon: 'bluesky',
    },
    {
      name: '@mightydinosaur',
      url: 'https://makerworld.com/en/@mightydinosaur',
      icon: 'makerworld',
    },
    {
      name: '@mcwn@social.lol',
      url: 'https://social.lol/@mcwn',
      icon: 'mastodon',
    },
    {
      name: 'jamesmcewan',
      url: 'https://www.linkedin.com/in/jamesmcewan/',
      icon: 'linkedin',
    },
    {
      name: 'mcwn',
      url: 'https://letterboxd.com/mcwn/',
      icon: 'letterboxd',
    },
    {
      name: 'jamesmcewan',
      url: 'https://www.instagram.com/jamesmcewan/',
      icon: 'instagram',
    },
  ],
  elsewhere: [
    {
      name: 'draws - portfolio',
      url: 'https://draws.mightydinosaur.dev/',
    },
    {
      name: 'comics - new comics app',
      url: 'https://comics.mightydinosaur.dev/',
    },
    {
      name: 'mvl - marvel comics app',
      url: 'https://mvl.mightydinosaur.dev/',
    },
  ],
  tooling: [
    {
      name: 'Astro',
      url: 'https://astro.build/',
    },
    {
      name: 'TailwindCSS',
      url: 'https://tailwindcss.com/',
    },
  ],
}

export default siteConfig
