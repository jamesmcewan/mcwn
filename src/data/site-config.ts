export interface ElsewhereLink {
  name: string
  url: string
  icon: string
}

export interface MakerLink {
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
  elsewhere: ElsewhereLink[]
  maker: MakerLink[]
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
  elsewhere: [
    {
      name: 'jamesmcewan',
      url: 'https://github.com/jamesmcewan',
      icon: 'Github',
    },
    {
      name: '@mightydinosaur.dev',
      url: 'https://bsky.app/profile/mightydinosaur.dev',
      icon: 'Bluesky',
    },
    {
      name: '@mightydinosaur',
      url: 'https://makerworld.com/en/@mightydinosaur',
      icon: 'Makerworld',
    },
    {
      name: '@Mightydino_2075078',
      url: 'https://www.printables.com/@Mightydino_2075078',
      icon: 'Printables',
    },
    {
      name: '@mcwn@social.lol',
      url: 'https://social.lol/@mcwn',
      icon: 'Mastodon',
    },
    {
      name: 'jamesmcewan',
      url: 'https://www.linkedin.com/in/jamesmcewan/',
      icon: 'Linkedin',
    },
    {
      name: 'mcwn',
      url: 'https://letterboxd.com/mcwn/',
      icon: 'Letterboxd',
    },
    {
      name: 'jamesmcewan',
      url: 'https://www.instagram.com/jamesmcewan/',
      icon: 'Instagram',
    },
  ],
  maker: [
    {
      name: 'draws',
      url: 'https://draws.mightydinosaur.dev/',
    },
    {
      name: 'comics',
      url: 'https://comics.mightydinosaur.dev/',
    },
    {
      name: 'mvl',
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
