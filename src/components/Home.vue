<template>
  <slot-con>
    <!--top content-->
    <div class="i-top">
      <div class="swiper">

      </div>
      <ul class="news-info clearfix">
        <li class="clearfix">
          <h2>
            <router-link to="/">
              畅游科技海洋，播撒科学的种子
            </router-link>
          </h2>
          <p class="txt">
            2015年4月30日，什邡市科技进校园——航模表演现场会在什邡市马
            井学校举行。德阳市科技馆馆长卢春涛，什邡市科协主席朱晓峰、副
            主席易佑全，什邡市教育局信息中心主任尹新明等领导莅临指导，来
            自全什邡市各兄弟学校的近40名科技辅导员到场参观。
          </p>
          <a target="_blank" href="/" class="details">查看详情</a>
        </li>
        <li class="clearfix">
          <h2>
            <router-link to="/">
              畅游科技海洋，播撒科学的种子
            </router-link>
          </h2>
          <p class="txt">
            2015年4月30日，什邡市科技进校园——航模表演现场会在什邡市马
            井学校举行。德阳市科技馆馆长卢春涛，什邡市科协主席朱晓峰、副
            主席易佑全，什邡市教育局信息中心主任尹新明等领导莅临指导，来
            自全什邡市各兄弟学校的近40名科技辅导员到场参观。
          </p>
          <a target="_blank" href="/" class="details">查看详情</a>
        </li>
      </ul>
    </div>

    <div class="art-con clearfix">
      <!--left content-->
      <div class="l-con">
        <div class="ass-con clearfix">
          <div class="title">
            <p>协会动态</p>
          </div>
          <ul class="clearfix">
            <li class="clearfix">
              <h2>
                <router-link to="/">
                  成都理工大学博物馆举办“变废为宝”创意制作大赛
                </router-link>
              </h2>
              <div class="oper clearfix">
                <p>
                  <i class="icon">
                    <img src="../assets/time.png"/>
                  </i>
                  <span>2015-04-30</span>
                </p>
                <p>
                  <i class="icon">
                    <img src="../assets/look.png"/>
                  </i>
                  <span>269</span>
                </p>
              </div>
              <p class="txt">
                用废纸层层叠叠折成的大花篮，在核桃壳上用彩色橡皮泥“画”成的卡通形象，大气结实的杂物盒，用白瓷瓶和纸花
                做成的古典插花…….初看上去就像是精美的工艺品，其实这些都是成都理工大学附小和成都市二仙桥学校的小学生们
                用自己的创意和智慧，将生活中废弃不用的废纸、废纸盒、旧.......
              </p>
              <router-link to="/" class="details">
                查看详情
              </router-link>
            </li>
          </ul>
          <router-link to="/" class="more">
            <span>点击查看更多</span>
            <i class="icon">
              <img src="../assets/jiantou.png"/>
            </i>
          </router-link>
        </div>
        <div class="vip">
          <div class="title clearfix">
            <p class="txt">会员天地</p>
            <router-link to="/" class="more">
              更多
            </router-link>
          </div>
          <div class="rolls">

          </div>
        </div>
      </div>
      <!--right content-->
      <div class="r-con">
        <div class="notice-con">
          <div class="title">
            <router-link to="/">
              通知公告+
            </router-link>
          </div>
          <ul class="list clearfix">
            <li>
              <span class="splt"></span>
              <router-link to="/">
                省科博协组织参与第五届全国科技馆辅导员大赛西部赛区预赛
              </router-link>
            </li>
          </ul>
        </div>
        <div class="science-con">
          <div class="title">
            <router-link to="/">
              学术交流+
            </router-link>
          </div>
          <ul class="list clearfix">
            <li>
              <span class="splt"></span>
              <router-link to="/">
                省科博协组织参与第五届全国科技馆辅导员大赛西部赛区预赛
              </router-link>
            </li>
          </ul>
        </div>
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
      </div>
    </div>

  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'

  export default {
    components: {
      slotCon
    },
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  .i-top {
    width: 100%;
    height: 380px;
    .swiper {
      width: 730px;
      height: 100%;
      background: gray;
      float: left;
    }
    .news-info {
      float: left;
      width: 470px;
      height: 100%;
      background: #f3f3f3;
      padding-left: 20px;
      padding-right: 20px;
      li {
        padding-top: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid #b3b3b3;
        &:last-child {
          border-bottom: none;
        }
        h2 {
          font-size: 18px;
          margin-bottom: 12px;
          text-align: center;
          font-weight: bold;
          a {
            color: #004179;
          }
        }
        .txt {
          font-size: 14px;
          line-height: 26px;
          color: #666;
          text-align: justify;
          height: 104px;
          overflow: hidden;
        }
        .details {
          float: right;
          font-size: 14px;
          color: #004179;
        }
      }
    }
  }

  .art-con {
    .l-con {
      float: left;
      width: 730px;
      .ass-con {
        .title {
          font-size: 22px;
          color: #333;
          margin-top: 40px;
        }
        ul {
          width: 100%;
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
              :hover{
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
        .more {
          display: block;
          text-align: center;
          margin-top: 30px;
          font-size: 16px;
          color: #000;
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .icon {
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
      .vip {
        width: 100%;
        margin-top: 40px;
        .title {
          border-bottom: 1px solid #e1e1e1;
          padding-bottom: 10px;
          .txt {
            font-size: 22px;
            color: #333;
            float: left;
          }
          .more {
            float: right;
            color: #004179;
            font-size: 14px;
            line-height: 29px;
          }
        }
        .rolls {
          width: 100%;
          height: 100px;
          margin-top: 20px;
          background: gray;
        }
      }
    }
    .r-con {
      float: right;
      width: 470px;
      padding-left: 25px;
      .title {
        font-size: 22px;
        margin-top: 40px;
        a {
          color: #004179;
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
        }
      }
      .notice-con {
        .splt {
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-left: 6px solid #004179;
          border-bottom: 6px solid transparent;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .science-con {
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
      }
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
      }
    }
  }
</style>
