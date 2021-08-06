<template>
  <div id="DetailComment" v-if="Object.keys(comment).length!=0">
    <div class="UserComment">用户评价</div>
    <div class="user">
      <div  class="icon"><img :src="comment.user.avatar" alt=""></div>
      <div  class="UserName">{{comment.user.uname}}</div>
    </div>
    <div class="content">
      {{comment.content}}
    </div>
    <div class="time">
      <span class="createTime">{{comment.created | getTime}}</span>
      <span>{{comment.style}}</span>
    </div>
    <div class="img" v-if="comment.hasOwnProperty('images')">
      <div v-for="item in comment.images" :key="item">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import {formatDate} from 'common/utils.js'
  export default {
    name: 'DetailComment',
    data () {
      return {
        
      }
    },
    props: {
      comment:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },
    filters: {
      getTime(time){
        /* const date=new Date(time*1000)
        return date.toLocaleString() */
        const date=new Date(time*1000)
        return formatDate(date,"yyyy/MM/dd hh:mm:ss")
      }
    }
  }
</script>
<style scoped>
  #DetailComment{
    padding: 10px;
    border-bottom: 3px solid rgba(100, 100, 100, 0.1);
  }
  .UserComment{
    height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    border-top: 4px solid rgba(100, 100, 100, .1);
  }
  .user{
    height: 60px;
    line-height: 60px;
    display: flex;
  }
  .user .icon{
    width: 50px;
    height: 50px;
    padding-top: 5px;
  }
  .icon img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  .UserName{
    padding-left: 14px;
    
  }
  .content{
    font-size: 14px;
    color: rgb(179, 172, 172);
    line-height: 24px;
  }
  .time{
    padding: 2px;
    font-size: 14px;
    color: rgb(179, 172, 172);
  }
  .createTime{
    margin-right: 10px;
    
  }
  .img{
    display: flex;
    flex-wrap: wrap;
  }
  .img>div{
    width: 40%;
    height: 22vh;
    
  }
  .img>div>img{
    width: 100%;
    height: 100%;
  }
</style>