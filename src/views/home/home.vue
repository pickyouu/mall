<template>
  <div id="home">
    <nav-bar class="navBar"><div slot="center">购物街</div></nav-bar>
    <tab-control :datas='tabControlDatas' class="homeTabControlCopy" :CurrentIndex='currentIndex' v-show="IsShow" @getIndex='getIndex' ref="TabControl2"/>
    
    <scroll class="scroll" ref="scroll" :ProbeType='3' :PullUpLoad='true' @UpLoadMore='UpLoadMore' @GetScrollPosition='GetScrollPosition'>
      <home-swiper :banners="banners" @SwiperImgLoad="SwiperImgLoad"/>
      <home-recommend :recommends="recommends" @RecommendImgLoad='RecommendImgLoad'/>
      <popular @PopularImgLoad='PopularImgLoad'/>
      <tab-control :datas='tabControlDatas' class="homeTabControl" :CurrentIndex='currentIndex' @getIndex='getIndex' ref="TabControl"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="ToTop" v-show="ShowBackTop" class="backTop"/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import homeSwiper from 'views/home/childrencomponents/homeSwiper.vue'
import HomeRecommend from './childrencomponents/homeRecommend.vue'
import Popular from './childrencomponents/popular.vue'
import tabControl from 'components/content/tabcontrol/tabControl.vue'
import goodList from 'components/content/goods/goodList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'



import {getHomeMultiData,getHomeGoods} from 'network/home'
import {backTopMinx} from 'common/mixin.js'



export default {
  name:'home',
  mixins: [backTopMinx],
  data () {
    return {
      banners:null,
      recommends:null,
      tabControlDatas:["流行","新款","精选"],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      currentIndex:0,
      
      TabControlOffsetTop:0,
      ImgLoad:{
        swiper:false,
        recommend:false,
        popular:false
      },
      IsShow:false,
      saveY:0
    }
  },
  components: {
    NavBar,
    homeSwiper,
    HomeRecommend,
    Popular,
    tabControl,
    goodList,
    Scroll,
    
    
    
    
  },
  created () {
    //获取首页多个数据
    this.getHomeMultiData()
    //获取首页商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //获取数据
    getHomeMultiData(){
      getHomeMultiData().then(res=>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
      
    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page=page
      }) 
     
    },
    //TabControl下标
    getIndex(index){
      switch(index){
        case 0:this.currentType='pop';this.currentIndex=0
        break;
        case 1:this.currentType='new';this.currentIndex=1
        break;
        case 2:this.currentType='sell';this.currentIndex=2
        break;
      }
    },
    //ToTop
    
    //GetScrollPosition
    GetScrollPosition(y){
      this.ShowBackTop= -y>1000 ? true : false
      if(-y>=this.TabControlOffsetTop){
        this.IsShow=true
      }else{
        this.IsShow=false
      }
    },
    //UpLoadMore
    UpLoadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.finishPullUp()
      this.$refs.scroll.scroll.refresh()
      
    },
    SwiperImgLoad(){
      this.ImgLoad.swiper=true
      if(this.ImgLoad.swiper && this.ImgLoad.popular && this.ImgLoad.recommend){ 
      this.TabControlOffsetTop=this.$refs.TabControl.$el.offsetTop
      }
    },
    RecommendImgLoad(){
      this.ImgLoad.recommend=true
      if(this.ImgLoad.swiper && this.ImgLoad.popular && this.ImgLoad.recommend){ 
      this.TabControlOffsetTop=this.$refs.TabControl.$el.offsetTop
      }
    },
    PopularImgLoad(){
      this.ImgLoad.popular=true
      if(this.ImgLoad.swiper && this.ImgLoad.popular && this.ImgLoad.recommend){ 
      this.TabControlOffsetTop=this.$refs.TabControl.$el.offsetTop
      }
    }

  },
  mounted () {
    
    
  },
  activated () {
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated () {
    this.saveY=this.$refs.scroll.scroll.y
   
  }
}
</script>

<style scoped>
  
  .navBar{
    background-color: var(--color-tint);
    color: var(--color-background);
    
  }
  .homeTabControl{
    
    background-color: #fff;
   
  }
  .scroll{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    
  }
 
  .homeTabControlCopy{
    position: relative;
    background-color: #fff;
    z-index: 9;
   
  }
  .backTop{
    z-index: 9;
  }
</style>