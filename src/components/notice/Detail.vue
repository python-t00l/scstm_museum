<template>
  <detail
    :data="detail"
    :sideData="dynamics"
    title="协会动态"
    :crumbs="crumbs"
    url="/dynamic">
  </detail>
</template>
<script type="text/ecmascript-6">
  import Detail from '@/base/detail'
  import {noticeDetail, associatList} from '@/public/js/fetch'

  export default {
    components: {
      Detail
    },
    data() {
      return {
        detail: {},
        dynamics: [],
        crumbs: {
          url: '/notice',
          title: '通知公告'
        }
      }
    },
    created() {
      this._noticeDetail()
      this._associatList()
    },
    methods: {
      /**
       * 获取公告详情
       * @private
       */
      _noticeDetail() {
        const result = noticeDetail(this.$route.params.id)
        result.then(res => {
          this.detail = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      _associatList() {
        const result = associatList()
        result.then(res => {
          this.dynamics = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      }
    }
  }
</script>
<style lang="less">

</style>
