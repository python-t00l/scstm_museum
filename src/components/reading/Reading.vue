<template>
  <slot-con>
    <div class="read">
      <div class="read-box clearfix">
        <div class="read-list">
          <titles title="在线阅读"></titles>
          <ul class="online clearfix">
            <li class="clearfix"
                v-for="(item,index) in reads"
                :key="index">
              <div class="txt-item">
                <span class="time">{{item.addtime | dateFrm}}</span>
                <!--<span class="splt"></span>-->
                <span class="txt">
                  <router-link :to="'/reading/'+item.id">{{item.title}}</router-link>
                </span>
              </div>
              <p>
                <i class="icon">
                  <img src="../../assets/look.png"/>
                </i>
                <span>{{item.number}}</span>
              </p>
            </li>
          </ul>
          <Pagination
            v-if="reads[0]"
            :total="reads[0].page*10"
            :page="page"
            @handleChange="handlePage">
          </Pagination>
        </div>
        <div class="dynamic">
          <side-item :data="dynamics" title="协会动态" url="/dynamic"></side-item>
        </div>
      </div>
    </div>
  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'
  import titles from '@/base/title'
  import sideItem from '@/base/side_item'
  import {onlineList, associatList} from '@/public/js/fetch'
  import Pagination from '@/base/pagination'
  import moment from 'moment'

  export default {
    components: {
      slotCon,
      titles,
      Pagination,
      sideItem
    },
    data() {
      return {
        page: 1,
        reads: [],
        dynamics: [],
      }
    },
    created() {
      this._onlineList()
      this._associatList()
    },
    methods: {
      /**
       * 在线阅读列表
       * @private
       */
      _onlineList() {
        const result = onlineList(this.page)
        result.then(res => {
          this.reads = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
      handlePage(page) {
        this.page = page
        this._onlineList()
      },
      /**
       * 协会动态列表
       * @private
       */
      _associatList() {
        const result = associatList()
        result.then(res => {
          this.dynamics = res.msg
        }).catch(err => {
          console.log(err.response)
        })
      },
    },
    filters: {
      dateFrm(date) {
        return moment.unix(date).format('YYYY-MM-DD')
      }
    }
  }
</script>
<style lang="less">
  .read {
    width: 100%;
    .read-box {
      width: 100%;
      .read-list {
        float: left;
        width: 730px;
        ul.online {
          width: 100%;
          position: relative;
          /*background: url("../../assets/line.jpg") repeat-y;
          background-position: -68px 0;*/
          margin-top: 20px;
          li {
            border-bottom: 1px solid #e5e5e5;
            padding: 20px 10px 20px 10px;
            &:last-child {
              margin-bottom: 0;
            }
            .txt-item {
              float: left;
              span {
                display: inline-block;
                vertical-align: middle;
                font-size: 16px;
                color: #666;
                &.time {
                  padding-right: 25px;
                }
                &.splt {
                  width: 10px;
                  height: 10px;
                  background: #004179;
                  margin-right: 25px;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                }
                &.txt {
                  a {
                    color: #666;
                    &:hover{
                      color: #004178;
                    }
                  }
                }
              }
            }
            p {
              float: right;
              .icon {
                display: inline-block;
                vertical-align: middle;
              }
              span {
                display: inline-block;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .dynamic {
        float: right;
        width: 424px;
        .title {
          margin-top: 0;
        }
      }
    }
  }
</style>
