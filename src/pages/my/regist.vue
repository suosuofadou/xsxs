<template>
  <div class="register">
    <div class="regTop">
      <span>用户注册</span>
      <a class="back" href="index.html">&lt;&nbsp;返回</a>
    </div>
    <div class="content">
      <div class="point">
        <span>欢迎成为心诉星说的一员</span>
      </div>
      <form action="">
        <div class="message">
          <input type="tel" placeholder="输入手机号" pattern="[0-9]{11}" required/>
          <input type="password" placeholder="请输入6-25位密码" pattern="[0-9A-Za-z]{6,25}" required/>
          <input type="password" placeholder="请再次输入密码" pattern="[0-9A-Za-z]{6,25}" required/>
          <input type="text" placeholder="输入验证码" pattern="[0-9]{6}" required/>
          <select name="job">
            <option value="choose">选择身份</option>
            <option value="boss">普通用户</option>
            <option value="staff">倾听者</option>
          </select>
          <div class="icons">
            <b><img src="../../assets/img/zc1.png" alt=""/></b>
            <b><img src="../../assets/img/zc2.png" alt=""/></b>
            <b><img src="../../assets/img/zc2.png" alt=""/></b>
            <b><img src="../../assets/img/zc3.png" alt=""/></b>
          </div>
          <a class="code" href="" required>获取验证码</a>
        </div>
        <div class="agree">
          <input type="checkbox"/><span>&nbsp;同意&nbsp;</span><a href="">《注册协议》</a>
        </div>
        <button class="submit" type="submit">注册</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "regist"
    }
</script>

<style scoped>
  @import "../../assets/css/common.css";
  @import "../../assets/css/register.css";
</style>
