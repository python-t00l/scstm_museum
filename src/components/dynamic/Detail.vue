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
  import {dynamicDetail, noticeIndexList} from '@/public/js/fetch'

  export default {
    components: {
      Detail
    },
    data() {
      return {
        detail: {},
        notice: [],
        crumbs: {
          url: '/dynamic',
          title: '协会动态'
        }
      }
    },
    created() {
      this._dynamicDetail()
      this._associatList()
    },
    methods: {
      /**
       * 获取公告详情
       * @private
       */
      _dynamicDetail() {
        const result = dynamicDetail(this.$route.params.id)
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
