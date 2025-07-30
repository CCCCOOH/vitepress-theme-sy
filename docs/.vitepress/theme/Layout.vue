<script setup>
import { useData } from 'vitepress'
import Home from './components/HomePage.vue';
import Navbar from './components/navbar.vue';
import Page from './components/Page.vue';
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, page } = useData()
</script>

<template>
  <div>
    <Navbar />
    <Home v-if="frontmatter.layout === 'home'" />
    <div v-else-if="page.isNotFound">
      <a href="/">Home</a>
      404 Not Found!
    </div> 
    <Page v-else />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>