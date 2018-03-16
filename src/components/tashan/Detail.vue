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
  import {taShanDetail, associatList} from '@/public/js/fetch'

  export default {
    components: {
      Detail
    },
    data() {
      return {
        detail: {},
        dynamics: [],
        crumbs: {
          url: '/tashan',
          title: '他山之石'
        }
      }
    },
    created() {
      this._taShanDetail()
      this._associatList()
    },
    methods: {
      /**
       * 获取公告详情
       * @private
       */
      _taShanDetail() {
        const result = taShanDetail(this.$route.params.id)
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
