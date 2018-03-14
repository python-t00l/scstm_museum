<template>
  <slot-con>
    <div class="academic">
      <div class="academic-box clearfix">
        <div class="academic-list">
          <titles title="学术交流"></titles>
          <group-item :data="academic"></group-item>
          <Pagination
            :total="academic[0].page*10"
            :page="page"
            @handleChange="handlePage">
          </Pagination>
        </div>
        <div class="notice">
          <side-item :data="notices" title="通知公告" url="/"></side-item>
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
  import {academicList, noticeIndexList} from '@/public/js/fetch'

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
        academic: [],
        notices: [],
        page: 1
      }
    },
    created() {
      this._academicList()
      this._noticeIndexList()
    },
    methods: {
      /**
       * 学术交流
       * @private
       */
      _academicList() {
        const result = academicList(this.page)
        result.then(res => {
          this.academic = res.msg
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
      }
    }
  }
</script>
<style lang="less">
  .academic {
    width: 100%;
    .academic-box {
      width: 100%;
      .academic-list {
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
