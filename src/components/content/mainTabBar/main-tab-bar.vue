<template>
  <tab-bar>
      <tab-bar-item path='/home'>
        <img src="~assets/img/tab-bar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tab-bar/home1.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="~assets/img/tab-bar/menu.svg" alt="" slot="item-icon">
        <img src="~assets/img/tab-bar/menu1.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img src="~assets/img/tab-bar/shopcart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tab-bar/shopcart1.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="~assets/img/tab-bar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tab-bar/profile1.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/tab-bar.vue'
import TabBarItem from 'components/common/tabbar/tab-bar-item.vue'
export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>

</style>