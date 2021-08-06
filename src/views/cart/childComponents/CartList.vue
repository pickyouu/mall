<template>
  <div class="CartList">
    <cart-list-item v-for="(item,index) in cartLists" :key="index" :product="item"/>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  
  import CartListItem from './CartListItem.vue'

  export default {
    name: 'CartList',
    components: {
      CartListItem,
      
    },
    computed: {
      ...mapGetters(['cartLists'])
    }
  }
</script>
<style scoped>
  .CartList{
    width: 100vw;
  }
</style>