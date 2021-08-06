<template>
  <div id="cart">
    <nav-bar class="cart">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComponents/CartList.vue'
import CartBottomBar from './childComponents/CartBottomBar.vue'
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  name:'cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
    
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  activated () {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>
<style scoped>
  .cart{
    background-color: var(--color-tint);
    color: #FFF;
  }
   .scroll{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 89px;
    overflow: hidden;
  }
</style>