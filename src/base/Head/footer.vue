<template>
  <div class="footer">
    <div class="friend-link">
      <div class="link-con">
        <p class="title">友情链接</p>
        <ul class="rolls-box">

        </ul>
      </div>
    </div>
    <div class="copyright">
      地址：四川省成都市人民中路一段十六号
      &nbsp;&nbsp;&nbsp;&nbsp;
      电话：028-86609205
      &nbsp;&nbsp;&nbsp;&nbsp;
      传真：028-86609205
      &nbsp;&nbsp;&nbsp;&nbsp;
      在线：1
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/" target="_blank">管理员登录</a>
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
  .footer {
    .friend-link {
      border-top: 1px solid #b3b3b3;
      background: #f3f3f3;
      padding: 12px 0 12px 0;
      margin-top: 20px;
      .link-con {
        width: 1200px;
        margin: 0 auto;
        .title {
          width: 20px;
          font-size: 14px;
          color: #1a1a1a;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
        }
        .rolls-box {
          background: gray;
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          width: 1150px;
          height: 60px;
        }
      }
    }
    .copyright {
      height: 40px;
      line-height: 40px;
      background-color: #004179;
      text-align: center;
      font-size: 14px;
      color: #fff;
      a{
        color: #fff;
      }
    }
  }
</style>
