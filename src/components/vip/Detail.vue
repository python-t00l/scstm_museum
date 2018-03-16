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
  import {vipDetail, associatList} from '@/public/js/fetch'

  export default {
    components: {
      Detail
    },
    data() {
      return {
        detail: {},
        dynamics: [],
        crumbs: {
          url: '/vip',
          title: '会员天地'
        }
      }
    },
    created() {
      this._vipDetail()
      this._associatList()
    },
    methods: {
      /**
       * 获取会员天地详情
       * @private
       */
      _vipDetail() {
        const result = vipDetail(this.$route.params.id)
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
