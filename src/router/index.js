import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Introduce = () => import('@/components/Introduce')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      meta: ['首页']
    },
    {
      path: '/introduce',
      name: '协会介绍',
      component: Introduce,
      meta: ['协会介绍'],
    }
  ]
})
