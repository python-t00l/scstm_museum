<template>
  <slot-con>
    <!--top content-->
    <div class="i-top">
      <div class="swiper">
        <swiper :banners="banners"></swiper>
      </div>
      <ul class="news-info clearfix">
        <li class="clearfix"
            v-for="(item,index) in notices.on"
            :key="index">
          <h2>
            <router-link to="/">
              {{item.title}}
            </router-link>
          </h2>
          <p class="txt">
            {{item.content}}
          </p>
          <a target="_blank" href="/" class="details">查看详情</a>
        </li>
      </ul>
    </div>

    <div class="art-con clearfix">
      <!--left content-->
      <div class="l-con">
        <div class="ass-con clearfix">
          <div class="title">
            <p>协会动态</p>
          </div>
          <ass-item :data="assList"></ass-item>
          <router-link to="/" class="more">
            <span>点击查看更多</span>
            <i class="icon">
              <img src="../assets/jiantou.png"/>
            </i>
          </router-link>
        </div>
        <div class="vip">
          <div class="title clearfix">
            <p class="txt">会员天地</p>
            <router-link to="/" class="more">
              更多
            </router-link>
          </div>
          <vip-swiper :data="vipImgs"></vip-swiper>
        </div>
      </div>
      <!--right content-->
      <div class="r-con">
        <!--通知公告-->
        <notices :data="notices.under"></notices>
        <!--学术交流-->
        <academics :data="academics"></academics>
        <!--他山之石&在线阅读-->
        <others :data="others"></others>
      </div>
    </div>

  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'
  import Swiper from '@/base/swiper'
  import notices from '@/base/notices'
  import academics from '@/base/academics'
  import others from '@/base/others'
  import assItem from '@/base/ass_item'
  import vipSwiper from '@/base/vip_swiper'
  import {
    homeSwiper,
    associatList,
    noticeIndexList,
    academicIndexList,
    otherIndexList,
    vipIndexList
  } from '@/public/js/fetch'

  export default {
    components: {
      slotCon,
      Swiper,
      assItem,
      notices,
      academics,
      others,
      vipSwiper
    },
    data() {
      return {
        banners: [],
        assList: [],
        notices: {
          on: [],
          under: []
        },
        academics: [],
        others: {},
        vipImgs: []
      }
    },
    created() {
      this._homeSwiper()
      this._associatList()
      this._noticeIndexList()
      this._academicIndexList()
      this._otherIndexList()
      this._vipIndexList()
    },
    methods: {
      /**
       * 首页轮播
       * @private
       */
      _homeSwiper() {
        const result = homeSwiper()
        result.then(res => {
          this.banners = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 首页协会动态
       * @private
       */
      _associatList() {
        const result = associatList()
        result.then(res => {
          this.assList = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 首页通知公告
       * @private
       */
      _noticeIndexList() {
        const result = noticeIndexList()
        result.then(res => {
          this.notices.on = res.msg.on
          this.notices.under = res.msg.under
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 首页学术交流
       * @private
       */
      _academicIndexList() {
        const result = academicIndexList()
        result.then(res => {
          this.academics = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 他山之石&在线阅读
       * @private
       */
      _otherIndexList() {
        const result = otherIndexList()
        result.then(res => {
          this.others = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 会员天地
       * @private
       */
      _vipIndexList() {
        const result = vipIndexList()
        result.then(res => {
          this.vipImgs = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      }
    }
  }
</script>
<style lang="less">
  .i-top {
    width: 100%;
    height: 380px;
    .swiper {
      width: 730px;
      height: 100%;
      float: left;
    }
    .news-info {
      float: left;
      width: 470px;
      height: 100%;
      background: #f3f3f3;
      padding-left: 30px;
      padding-right: 30px;
      li {
        padding-top: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid #b3b3b3;
        &:last-child {
          border-bottom: none;
        }
        h2 {
          font-size: 18px;
          margin-bottom: 12px;
          text-align: center;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          a {
            color: #004179;
          }
        }
        .txt {
          font-size: 14px;
          line-height: 26px;
          color: #666;
          text-align: justify;
          height: 104px;
          overflow: hidden;
        }
        .details {
          float: right;
          font-size: 14px;
          color: #004179;
        }
      }
    }
  }

  .art-con {
    .l-con {
      float: left;
      width: 730px;
      .ass-con {
        .title {
          font-size: 22px;
          color: #333;
          margin-top: 40px;
        }
        ul {
          width: 100%;
        }
        .more {
          display: block;
          text-align: center;
          margin-top: 20px;
          font-size: 16px;
          color: #000;
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .icon {
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
      .vip {
        width: 100%;
        margin-top: 60px;
        .title {
          border-bottom: 1px solid #e1e1e1;
          padding-bottom: 10px;
          .txt {
            font-size: 22px;
            color: #333;
            float: left;
          }
          .more {
            float: right;
            color: #004179;
            font-size: 14px;
            line-height: 29px;
          }
        }
        .rolls {
          width: 100%;
          height: 100px;
          margin-top: 20px;
        }
      }
    }
    .r-con {
      float: right;
      width: 470px;
      padding-left: 30px;
    }
  }
</style>
