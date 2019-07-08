import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/views/shouye'
import fenlei from '@/views/fenlei'
import gouwuche  from '@/views/gouwuche'
import xiaoxi from '@/views/xiaoxi'
import wo from '@/views/wo'
import resou from '@/views/resou'
import detail from '@/views/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/shouye',
     
      component: shouye,

    },
    {
      path: '/fenlei',
     
      component: fenlei
    },
    {
      path: '/gouwuche',
     
      component: gouwuche
    },
    {
      path: '/xiaoxi',
     
      component: xiaoxi
    },
    {
      path: '/wo',
     
      component: wo
    },
    {
      path:'/resou',
      component: resou

    },
    {
      path:'/detail/:myid',
      component:detail,
      props:true
    },
    {
      path:'*',
      redirect:'/shouye'
    }
  
  
  
  
  ]
})
