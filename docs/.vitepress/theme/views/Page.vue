<template>
  <div>
    <Head id="head"/>
    <Content class="main card"/>
  </div>
</template>

<script setup>
  import Head from '../components/Home/Head.vue';
  import { useData } from 'vitepress';
  const { page } = useData();
  console.log(page.value);
</script>

<style lang="scss" scoped>
// 对卡片样式进行补充
  .main {
    width: 60vw;
    margin: 10rem auto;
    position: relative;
    top: -20rem;
    background: white;
    padding: 5rem 2rem;
  }
  @import url('../styles/markdown.css')
</style>