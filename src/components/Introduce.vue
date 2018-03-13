<template>
  <slot-con>
    <div class="introduce clearfix">
      <div class="left_box">
        <ul class="clearfix">
          <li
            v-for="(item,index) in sideNav.data"
            :class="{active:sideNav.current===item.id}"
            @click="toggle(item.id)"
            :key="index">
            <span class="icon"></span>
            <span class="txt">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'
  import {introduceList} from '@/public/js/fetch'

  export default {
    components: {
      slotCon
    },
    data() {
      return {
        sideNav: {
          data: [],
          current: ''
        }
      }
    },
    created() {
      this._introduceList()
    },
    methods: {
      _introduceList() {
        const result = introduceList()
        result.then(res => {
          console.log(res)
          this.sideNav.data = res.msg.data
          this.sideNav.current = res.msg.id
        }).catch(err => {
          console.log(err.response)
        })
      },
      toggle(id) {
        this.sideNav.current = id
      }
    }
  }
</script>
<style lang="less">
  .introduce {
    position: relative;
    background: url("../assets/line.jpg") repeat-y;
    min-height: 600px;
    background-position: -40px 0;
    .left_box {
      float: left;
      width: 150px;
      ul {
        li {
          font-size: 16px;
          color: #666;
          cursor: pointer;
          margin-bottom: 25px;
          text-align: right;
          padding-right: 20px;
          .icon {
            width: 3px;
            height: 22px;
            background: #004179;
            display: inline-block;
            vertical-align: middle;
            opacity: 0;
            margin-right: 10px;
            transition: all .25s;
          }
          .txt {
            display: inline-block;
            vertical-align: middle;
            transition: all .25s;
          }
          &.active {
            .icon {
              opacity: 1;
            }
            .txt {
              font-size: 22px;
              color: #004179;
            }
          }
          &:hover{
            &.active{
              .txt{
                transform: scale(1);
                color: #004179;
              }
            }
            .txt{
              transform: scale(1.2);
              color: #004179;
            }
          }
        }
      }
    }
  }
</style>
