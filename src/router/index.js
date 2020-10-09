import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'
import StoreManage from '@/views/navstore/storeManagement'
import StoreStatistics from '@/views/navstore/storeStatistics'
import Indesmagement from '@/views/pagemenagement/indesmagement'
import Public from '@/views/pagemenagement/public'
import Baseproduct from '@/views/productstore/baseproduct'
import Pinpaistore from '@/views/productstore/pinpaistore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/storeManage',
        name: 'storeManagement',
        component: StoreManage
      },
      {
        path: '/storeStatistics',
        name: 'storeStatistics',
        component: StoreStatistics
      },
      {
        path: '/indesmagement',
        name: 'indesmagement',
        component: Indesmagement
      },
      {
        path: '/public',
        name: 'public',
        component: Public
      },
      {
        path: '/baseproduct',
        name: 'Baseproduct',
        component: Baseproduct
      },
      {
        path: '/pinpaistore',
        name: 'pinpaistore',
        component: Pinpaistore
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  console.log(to)
  console.log(from)
  if (to.path !== '/login') {
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
