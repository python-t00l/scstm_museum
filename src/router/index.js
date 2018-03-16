import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Introduce = () => import('@/components/Introduce')

const Notices = () => import('@/components/notice/Notices')
const noticeDetail = () => import('@/components/notice/Detail')

const Vip = () => import('@/components/vip/Vip')
const vipDetail = () => import('@/components/vip/Detail')

const Dynamic = () => import('@/components/dynamic/Dynamic')
const dynamicDetail = () => import('@/components/dynamic/Detail')

const Academic = () => import('@/components/academic/Academic')
const academicDetail = () => import('@/components/academic/Detail')

const Reading = () => import('@/components/reading/Reading')
const readDetail = () => import('@/components/reading/Detail')

const TaShan = () => import('@/components/tashan/TaShan')
const taShanDetail = () => import('@/components/tashan/Detail')

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
      path: '/vip/:id',
      name: '会员天地详情',
      component: vipDetail,
      meta: ['会员天地', '会员天地详情']
    },
    {
      path: '/dynamic',
      name: '协会动态',
      component: Dynamic,
      meta: ['协会动态']
    },
    {
      path: '/dynamic/:id',
      name: '协会动态详情',
      component: dynamicDetail,
      meta: ['协会动态', '会员天地详情']
    },
    {
      path: '/academic',
      name: '学术交流',
      component: Academic,
      meta: ['学术交流']
    },
    {
      path: '/academic/:id',
      name: '学术交流详情',
      component: academicDetail,
      meta: ['学术交流', '学术交流详情']
    },
    {
      path: '/reading',
      name: '在线阅读',
      component: Reading,
      meta: ['在线阅读']
    },
    {
      path: '/reading/:id',
      name: '在线阅读详情',
      component: readDetail,
      meta: ['在线阅读', '在线阅读详情']
    },
    {
      path: '/tashan',
      name: '他山之石',
      component: TaShan,
      meta: ['他山之石']
    },
    {
      path: '/tashan/:id',
      name: '他山之石详情',
      component: taShanDetail,
      meta: ['他山之石', '他山之石详情']
    },
    {
      path: '/download',
      name: '下载专区',
      component: Download,
      meta: ['下载专区']
    }
  ]
})
