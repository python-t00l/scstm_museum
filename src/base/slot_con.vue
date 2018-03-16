<template>
  <div class="container">
    <div class="con">
      <slot></slot>
      <back-top :height="100" :bottom="180" :right="100" :duration="600">

      </back-top>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Icon, BackTop} from 'iview'

  export default {
    components: {
      Icon,
      BackTop
    },
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  .container {
    width: 100%;
    position: relative;
    .con {
      width: 1200px;
      margin: 30px auto 0 auto;
      position: relative;
      .ivu-back-top-inner{
        i{
          padding: 10px 12px;
        }
        &:hover{
          background-color: #004179;
        }
      }
    }
  }
</style>
