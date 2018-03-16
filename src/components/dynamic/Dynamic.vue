<template>
  <slot-con>
    <div class="dynamic">
      <div class="dynamic-box clearfix">
        <div class="dynamic-list">
          <titles title="协会动态"></titles>
          <group-item :data="dynamicList" url="dynamic"></group-item>
          <Pagination
            v-if="dynamicList[0]"
            :total="dynamicList[0].page * 10"
            :page="page"
            @handleChange="handlePage">
          </Pagination>
        </div>
        <div class="imgs">
          <div class="title">
            图片新闻
          </div>
          <div class="swiper-box">
            <swiper :banners="banners"></swiper>
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
  import {dynamicList, homeSwiper} from '@/public/js/fetch'

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
        dynamicList: [],
        banners: [],
        page: 1
      }
    },
    created() {
      this._dynamicList()
      this._homeSwiper()
    },
    methods: {
      /**
       * 获取协会动态列表
       * @private
       */
      _dynamicList() {
        const result = dynamicList(this.page)
        result.then(res => {
          this.dynamicList = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 获取图片新闻
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
      handlePage(page) {
        this.page = page
        this._dynamicList()
      }
    }
  }
</script>
<style lang="less">
  .dynamic {
    width: 100%;
    .dynamic-box {
      width: 100%;
      .dynamic-list {
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
        .swiper-box {
          height: 310px;
          margin-top: 30px;
        }
      }
    }
  }
</style>
