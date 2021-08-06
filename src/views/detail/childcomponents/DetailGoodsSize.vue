<template>
  <div id="DetailGoodsSize">
    <div class="size">
      <span>XS</span>
      <span>S</span>
      <span>M</span>
      <span>L</span>
      <span>XL</span>
    </div>
    <div class="sizeimg">
      <img src="~assets/img/common/size.jpg" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailGoodsSize',
  }
</script>
<style scoped>
  #DetailGoodsSize{
    padding: 10px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }
  .size{
    display: flex;
    padding: 10px 0;
    text-align: center;
  }
  .size span{
    flex: 1;
  }
  .sizeimg img{
    width: 100%;
  }
</style>