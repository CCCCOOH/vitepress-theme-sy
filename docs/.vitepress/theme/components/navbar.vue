<template>
  <div id="nav-root">
    <ul class="glass" :class="{down: down, hide: down}">
      <li v-for="(item, idx) in site.themeConfig.nav" :key="idx">
        <a :href="item.url" :class="{flipColor: flipColor}">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { onMounted, ref } from 'vue';

const { site } = useData()
const down = ref(false);
const flipColor = ref(false)


onMounted(() => {
  let preScrollY = window.pageYOffset;
  
  window.addEventListener('scroll', () => {
    let currentScrollY = window.pageYOffset;
    if (currentScrollY > 703) {
      flipColor.value = true
    } else {
      flipColor.value = false
    }
    
    if (currentScrollY > preScrollY) {
      // 比之前大，向下滚动
      down.value = true;
    } else {
      // 反之，向上滚动
      down.value = false;
    }
    preScrollY = window.pageYOffset;
  })

})
</script>
<style scoped>
ul {
  z-index: 999;
  display: flex;
  position: fixed;
  transition: top 0.4s;
  top: 0;
  width: 100%;
  border-end-start-radius: 5px;
  border-end-end-radius: 5px;
  color: white;
  list-style: none;
  gap: 10px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}

ul li {
  padding: 1rem;
}

ul li:hover a {
  cursor: pointer;
  color: rgb(127, 219, 255);
}

a {
  transition: .4s;
  text-decoration: none;
  color: white;
}

.down {
  top: -50px;
}

.flipColor {
  color: var(--main-text-color);
}
</style>