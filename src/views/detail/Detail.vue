<template>
  <div id="detail">
     <detail-nav-bar @TitleClick="TitleClick" :CurrentIndex="currentIndex"/>
     <scroll class="DetailScroll" ref="scroll" :ProbeType="3" @GetScrollPosition="GetScrollPosition">
        <detail-swiper :SwiperImg='SwiperImg'/>
        <detail-goods-info :goods='GoodsInfo'/>
        <detail-shop-info :ShopInfo="ShopInfo"/>
        <detail-show-msg :detailInfo="detailInfo"/>
        <detail-show-detail :detailInfo="detailInfo" @imgLoad="imgLoad"/>
        <detail-goods-size ref="params"/>
        <detail-comment ref="comment" :comment="comment"/>
        <good-list ref="recommend" :goods="recommend"/>
     </scroll>
     <back-top class="backTop" @click.native="ToTop" v-show="ShowBackTop" />

     <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>
<script>
  import DetailNavBar from './childcomponents/DetailNavBar.vue'
  import DetailSwiper from './childcomponents/DetailSwiper.vue'
  import DetailGoodsInfo from './childcomponents/DetailGoodsInfo.vue'
  import DetailShopInfo from './childcomponents/DetailShopInfo.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import DetailShowDetail from './childcomponents/DetailShowDetail.vue'
  import DetailShowMsg from './childcomponents/DetailShowMsg.vue'
  import DetailGoodsSize from './childcomponents/DetailGoodsSize.vue'
  import DetailComment from './childcomponents/DetailComment.vue'
  import goodList from 'components/content/goods/goodList.vue'
  import DetailBottomBar from './childcomponents/DetailBottomBar.vue'

  import {GetDetailDatas,DealSomeDatas,DealShopInfo,GetDetailRecommend} from 'network/detail.js'
  import {debouce} from 'common/utils.js'
  import {backTopMinx} from 'common/mixin.js'
  
  // import toast from 'components/common/toast/toast.vue'
  // import {mixinTest} from 'common/mixin.js'

  export default {
    name: 'Detail',
    // mixins: [mixinTest],
    mixins: [backTopMinx],
    data () {
      return {
        
        iid:null,
        SwiperImg:null,
        GoodsInfo:{},
        ShopInfo:{},
        detailInfo:{},
        comment:{},
        recommend:[],
        themeTopY:[],
        updateTopy:null,
        currentIndex:0,
        
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShopInfo,
      Scroll,
      DetailShowDetail,
      DetailShowMsg,
      DetailGoodsSize,
      DetailComment,
      goodList,
      DetailBottomBar,
     
    },
    created () {
      //1.获取传来的iid
      this.iid=this.$route.query.iid
      //2.获取iid数据
      GetDetailDatas(this.iid).then(res=>{
       
        const res1=res
        this.SwiperImg=res1.data.result.itemInfo.topImages
        const GoodsInfos=new DealSomeDatas(res1.data.result.itemInfo,res1.data.result.columns,res1.data.result.shopInfo.services)
        this.GoodsInfo=GoodsInfos
        this.ShopInfo=new DealShopInfo(res1.data.result.shopInfo)
        this.detailInfo=res1.data.result.detailInfo
        if(res1.data.result.rate.cRate!=0){
          this.comment=res1.data.result.rate.list[0]
        }
        //获取推荐信息
        GetDetailRecommend().then(res=>{
          this.recommend=res.data.data.list
          
        })
        this.updateTopy=debouce(()=>{
          this.themeTopY=[]
          this.themeTopY.push(0)
          this.themeTopY.push(this.$refs.params.$el.offsetTop)
          this.themeTopY.push(this.$refs.comment.$el.offsetTop)
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
          
        },100)
      })
      
    },
    methods: {
      TitleClick(index){
        this.currentIndex=index
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],300)
      },
      imgLoad(){
        this.updateTopy()
      },
      GetScrollPosition(topy){
        const y=-topy
        this.ShowBackTop= y>1000 ? true : false
        /* if( (-y)<this.themeTopY[1]){
          this.currentIndex = 0
        }else if(this.themeTopY[1]<=(-y) && (-y)<this.themeTopY[2]){
          this.currentIndex=1
        }else if(this.themeTopY[2]<=(-y) && (-y)<this.themeTopY[3]){
          this.currentIndex=2
        }else{
          this.currentIndex=3
        } */
        const length=this.themeTopY.length
        for(let i=0;i<length;i++){
          if(this.currentIndex!=i && ((i<length-1 && this.themeTopY[i]<=y && y<this.themeTopY[i+1]) || (y>=this.themeTopY[length-1] && i==length-1)) ){
            
            this.currentIndex=i
            break
          }
        }
      },
      addToCart(){ 
        const itemInfo={}
        itemInfo.iid=this.iid
        itemInfo.img=this.SwiperImg[0]
        itemInfo.title=this.GoodsInfo.title
        itemInfo.desc=this.GoodsInfo.desc
        itemInfo.price=this.GoodsInfo.realPrice
        itemInfo.count=1
        
        this.$store.dispatch('addToCart', itemInfo)
        .then(res=>{
         this.$toast.show(res)
        })
      }
    }
  }
</script>
<style scoped>
  #detail{
    
    
    background-color: #fff;
  }
  .DetailScroll{
    
    overflow: hidden;
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
    z-index: 9;
    background-color: #fff;
  }
  .backTop{
    z-index: 9;
  }
</style>