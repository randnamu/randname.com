// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import { SITE } from './site.config'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      defaultProps: {
        wrap: true,
      },
    }),
    mdx(),
  ],
})
