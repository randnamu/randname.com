import type { Site, Link } from '@types'

const SITE: Site = {
  title: 'RandName',
  url: 'https://randname.com',
  author: 'RN',
  description: "This RN's personal website",
  favicon: '/favicon.svg',
}

const MENU: Link[] = [
  { name: 'Posts', url: '/posts' },
  { name: 'Series', url: '/series' },
  { name: 'Friends', url: '/friends' },
]

export { SITE, MENU }
