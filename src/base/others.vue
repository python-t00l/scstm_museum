<template>
  <div class="other-con">
    <ul class="tab clearfix">
      <li class="active" @mouseenter="showData(1)">
        <router-link to="/tashan">
          他山之石+
        </router-link>
      </li>
      <li class="line"> / </li>
      <li @mouseenter="showData(2)">
        <router-link to="/reading">
          在线阅读+
        </router-link>
      </li>
    </ul>
    <!--他山之石-->
    <ul v-if="type===1" class="list clearfix">
      <li v-for="(item,index) in data.ta" :key="index">
        <span class="splt"></span>
        <router-link :to="'tashan/'+item.id">
          {{item.title}}
        </router-link>
      </li>
    </ul>
    <!--在线阅读-->
    <ul v-if="type===2" class="list clearfix">
      <li v-for="(item,index) in data.xie" :key="index">
        <span class="splt"></span>
        <router-link :to="'reading/'+item.id">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      data: {
        type: Object,
        default: ''
      }
    },
    data() {
      return {
        type: 1
      }
    },
    methods: {
      showData(type) {
        this.type = type
      }
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
