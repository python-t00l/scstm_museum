<template>
  <detail
    :data="detail"
    :sideData="notice"
    title="通知公告"
    :crumbs="crumbs"
    url="/notice">
  </detail>
</template>
<script type="text/ecmascript-6">
  import Detail from '@/base/detail'
  import {academicDetail, noticeIndexList} from '@/public/js/fetch'

  export default {
    components: {
      Detail
    },
    data() {
      return {
        detail: {},
        notice: [],
        crumbs: {
          url: '/academic',
          title: '学术交流'
        }
      }
    },
    created() {
      this._academicDetail()
      this._associatList()
    },
    methods: {
      /**
       * 获取公告详情
       * @private
       */
      _academicDetail() {
        const result = academicDetail(this.$route.params.id)
        result.then(res => {
          this.detail = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      _associatList() {
        const result = noticeIndexList()
        result.then(res => {
          this.notice = res.msg.under
        }).catch(err => {
          console.log(err.response)
        })
      }
    }
  }
</script>
<style lang="less">

</style>
