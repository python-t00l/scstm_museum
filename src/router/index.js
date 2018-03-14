import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Introduce = () => import('@/components/Introduce')
const Notices = () => import('@/components/Notices')
const Vip = () => import('@/components/Vip')
const Dynamic = () => import('@/components/Dynamic')
const Academic = () => import('@/components/Academic')

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
    },
    {
      path: '/vip',
      name: '会员天地',
      component: Vip,
      meta: ['会员天地']
    },
    {
      path: '/dynamic',
      name: '协会动态',
      component: Dynamic,
      meta: ['协会动态']
    },
    {
      path: '/academic',
      name: '学术交流',
      component: Academic,
      meta: ['学术交流']
    }
  ]
})
