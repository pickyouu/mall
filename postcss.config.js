module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375, //视窗宽度,对应设计稿得宽度
      viewportHeight:667,//视窗高度,对应设计稿得高度
      unitPercision:5,//指定px转换为视窗单位值得小数单位数
      viewportUnit:'vw',//指定需要转换成得视窗单位,建议使用vw
      selectorBlackList:['ignore','tabbar'],//指定不需要转换得类
      minPixelValue:1,//小于,等于1px得不转换
      mediaQuery:false//是否允许在媒体查询中转换 px

    }
  }
}