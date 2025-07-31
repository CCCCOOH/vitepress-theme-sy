<template>
  <div id="container-root" >
    <a id="cover" :href="data.url">
      <img :src="data.frontmatter.index_img ? data.frontmatter.index_img : site.themeConfig.default_img" alt="">
    </a>
    <div id="right">
      <p id="title">
        <a :href="data.url">
          {{ data.frontmatter.title }}
        </a>
      </p>
      <p id="excerpt">
        {{ data.frontmatter.excerpt }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
const { site, page } = useData()
console.log(page.value);

const props = defineProps(["data"])
</script>

<style scoped>
#container-root {
  height: 200px;
  border-radius: 5px;
  color: #295271;
  font-weight: bold;
  display: flex;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.24); 
  width: 100%;
  padding: 2rem 7rem;
}

img {
  height: 10rem;
  width: 16rem;
  box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
}

#cover {
  flex: 1.2;
}

#right {
  flex: 2;
}

#excerpt {
  font: 1em sans-serif;
  font-weight: 300;
}

#title {
  font-size: 1.4em;
}

a {
  text-decoration: none;
  color: #295271;
  transition: .4s;
}

a:hover {
  color: rgb(58, 133, 219);
}
</style>