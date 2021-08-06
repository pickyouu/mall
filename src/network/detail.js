import {request} from './request'
//请求iid数据
export function GetDetailDatas(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
//部分数据处理
export class DealSomeDatas{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice
  }
}

//商家信息处理
export class DealShopInfo{
  constructor(ShopInfo){
    this.logo=ShopInfo.shopLogo
    this.name=ShopInfo.name
    this.fans=ShopInfo.cFans
    this.sells=ShopInfo.cSells
    this.score=ShopInfo.score
    this.goodsCount=ShopInfo.cGoods
  }
}
//获取详情页推荐信息
export function GetDetailRecommend(){
  return request({
    url:'/recommend'
  })
}