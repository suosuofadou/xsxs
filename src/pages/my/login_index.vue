<template>
  <div class="login_bg">
    <div id="logo">
      <img src="../../assets/images/logo.png" alt=""/>
    </div>
    <router-link to="/login"><a class="login_btn">登&nbsp;&nbsp;录</a></router-link>
    <router-link to="/regist"><a class="login_btn">注&nbsp;&nbsp;册</a></router-link>
    <!--
    <div class="other_login">
      <div class="other"></div>
      <span>其他方式登录</span>
      <div class="other"></div>
    </div>
    <div class="other_choose">
      <a href="">
        <img src="../../assets/img/weixin.png" alt=""/>
      </a>
      <a href="">
        <img src="../../assets/img/QQ.png" alt=""/>
      </a>
    </div>-->
  </div>

</template>

<script>
    export default {
        name: "index"
    }
</script>
<style scoped>
  @import "../../assets/css/common.css";
  @import "../../assets/css/login.css";
  .login_bg{
    background: #ffffff;
  }
  .login_btn{
    width: 80%;
    margin: 10%;
  }
  .other_login{
    top: 70%;
  }
  .other_choose{
    top: 80%;
  }
  .other_choose img{

  }
</style>
