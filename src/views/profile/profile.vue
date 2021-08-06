<template>
  <div id="profile">
    <nav-bar class="navbar">
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'profile',
  components: {
    NavBar
   
  }
}
</script>
<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>