<template>
  <div class="footer">
    <div class="friend-link">
      <div class="link-con">
        <p class="title">友情链接</p>
        <vue-seam-less :data="data.logo" :class-option="optionLeft" class="seamless-warp2">
          <ul class="rolls-box">
            <li v-for="(item,index) in data.logo" :key="index">
              <a target="_blank" :href="item.url">
                <img :src="item.logo"/>
              </a>
            </li>
          </ul>
        </vue-seam-less>
      </div>
    </div>
    <div class="copyright">
      地址：{{data.end[0].valus}}
      &nbsp;&nbsp;&nbsp;&nbsp;
      电话：{{data.end[1].valus}}
      &nbsp;&nbsp;&nbsp;&nbsp;
      传真：{{data.end[2].valus}}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/" target="_blank">管理员登录</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import vueSeamLess from 'vue-seamless-scroll'

  export default {
    components: {
      vueSeamLess
    },
    props: {
      data: {
        default: null
      }
    },
    data() {
      return {}
    },
    computed: {
      optionLeft() {
        return {
          direction: 2,
          limitMoveNum: 2
        }
      }
    },
  }
</script>
<style lang="less">
  .footer {
    .friend-link {
      border-top: 1px solid #b3b3b3;
      background: #f3f3f3;
      padding: 12px 0 12px 0;
      margin-top: 20px;
      .link-con {
        width: 1200px;
        margin: 0 auto;
        .title {
          width: 20px;
          font-size: 14px;
          color: #1a1a1a;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
        }
        .seamless-warp2{
          width: 1150px;
          height: 60px;
          overflow: hidden;
          margin-left: 10px;
          display: inline-block;
          vertical-align: middle;
        }
        .rolls-box {
          width: 100%;
          overflow: hidden;
          height: 60px;
          li {
            width: 209px;
            height: 100%;
            overflow: hidden;
            float: left;
            margin-right: 6px;
            a{
              display: block;
              width: 100%;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .copyright {
      height: 40px;
      line-height: 40px;
      background-color: #004179;
      text-align: center;
      font-size: 14px;
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
</style>
