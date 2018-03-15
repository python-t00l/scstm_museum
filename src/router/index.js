import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Introduce = () => import('@/components/Introduce')

const Notices = () => import('@/components/notice/Notices')
const noticeDetail = () => import('@/components/notice/Detail')

const Vip = () => import('@/components/Vip')

const Dynamic = () => import('@/components/Dynamic')
const Academic = () => import('@/components/Academic')
const Reading = () => import('@/components/Reading')
const TaShan = () => import('@/components/TaShan')
const Download = () => import('@/components/DownLoad')

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
      meta: ['通知公告'],
    },
    {
      path: '/notice/:id',
      name: '通知公告详情',
      component: noticeDetail,
      meta: ['通知公告', '通知公告详情']
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
    },
    {
      path: '/reading',
      name: '在线阅读',
      component: Reading,
      meta: ['在线阅读']
    },
    {
      path: '/tashan',
      name: '他山之石',
      component: TaShan,
      meta: ['他山之石']
    },
    {
      path: '/download',
      name: '下载专区',
      component: Download,
      meta: ['下载专区']
    }
  ]
})
