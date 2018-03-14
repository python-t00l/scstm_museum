<template>
  <div class="header">
    <div class="con">
      <router-link to="/" class="logo">
        <img :src="logo"/>
      </router-link>
      <ul class="nav clearfix">
        <li v-for="(item,index) in navs"
            :class="pathname===item.title ? 'active' : ''"
            :key="index">
          <router-link :to="item.url">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      pathname: {
        type: String,
        default: ''
      },
      logo: {
        type: String,
        default: '../static/images/logo.jpg'
      }
    },
    data() {
      return {
        navs: [
          {title: '首页', url: '/'},
          {title: '协会介绍', url: '/introduce'},
          {title: '通知公告', url: '/notice'},
          {title: '会员天地', url: '/vip'},
          {title: '协会动态', url: '/dynamic'},
          {title: '学术交流', url: '/'},
          {title: '在线阅读', url: '/'},
          {title: '他山之石', url: '/'},
          {title: '下载专区', url: '/'},
        ]
      }
    }
  }
</script>
<style lang="less">
  .header {
    width: 100%;
    border-bottom: 1px solid #e1e1e1;
    .con {
      width: 1200px;
      margin: 0 auto;
      .logo {
        display: block;
        width: 376px;
        padding-top: 20px;
        img {
          width: 100%;
        }
      }
      .nav {
        width: 100%;
        margin-top: 25px;
        li {
          float: left;
          margin-right: 40px;
          &:last-child {
            margin-right: 0;
          }
          a {
            font-size: 16px;
            color: #666666;
            padding-left: 12px;
            padding-right: 12px;
            padding-bottom: 8px;
            display: block;
            border-bottom: 4px solid transparent;
            transition: all .25s;
          }
          &:hover {
            a {
              color: #1a1a1a;
              border-bottom: 4px solid #004178;
            }
          }
          &.active{
            a {
              color: #1a1a1a;
              border-bottom: 4px solid #004178;
            }
          }
        }
      }
    }
  }
</style>
