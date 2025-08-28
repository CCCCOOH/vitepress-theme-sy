<template>
  <footer v-if="posts.length">
    <button class="bold" @click="changePage(currentPage-1)"><i class="fa-solid fa-arrow-left"></i></button>
    <button @click="changePage(idx)" v-for="(_item, idx) in pageButtonList.slice(0, 3)" :key="idx">
      {{ idx+1 }}
    </button>
    <span v-if="pageButtonList.length > 4">
        ...
        <button @click="changePage(pageButtonList.length-1)">
          {{ pageButtonList.length }}
        </button>
      </span>
    <button v-if="pageButtonList.length == 4" @click="changePage(pageButtonList.length-1)">
      {{ pageButtonList.length }}
    </button>
    <button class="bold" @click="changePage(currentPage+1)"><i class="fa-solid fa-arrow-right"></i></button>
  </footer>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import {watch} from "../../cache/deps/vue.js";
const props = defineProps(['posts'])
const model = defineModel()
const posts = ref([]);
const currentPage = ref(0)
const pageSize = ref(10)
const postTotal = ref(0)

onMounted(() => {
  posts.value = props.posts;
  model.value = posts.value;
//   将文章传给父组件
  postTotal.value = posts.value.length;
})


// 最终渲染文章列表
const currentPageList = computed(() => {
  const begin = currentPage.value * pageSize.value;
  return posts.value.slice(begin, begin+pageSize.value);
})

watch(currentPageList, () => {
  model.value = currentPageList.value;
})

// 根据页面数量生成对应的按钮
const pageButtonList = computed(() => {
  const count = Math.ceil(postTotal.value / pageSize.value)
  return new Array(count).fill(null)
})

// 更改页码
function changePage(idx) {
  if (idx < 0 || idx >= pageButtonList.value.length) {
    return;
  }
  currentPage.value = idx;
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
}

button {
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: var(--main-text-color);
}
</style>