<template>
  <slot-con>
    <div class="vip">
      <div class="vip-box clearfix">
        <div class="vip-list">
          <titles title="会员天地"></titles>
          <group-item :data="vipList"></group-item>
          <Pagination
            v-if="vipList[0]"
            :total="vipList[0].page * 10"
            :page="page"
            @handleChange="handlePage">
          </Pagination>
        </div>
        <div class="imgs">
          <div class="title">
            图片新闻
          </div>
          <div class="swiper-box">
            <swiper :banners="imgs"></swiper>
          </div>
        </div>
      </div>
    </div>
  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'
  import titles from '@/base/title'
  import groupItem from '@/base/group_item'
  import Pagination from '@/base/pagination'
  import Swiper from '@/base/swiper'
  import {vipList, vipIndexList} from '@/public/js/fetch'

  export default {
    components: {
      slotCon,
      titles,
      groupItem,
      Pagination,
      Swiper
    },
    data() {
      return {
        vipList: [],
        page: 1,
        imgs: []
      }
    },
    created() {
      this._vipList()
      this._vipIndexList()
    },
    methods: {
      /**
       * 获取会员天地列表
       * @private
       */
      _vipList() {
        const result = vipList(this.page)
        result.then(res => {
          this.vipList = res.msg
        }).catch(err => {
          console.log(err)
        })
      },
      /**
       * 图片新闻
       * @private
       */
      _vipIndexList() {
        const result = vipIndexList()
        result.then(res => {
          console.log(res)
          this.imgs = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      handlePage(page) {
        this.page = page
        this._vipList()
      }
    }
  }
</script>
<style lang="less">
  .vip {
    width: 100%;
    .vip-box {
      width: 100%;
      .vip-list {
        float: left;
        width: 730px;
      }
      .imgs {
        float: right;
        width: 424px;
        .title {
          font-size: 22px;
          a {
            color: #004179;
          }
        }
        .swiper-box{
          height: 310px;
          margin-top: 30px;
        }
      }
    }
  }
</style>
