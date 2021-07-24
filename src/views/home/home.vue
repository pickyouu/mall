<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:'home',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  #home{
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>