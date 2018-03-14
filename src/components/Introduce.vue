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
          <li
            @click="toggleMsg(0)"
            :class="{active:sideNav.current===0}">
            <span class="icon"></span>
            <span class="txt">留言板</span>
          </li>
        </ul>
      </div>
      <div class="right_content">
        <div class="content" v-if="!show" v-html="text.content"></div>
        <div class="message" v-if="show">
          <p class="notice">如果你有什么问题、或者投诉和建议填写在下面列表中，我们会尽快回复你！</p>
          <div class="form-con">
            <div class="form-group clearfix">
              <label class="name">你的姓名</label>
              <div class="form-item">
                <input type="text"
                       v-model="name.value"
                       placeholder="请输入你的姓名"/>
                <label class="error"
                       :class="name.error ? 'is-visible' : ''">
                  不能为空
                  {{name.error}}
                </label>
              </div>
            </div>
            <div class="form-group clearfix">
              <label class="name">联系电话</label>
              <div class="form-item">
                <input type="text"
                       v-model="phone.value"
                       placeholder="请输入联系电话"
                       maxlength="11"/>
                <label class="error"
                       :class="phone.error ? 'is-visible' : ''">
                  不能为空
                  {{phone.error}}
                </label>
              </div>
            </div>
            <div class="form-group clearfix">
              <label class="name">留言内容</label>
              <div class="form-item">
                <textarea rows="5" cols="20" v-model="content.value" placeholder="请输入留言内容"></textarea>
                <label class="error"
                       :class="content.error ? 'is-visible' : ''">
                  不能为空
                  {{content.error}}
                </label>
              </div>
            </div>
            <div class="form-group clearfix">
              <label class="name">验证码</label>
              <div class="form-item">
                <input v-model="content.value"/>
                <label class="error"
                       :class="content.error ? 'is-visible' : ''">
                  不能为空
                  {{content.error}}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </slot-con>
</template>
<script type="text/ecmascript-6">
  import slotCon from '@/base/slot_con'
  import {introduceList, introduceDetail} from '@/public/js/fetch'

  export default {
    components: {
      slotCon
    },
    data() {
      return {
        sideNav: {
          data: [],
          current: ''
        },
        text: '',
        show: false,
        name: {
          value: '',
          error: '',
          isVerify: false
        },
        phone: {
          value: '',
          error: '',
          isVerify: false
        },
        content: {
          value: '',
          error: '',
          isVerify: false
        },
        vertify: {
          value: '',
          error: '',
          isVerify: false
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
          this.sideNav.data = res.msg.data
          this.sideNav.current = res.msg.id
          this._introduceDetail(res.msg.id)
        }).catch(err => {
          console.log(err.response)
        })
      },
      /**
       * 点击除了留言板li
       * @param id
       */
      toggle(id) {
        this.sideNav.current = id
        this.show = false
        this._introduceDetail()
      },
      /**
       * 点击留言板
       * @param id
       */
      toggleMsg(id) {
        this.sideNav.current = id
        this.show = true
      },
      /**
       * 获取协会详情
       * @private
       */
      _introduceDetail() {
        const result = introduceDetail(this.sideNav.current)
        result.then(res => {
          console.log(res)
          this.text = res.msg
        }).catch(err => {
          console.log(err.response)
        })
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
          &:hover {
            &.active {
              .txt {
                transform: scale(1);
                color: #004179;
              }
            }
            .txt {
              transform: scale(1.2);
              color: #004179;
            }
          }
        }
      }
    }
    .right_content {
      float: left;
      padding: 0 30px 0 30px;
      width: 1050px;
      .content {
        width: 100%;
      }
      .message {
        .notice {
          text-align: left;
          font-size: 18px;
          color: #252525;
        }
        .form-con {
          display: inline-block;
          width: 450px;
          margin-top: 40px;
          .form-group {
            width: 100%;
            position: relative;
            margin-bottom: 25px;
            .form-item {
              position: relative;
              .ivu-input-icon {
                line-height: 42px;
              }
              .ivu-input {
                height: 42px;
              }
            }
            input, textarea {
              width: 100%;
              border: 1px solid #dddee1;
              padding: 10px 20px 10px 12px;
              -webkit-transition: all .3s ease-in-out;
              transition: all .3s ease-in-out;
              background: rgba(255, 255, 255, 1);
              box-shadow: none;
              color: #333;
              font-size: 14px;
              -webkit-border-radius: 4px;
              -moz-border-radius: 4px;
              border-radius: 4px;
              &:focus {
                border: 1px solid #57a3f3;
                -webkit-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;
                box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
              }
            }
            label.error.is-visible {
              visibility: visible;
              opacity: 1;
              right: 22px;
              -ms-filter: "alpha(Opacity=100)";
              -webkit-transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              transform: translate(0, 0);
              -webkit-transition: .3s ease-out;
              transition: .3s ease-out;
            }
            label.name {
              font-size: 16px;
              margin-bottom: 15px;
              display: block;
              text-align: left;
            }
            label.error {
              position: absolute;
              top: -1px;
              right: -70px;
              padding: 0 8px;
              line-height: 44px;
              color: #c33;
              cursor: text;
              background: 0 0;
              opacity: 0;
              -webkit-transform: translate(20px, 0);
              -ms-transform: translate(20px, 0);
              transform: translate(20px, 0);
              -webkit-transition: .25s ease-out;
              transition: .25s ease-out;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>
