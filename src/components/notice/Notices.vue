<template>
  <slot-con>
    <div class="notice">
      <div class="notice-box clearfix">
        <div class="notice-list">
          <titles title="通知公告"></titles>
          <group-item :data="notices" url="notice"></group-item>
          <Pagination
            v-if="notices[0]"
            :total="notices[0].page*10"
            :page="page"
            @handleChange="handlePage">
          </Pagination>
        </div>
        <div class="dynamic">
          <side-item :data="dynamics" title="协会动态" url="/dynamic"></side-item>
        </div>
      </div>
    </div>
  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'
  import titles from '@/base/title'
  import groupItem from '@/base/group_item'
  import sideItem from '@/base/side_item'
  import Pagination from '@/base/pagination'
  import {noticeList, associatList} from '@/public/js/fetch'

  export default {
    components: {
      slotCon,
      titles,
      groupItem,
      sideItem,
      Pagination
    },
    data() {
      return {
        notices: [],
        dynamics: [],
        page: 1
      }
    },
    created() {
      this._noticeList()
      this._associatList()
    },
    methods: {
      /**
       * 通知公告列表
       * @private
       */
      _noticeList() {
        const result = noticeList(this.page)
        result.then(res => {
          this.notices = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 协会动态列表
       * @private
       */
      _associatList() {
        const result = associatList()
        result.then(res => {
          this.dynamics = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      handlePage(page) {
        this.page = page
        this._noticeList()
      }
    }
  }
</script>
<style lang="less">
  .notice {
    width: 100%;
    .notice-box {
      width: 100%;
      .notice-list {
        float: left;
        width: 730px;
      }
      .dynamic {
        float: right;
        width: 424px;
        .title{
          margin-top: 0;
        }
      }
    }
  }
</style>
