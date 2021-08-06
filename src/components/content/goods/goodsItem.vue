<template>
  <div class="goodsItem" @click="GoodsItemClick">
    <img v-lazy="GetImg" alt="">
    <div> 
      <p>{{item.title}}</p>
    </div>
    <span class="price">{{item.price}}</span>
    <span class="collect">{{item.cfav}}</span>
  </div>
</template>
<script>
  export default {
    name: 'goodsItem',
    data () {
      return {
       
      }
    },
    props: {
       item:{
          type:Object,
          default:function(){
            return {}
          }
        }
    },
    computed: {
      GetImg(){
        return this.item.image || this.item.show.img
      }
    },
    methods: {
      GoodsItemClick(){
        this.$router.push({
          path:'/detail',
          query:{
            iid:this.item.iid || this.item.item_id
          }
        })
      }
    }
  }
</script>
<style scoped>
  .goodsItem{
   
    width: 48%;
   
  }
  .goodsItem img{
    width: 100%;
    border-radius: 5px;
  }
  .goodsItem p{
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap:unset;
    white-space: nowrap;
  }
  .goodsItem .price{
    color:var(--color-tint);
    padding-right: 40px;
  }
 .collect {
    position: relative;
  }

  .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 2px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  
  }
</style>