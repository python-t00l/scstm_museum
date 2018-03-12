<template>
  <div class="container">
    <div class="con">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  .container {
    width: 100%;
    .con {
      width: 1200px;
      margin: 30px auto 0 auto;
    }
  }
</style>
