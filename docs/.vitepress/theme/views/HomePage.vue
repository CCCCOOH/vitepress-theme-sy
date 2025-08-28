<template>
  <div>
    <Head />
    <CardContainer v-if="postList.length" id="article-list" class="card">
      <HomeListCard v-for="(post, idx) in postList" :data="post" :key="idx"/>
    </CardContainer>
    <h1 class="none-tip" v-else>请建立文章</h1>
    <Pagination :posts="posts" v-model="postList" />
  </div>
</template>

<script setup>
import CardContainer from "../components/CardContainer.vue";
import HomeListCard from "../components/HomeListCard.vue"
import { ref } from 'vue';
import { data as posts } from '../posts.data.js'
import Pagination from "../components/Pagination.vue";

import Head from '../components/Head.vue';
const postList = ref([]);
</script>

<style scoped>
#article-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  padding: 20px;
  margin: auto;
  z-index: 10;
  position: relative;
  top: -10rem;
  background-color: white;
}

.bold {
  font-weight: bold;
}

h1.none-tip {
  text-align: center;
  color: lightgray;
}
</style>
