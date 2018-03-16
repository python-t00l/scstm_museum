<template>
  <ul class="dyn clearfix">
    <li class="clearfix" v-for="(item,index) in data" :key="index">
      <h2>
        <router-link target="_blank" :to="url+'/'+item.id">
          {{item.title}}
        </router-link>
      </h2>
      <div class="oper clearfix">
        <p>
          <i class="icon">
            <img src="../assets/time.png"/>
          </i>
          <span>{{item.addtime | dateFrm}}</span>
        </p>
        <p>
          <i class="icon">
            <img src="../assets/look.png"/>
          </i>
          <span>{{item.number}}</span>
        </p>
      </div>
      <p class="txt">
        {{item.content}}
      </p>
      <router-link target="_blank" :to="url+'/'+item.id" class="details">
        查看详情
      </router-link>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
  import moment from 'moment'

  export default {
    props: {
      data: {
        type: Array,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
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
  ul.dyn {
    li {
      margin-top: 30px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e1e1e1;
      h2 {
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 15px;
        a {
          color: #333;
        }
        :hover {
          color: #004179;
        }
      }
      .oper {
        p {
          float: left;
          margin-right: 30px;
          .icon {
            display: inline-block;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            vertical-align: middle;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .txt {
        color: #333;
        font-size: 14px;
        line-height: 26px;
        text-align: justify;
        margin-top: 10px;
      }
      .details {
        font-size: 14px;
        float: right;
        color: #004179;
      }
    }
  }
</style>
