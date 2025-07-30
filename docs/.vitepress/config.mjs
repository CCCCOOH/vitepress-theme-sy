import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SITE_TITLE",
  description: "Sy made this`",
  markdown: {
    theme: 'github-light',
  },
  themeConfig: {
    nav: [
      {
        text: 'Home',
        url: '/'
      },
      {
        text: 'About',
        url: '/'
      },
      {
        text: 'Archive',
        url: '/'
      },
      {
        text: 'Tags',
        url: '/'
      },
    ]
  },
})
