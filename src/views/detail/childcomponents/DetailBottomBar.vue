<template>
  <div id="DetailBottomBar">
    <div class="list">
      <img src="~assets/img/detail/customerService1.png" alt="">
      <div>客服</div>
    </div>
    <div class="list">
      <img src="~assets/img/detail/shop1.png" alt="">
      <div>店铺</div></div>
    <div class="list"><img src="~assets/img/detail/collect1.png" alt="">
      <div>收藏</div></div>
    <div class="cart" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>
<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart(){
        this.$emit('addToCart')
        
      }
    }
  }
</script>
<style scoped>
  #DetailBottomBar{
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color:#fff;
    
  }
  .cart{
    line-height: 49px;
    background-color: yellow;
    width: 30%;
  }
  .buy{
    background-color: red;
    width: 30%;
    line-height: 49px;
  }
  #DetailBottomBar{
    display: flex;
    text-align: center;
  }
  #DetailBottomBar .list{
    flex:1
  }
  #DetailBottomBar img{
    height: 46%;
    width: 46%;
    margin-top: 5px;
  }

</style>