import Vue from 'vue'
import Router from 'vue-router'
// import  Index from "@/components/index"
import  Cart  from '@/components/cart'
import Shop from '@/components/shop'
import Backend from '@/components/backend'
import axios from 'axios'
import subCart1 from "@/components/subCartOne"
import subCart2 from "@/components/subCartTwo"
import subCart3 from "@/components/subCartThree"


Vue.prototype.$axios = axios;


Vue.use(Router);


export default new Router({
  routes: [


    {
      path:'/cart',
      component: Cart,
      children:[{
        path:'',
        component:subCart1
      },{
        path:'/pay',
        component:subCart2
        },{
        path:'/end',
        component:subCart3
      }
      ]
    },
    {
      path:'/',
      component:Shop
    },
    {
      path:'/backend',
      component:Backend
    }
  ]
})
