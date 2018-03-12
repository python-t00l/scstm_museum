import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      meta: ['首页']
    }
  ]
})
