import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/home',
      component: resolve => require(['../view/Home'], resolve),
      children: [
        {
          path: '/goods',
          component: resolve => require(['../view/goods/goods.vue'], resolve)
        },
        {
          path: '/ratings',
          component: resolve => require(['../view/ratings/ratings.vue'], resolve)
        },
        {
          path: '/seller',
          component: resolve => require(['../view/seller/seller.vue'], resolve)
        }
      ]
    }
  ]
})
