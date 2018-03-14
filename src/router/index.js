import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Introduce = () => import('@/components/Introduce')
const Notices = () => import('@/components/Notices')

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
    },
    {
      path: '/notice',
      name: '通知公告',
      component: Notices,
      meta: ['通知公告']
    }
  ]
})
