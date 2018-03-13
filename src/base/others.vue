<template>
  <div class="other-con">
    <ul class="tab clearfix">
      <li class="active">
        <router-link to="/">
          他山之石+
        </router-link>
      </li>
      <li class="line"> / </li>
      <li>
        <router-link to="/">
          在线阅读+
        </router-link>
      </li>
    </ul>
    <ul class="list clearfix">
      <li>
        <span class="splt"></span>
        <router-link to="/">
          省科博协组织参与第五届全国科技馆辅导员大赛西部赛区预赛
        </router-link>
      </li>
    </ul>
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
  .other-con {
    border-top: 1px solid #b3b3b3;
    width: 100%;
    margin-top: 40px;
    .tab {
      width: 100%;
      margin-top: 8px;
      li {
        display: inline-block;
        vertical-align: middle;
        font-size: 22px;
        color: #333;
        margin-right: 8px;
        &.line {
          color: #b3b3b3;
        }
        a {
          color: #333;
        }
        &.active {
          a {
            color: #004179;
          }
        }
        &:hover {
          a {
            color: #004179;
          }
        }
      }
    }
    ul.list {
      margin-top: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #004179;
      li {
        margin-top: 15px;
        &:hover {
          a {
            color: #004179;
          }
        }
        &:first-child {
          margin-top: 0;
        }
        a {
          font-size: 14px;
          color: #191919;
          padding-left: 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 93%;
          display: inline-block;
          vertical-align: middle;
        }
        .splt {
          width: 10px;
          height: 10px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background: #004179;
          display: inline-block;
          vertical-align: middle;
        }
        .title {
          font-size: 22px;
          margin-top: 40px;
          a {
            color: #004179;
          }
        }
      }
    }
  }
</style>
