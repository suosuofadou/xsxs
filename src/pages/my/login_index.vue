<template>
  <div class="login_bg">
    <div id="logo">
      <img src="../../assets/images/logo.png" alt=""/>
    </div>
    <router-link to="/login"><a class="login_btn">登&nbsp;&nbsp;录</a></router-link>
    <router-link to="/regist"><a class="login_btn">注&nbsp;&nbsp;册</a></router-link>

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
