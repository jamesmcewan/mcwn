export interface Link {
  name: string
  url: string
}

export interface SiteConfig {
  baseURL: string
  languageCode: string
  title: string
  author: string
  image: string
  subtitle: string
  description: string
  favicons: number[]
  appletouch: number[]
  android: number[]
  pages: Link[]
  elsewhere: Link[]
  maker: Link[]
  tooling: Link[]
}

const siteConfig: SiteConfig = {
  baseURL: 'https://mightydinosaur.dev/',
  languageCode: 'en-gb',
  title: 'Mighty Dinosaur',
  author: 'James McEwan',
  subtitle: 'James McEwan is a mighty dinosaur',
  description:
    'James McEwan is a developer and creative based in Edinburgh, Scotland',
  favicons: [16, 32, 96, 128, 196],
  appletouch: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180],
  android: [192, 512],
  image: '/images/mighty.webp',
  pages: [
    {
      name: 'Uses',
      url: '/uses',
    },
  ],
  elsewhere: [
    {
      name: 'github / jamesmcewan',
      url: 'https://github.com/jamesmcewan',
    },
    {
      name: 'bsky / @mightydinosaur.dev',
      url: 'https://bsky.app/profile/mightydinosaur.dev',
    },
    {
      name: 'makerworld / @mightydinosaur',
      url: 'https://makerworld.com/en/@mightydinosaur',
    },
    {
      name: 'printables / @Mightydino_2075078',
      url: 'https://www.printables.com/@Mightydino_2075078',
    },
    {
      name: 'masto / @mcwn@social.lol',
      url: 'https://social.lol/@mcwn',
    },
    {
      name: 'linkedin / jamesmcewan',
      url: 'https://www.linkedin.com/in/jamesmcewan/',
    },
    {
      name: 'letterboxd / mcwn',
      url: 'https://letterboxd.com/mcwn/',
    },
    {
      name: 'insta / jamesmcewan',
      url: 'https://www.instagram.com/jamesmcewan/',
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
