<template>
  <div>
    <Head />
    <ul id="article-list" class="card" v-if="currentPageList.length">
      <Container v-for="(post, idx) in currentPageList" :data="post" :key="idx"/>
    </ul>
    <h1 v-else>还没有文章哦！</h1>
    <aside>
      <button class="bold" @click="changePage(currentPage-1)"> &lt; </button>
      <button @click="changePage(idx)" v-for="(item, idx) in pageList.slice(0, 3)" :key="idx">
        {{ idx+1 }}
      </button>
      <span v-if="pageList.length > 4">
        ...
        <button @click="changePage(pageList.length-1)">
          {{ pageList.length }}
        </button>
      </span>
      <button v-if="pageList.length == 4" @click="changePage(pageList.length-1)">
          {{ pageList.length }}
      </button>
      <button class="bold" @click="changePage(currentPage+1)">&gt;</button>
    </aside>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { data as posts } from '../posts.data.js'
import Container from "../components/Home/Container.vue"
import Head from '../components/Home/Head.vue';

const currentPage = ref(0)
const pageSize = ref(10)
const postTotal = ref(posts.length)

// 最终渲染文章列表
const currentPageList = computed(() => {
  const begin = currentPage.value * pageSize.value;
  return posts.slice(begin, begin+pageSize.value);
})

// 用于生成页面按钮
const pageList = computed(() => {
  const count = Math.ceil(postTotal.value / pageSize.value)
  return new Array(count).fill(null)
})

function changePage(idx) {
  if (idx < 0 || idx >= pageList.value.length) {
    return;
  }
  currentPage.value = idx;
}



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

.card {
  box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  border-radius: 5px;
}

aside {
  display: flex;
  justify-content: center;
  position: relative;
  top: -80px;
  gap: 10px;
  align-items: center;
}

button {
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: var(--main-text-color);
}

.bold {
  font-weight: bold;
}
</style>
