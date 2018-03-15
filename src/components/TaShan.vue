<template>
  <slot-con>
    <div class="tashan">
      <div class="tashan-box clearfix">
        <div class="tashan-list">
          <titles title="他山之石"></titles>
          <group-item :data="taShan"></group-item>
          <Pagination
            :total="taShan[0].page*10"
            :page="page"
            @handleChange="handlePage">
          </Pagination>
        </div>
        <div class="notice">
          <side-item :data="notices" title="通知公告" url="/notice"></side-item>
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
  import {taShanList, noticeIndexList} from '@/public/js/fetch'

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
        taShan: [],
        notices: [],
        page: 1
      }
    },
    created() {
      this._taShanList()
      this._noticeIndexList()
    },
    methods: {
      /**
       * 他山之石列表
       * @private
       */
      _taShanList() {
        const result = taShanList(this.page)
        result.then(res => {
          console.log(res)
          this.taShan = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 通知公告
       * @private
       */
      _noticeIndexList() {
        const result = noticeIndexList()
        result.then(res => {
          this.notices = res.msg.under
        }).catch(err => {
          console.log(err.response)
        })
      },
      handlePage(page) {
        this.page = page
        this._taShanList()
      }
    }
  }
</script>
<style lang="less">
  .tashan {
    width: 100%;
    .tashan-box {
      width: 100%;
      .tashan-list {
        float: left;
        width: 730px;
      }
      .notice {
        float: right;
        width: 424px;
        .title {
          margin-top: 0;
        }
      }
    }
  }
</style>
