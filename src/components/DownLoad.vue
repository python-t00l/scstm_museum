<template>
  <slot-con>
    <div class="download">
      <div class="download-box clearfix">
        <div class="download-list">
          <titles title="下载专区"></titles>
          <ul class="online clearfix">
            <li class="clearfix"
                v-for="(item,index) in downloads"
                :key="index">
              <div class="txt-item">
                <span class="time">{{item.addtime | dateFrm}}</span>
                <span class="splt"></span>
                <span class="txt">
                  <router-link to="/">{{item.title}}</router-link>
                </span>
              </div>
              <p>
                <a :href="filename+ '/' + 'Home/Download/download?filename='+item.filename">
                  <i class="icon">
                    <img src="../assets/down.png"/>
                  </i>
                </a>
              </p>
            </li>
          </ul>
          <Pagination
            v-if="downloads[0]"
            :total="downloads[0].page*10"
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
  import {downloadList, associatList, downFile} from '@/public/js/fetch'
  import Pagination from '@/base/pagination'
  import moment from 'moment'
  import {serveUrl} from '@/public/js/config'

  export default {
    components: {
      slotCon,
      titles,
      Pagination,
      sideItem
    },
    data() {
      return {
        downloads: [],
        dynamics: [],
        page: 1,
        filename: serveUrl
      }
    },
    created() {
      this._downloadList()
      this._associatList()
    },
    methods: {
      /**
       * 下载专区列表
       * @private
       */
      _downloadList() {
        const result = downloadList(this.page)
        result.then(res => {
          console.log(res)
          this.downloads = res.msg
        }).catch(err => {
          console.log(err.response)
        })
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
      handlePage(page) {
        this.page = page
        this._downloadList()
      }
    },
    filters: {
      dateFrm(date) {
        return moment.unix(date).format('YYYY-MM-DD')
      }
    }
  }
</script>
<style lang="less">
  .download {
    width: 100%;
    .download-box {
      width: 100%;
      .download-list {
        float: left;
        width: 730px;
        ul.online {
          width: 100%;
          position: relative;
          background: url("../assets/line.jpg") repeat-y;
          background-position: -68px 0;
          margin-top: 30px;
          li {
            margin-bottom: 60px;
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
