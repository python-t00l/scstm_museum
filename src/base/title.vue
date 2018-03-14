<template>
  <p class="tit">
    <span class="line"></span>
    <span class="txt">{{title}}</span>
  </p>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        tyoe: String,
        default: ''
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  .tit {
    .line {
      display: inline-block;
      vertical-align: middle;
      width: 3px;
      height: 22px;
      background: #004179;
    }
    .txt {
      font-size: 22px;
      color: #333;
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
    }
  }
</style>
