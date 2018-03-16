<template>
  <div class="crumbs">
    <span>
      <router-link to="/">首页</router-link>
      &nbsp;&nbsp;>&nbsp;&nbsp;
      <router-link :to="data.url">{{data.title}}</router-link>
      &nbsp;&nbsp;>&nbsp;&nbsp;
      正文
    </span>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      data: {
        type: Object,
        default: () => ''
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  .crumbs {
    text-align: left;
    display: block;
    font-size: 14px;
    color: #252525;
    margin-bottom: 40px;
    a {
      color: #252525;
      &:hover {
        color: #004178;
      }
    }
  }
</style>
