<template>
  <div>
    <nav-bar>
      <div slot="left" class="NavBarBack" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="NavBarItems">
        <span v-for="(item,index) in NavBarContent" :key="item" class="NavBarItem" @click="GetIndex(index)" :class="{active:CurrentIndex==index}">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    props: {
      CurrentIndex:{
        type:Number,
        default:0
      }
    },
    data () {
      return {
        NavBarContent:["商品","参数","评论","推荐"],
             

      }
    },
    methods: {
      GetIndex(index){
        
        this.$emit("TitleClick",index)
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  .NavBarItems{
    display: flex;
  }
  .NavBarItem{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .NavBarBack img{
    margin-top: 12px;
  }
</style>