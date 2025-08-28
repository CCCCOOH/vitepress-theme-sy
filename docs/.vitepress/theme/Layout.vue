<script setup>
import { useData } from 'vitepress'
import Home from './views/HomePage.vue';
import Navbar from './components/navbar.vue';
import Page from './views/Page.vue';
import NotFound from './views/NotFound404.vue';
import TagPage from './views/TagPage.vue'
// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData()
</script>

<template>
  <div>
    <Navbar />
    <Home v-if="frontmatter.layout === 'home'" />
    <TagPage v-else-if="frontmatter.layout === 'tag'" />
    <NotFound v-else-if="page.isNotFound" />
    <Page v-else />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&display=swap');

body {
  background: whitesmoke;
  font-family: "Noto Serif SC", serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>