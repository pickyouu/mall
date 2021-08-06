import Vue from 'vue'
import Router from 'vue-router'
//采用懒加载
const home=()=> import('../views/home/home')
const profile=()=> import('../views/profile/profile')
const category=()=> import('../views/category/category')
const cart=()=> import('../views/cart/cart')
const detail=()=>import('../views/detail/Detail')
Vue.use(Router)

const routes= [
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/detail',
      component:detail
    }
     
]


const router= new Router({
  routes,
  mode:'history'
})

export default router
