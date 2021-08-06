<template>
  <div id="DetailShopInfo" v-if="Object.keys(ShopInfo).length!=0">
    <div class="ShopInfo">
      <div class="ShopIcon">
        <img :src="ShopInfo.logo" alt="">
      </div>
      <div class="ShopName">{{ShopInfo.name}}</div>
    </div>
    <div class="ShopInfos">
      <div class="sales">
        <div>{{ShopInfo.sells}}</div>
        <span>已售</span>
      </div>
      <div class="count">
        <div>{{ShopInfo.goodsCount}}</div>
        <span>全部宝贝</span>
      </div>
     
      <div class="comment">
        <ul>
          <li v-for="item in ShopInfo.score" :key="item.name">
            <span>{{item.name+':'}}</span>
            <span>{{item.score}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ComeIn"><div class="comeon">进店逛逛</div></div>
  </div>
</template>
<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      ShopInfo:{
        type:Object,
        default:function(){
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  #DetailShopInfo{
    padding-bottom: 12px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }
  .ShopInfo{
    display: flex;
    padding: 14px;
    line-height: 40px;
  }
  .ShopIcon{
    height: 40px;
    width: 40px;
    
  }
  .ShopInfo img{
    height: 100%;
    width: 100%;
    border-radius: 12px;
   
  }
  .ShopName{
    padding-left: 16px;
  }
  .ShopInfos{
    font-size: 14px;
    display: flex;
    text-align: center;
  }
  .ShopInfos>.sales{
    width: 30%;
  }
  .ShopInfos>.count{
    width: 30%;
  }
  .comment{
    width: 120px;
    text-align: left;
    padding-left: 20px;
    border-left: 1px solid lightgray;
  }
  .comment ul{
    list-style: none;
  }
  .sales>div{
    
    padding: 8px 0 2px 0;
  }   
  .count>div{
    
    padding: 8px 0 2px 0;
  }  
  .ComeIn{
    padding:6px;
  }
  .comeon{
    width: 120px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    text-align: center;
    margin: auto;
    background-color: rgb(236, 229, 236);
    font-size: 14px;
  }
</style>