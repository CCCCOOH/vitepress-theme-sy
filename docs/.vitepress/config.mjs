import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SITE_TITLE",
  description: "Sy made this`",
  head: [
    //   添加fontawsome支持
    ['script', {'src': 'https://kit.fontawesome.com/18093c370e.js', crossorigin: "anonymous"}]
  ],
  markdown: {
    theme: 'github-light',
    math: true
  },
  themeConfig: {
    default_img: 'https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/hollow.jpg',
    nav: [
      {
        text: 'Home',
        url: '/',
        icon: '<i class="fa-solid fa-house"></i>'
      },
      {
        text: "Tag",
        url: '/Tag',
        icon: '<i class="fa-solid fa-tag"></i>'
      }
    ],
  },
})
