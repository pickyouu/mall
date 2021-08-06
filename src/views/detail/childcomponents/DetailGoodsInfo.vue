<template>
  <div class="DetailGoodsInfo" v-if="Object.keys(goods).length!=0">
    <div class="GoodsTitle">{{goods.title}}</div>
    <div class="GoodsPrice">
      <span class="NewPrice">{{goods.newPrice}}</span>
      <span class="OldPrice"><del>{{goods.oldPrice}}</del></span>
      <span class="discount">{{goods.discount}} </span>
    </div>
    <div class="GoodsInfo">
      <div class="GoodsInfoContent" v-for="index in goods.columns.length-1" :key="index">
        
        {{goods.columns[index-1]}}
      </div>
      <div class="GoodsInfoContent">
        
        {{goods.services[goods.services.length-1].name}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailGoodsInfo',
    data () {
      return {
        
      }
    },
    props: {
      goods:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },
    created () {
      
    }
  }
</script>
<style scoped>
  .DetailGoodsInfo{
    padding: 0 8px 12px 8px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .DetailGoodsInfo>div{
    padding-top: 16px;
  }
  
  .GoodsPrice .NewPrice{
    font-size: 20px;
    color: var(--color-tint);
  }
  .OldPrice{
    padding: 0 10px 0 6px; 
  }
  .discount{
    font-size: 12px;
    background-color: var(--color-tint);
    color:#fff;
    border-radius: 3px;
    position: relative;
    top: -4px;
  }
  .GoodsInfo{
    display: flex;
    font-size: 14px;
    color: rgb(161, 148, 148); 
  }
  .GoodsInfoContent{
    line-height: 20px;
    flex:1;
  }
  .GoodsInfoContent::before{
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url('~assets/img/common/icon1.png');
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    top: 4px;
  }
</style>