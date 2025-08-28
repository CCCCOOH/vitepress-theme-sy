<template>
  <main>
    <CardContainer class="container">
      <div v-if="tags" class="tag" v-for="tag of tags" :key="tag">
        <span>{{tag}}</span>
      </div>
      <div v-else>
        Nothing...
      </div>
    </CardContainer>
  </main>
</template>

<script setup>
import CardContainer from "../components/CardContainer.vue";
import { data } from '../posts.data.js';
import {onMounted, ref} from "vue";

const tags = ref(new Set())

onMounted(() => {
  data.forEach(e => {
    e.frontmatter.tags && tags.value.add(...[e.frontmatter.tags].flat())
    e.frontmatter.tag && tags.value.add(e.frontmatter.tag)
  })
})


</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 50vw;
  min-height: 20vh;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  border: 2px solid #e6e4e4;
  border-radius: 10px;
  background-color: #f6f5f5;
  box-shadow: none;
  transition: box-shadow .2s ease-in-out;
}

.container:hover {
  box-shadow: inset 0 0 1rem #b3b3b3;
  border: none;
}

li {
  list-style: none;
}

.tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 55px;
  height: 40px;
  border: 1px #b1bcb9 solid;
  background-color: #efefef;
  border-radius: 5px;
  padding: 1px 3px;
  color: #248e92;
  cursor: pointer;
}

.tag:hover {
  text-decoration: underline;
}
</style>