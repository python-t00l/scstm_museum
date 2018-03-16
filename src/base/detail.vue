<template>
  <slot-con>
    <crumbs :data="crumbs"></crumbs>
    <div class="content-box clearfix">
      <div class="content-left">
        <h2 class="title">{{data.title}}</h2>
        <p class="txt-info">
          发布人：{{data.people}} &nbsp;&nbsp;
          访问次数：{{data.number}} &nbsp;&nbsp;
          发布时间：{{data.addtime | dateFrm}}
        </p>
        <p class="digest" v-if="data.introduction">摘要：{{data.introduction}}</p>
        <div class="article-con" v-html="data.content">

        </div>
      </div>
      <div class="content-right">
        <side-item
          :title="title"
          :url="url"
          :data="sideData">
        </side-item>
      </div>
    </div>
    <div class="guide clearfix" v-if="data.shang || data.xia">
      <p class="prev">
        上一篇文章：
        <router-link :to="crumbs.url+'/'+data.shang.id">{{data.shang.title}}</router-link>
      </p>
      <p class="next">
        下一篇文章：
        <router-link :to="crumbs.url+'/'+data.xia.id">{{data.xia.title}}</router-link>
      </p>
    </div>
  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'
  import Crumbs from '@/base/crumbs'
  import sideItem from '@/base/side_item'
  import moment from 'moment'

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      sideData: {
        type: Array,
        default: []
      },
      data: {
        type: Object,
        default: {}
      },
      crumbs: {
        type: Object,
        default: {}
      }
    },
    components: {
      slotCon,
      Crumbs,
      sideItem
    },
    data() {
      return {}
    },
    filters: {
      dateFrm(date) {
        return moment.unix(date).format('YYYY-MM-DD')
      }
    }
  }
</script>
<style lang="less">
  .content-box {
    width: 100%;
    .content-left {
      float: left;
      width: 730px;
      .title {
        font-size: 24px;
        color: #333;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 20px;
      }
      .txt-info {
        text-align: center;
        color: #929292;
        font-size: 14px;
        margin-top: 25px;
      }
      .digest {
        padding-left: 20px;
        font-size: 16px;
        color: #757575;
        margin-top: 20px;
        text-align: center;
      }
      .article-con {
        text-indent: 2rem;
        color: #252525;
        margin-top: 40px;
        text-align: justify;
      }
    }
    .content-right {
      float: right;
      width: 424px;
      .title {
        margin-top: 0;
      }
    }
  }

  .guide {
    margin-top: 40px;
    p {
      font-size: 16px;
      a {
        color: #004179;
      }
      &.prev {
        float: left;
      }
      &.next {
        float: right;
      }
    }
  }
</style>
