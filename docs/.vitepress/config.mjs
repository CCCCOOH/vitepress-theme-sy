import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SITE_TITLE",
  description: "Sy made this`",
  markdown: {
    theme: 'github-light',
    math: true
  },
  themeConfig: {
    default_img: 'https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/hollow.jpg',
    nav: [
      {
        text: 'Home',
        url: '/'
      },
    ],
  },
})
