<template>
  <div id="login">
  <div class="login_bg">
    <div id="logo">
      <img src="images/logo.png" alt=""/>
    </div>
    <form action="">
      <div class="userName">
        <lable>用户ID：</lable>
        <input type="text" name="name" placeholder="请输入用户名" pattern="[0-9A-Za-z]{6,16}" required/>
      </div>
      <div class="passWord">
        <lable>密&nbsp;&nbsp;&nbsp;码：</lable>
        <input type="password" name="password" placeholder="请输入密码" pattern="[0-9A-Za-z]{6,25}" required/>
      </div>
      <div class="choose_box">
        <div>
          <input type="checkbox" checked="checked" name="checkbox"/>
          <lable>记住密码</lable>
        </div>
        <a href="newPassword.html">忘记密码</a>
      </div>
      <button class="login_btn" type="submit">登&nbsp;&nbsp;录</button>
    </form>
    <div class="other_login">
      <div class="other"></div>
      <span>其他方式登录</span>
      <div class="other"></div>
    </div>
    <div class="other_choose">
      <a href="">
        <img src="../../assets/img/QQ.png" alt=""/>
      </a>
      <a href="">
        <img src="../../assets/img/weixin.png" alt=""/>
      </a>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>
<style scoped>
  @import "../../assets/css/common.css";
  @import "../../assets/css/login.css";

</style>
