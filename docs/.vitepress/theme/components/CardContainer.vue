<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  border-radius: 5px;
}
</style>
