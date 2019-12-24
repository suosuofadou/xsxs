<template>
  <div style="background-color: #F7F7F7;">
<!--    <&#45;&#45;顶部&ndash;&gt;-->
    <div style="background-color: white;">
      <div class="nav">
        <router-link to="/">
          <label>
            <img src="../../assets/img/fh.png" alt="">
            <p>消息(7)</p>
          </label>
        </router-link>
        <p class="nav-v">净远情感专家</p>
      </div>

      <div class="particulars">
        <div class="tx">
          <img src="https://cdn.xgl6.top/img/a5.jpg" alt="">
          <p v-if="">关注</p>
        </div>
        <div class="ta">
          <div>
            <div>
              <span>444</span>
              <p>赞助人数</p>
            </div>
            <div>
              <span>2725.1</span>
              <p>已售时长</p>
            </div>
            <div>
              <span>99.99%</span>
              <p>好评率</p>
            </div>
          </div>
          <div class="pj">
            <span>没次和您说心里话</span>
            <span>评价(2345)</span>
            <span style="color: springgreen" class="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy-copy"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
    </div>
    <div class="bottom">
      <input type="text">
      <button>发送</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "information",
    }
</script>

<style scoped>
  @import "../../assets/font_2r1hqz38xdv/iconfont.css";
  * {
    margin: 0 auto;
    padding: 0 auto;
  }
  .nav {
    height: 1rem;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid cadetblue;
  }
  .nav img {
    height: .6rem;
    margin-top: .18rem;
    margin-left: .25rem;
  }
  .nav label p {
    font-size: .32rem;
    display: inline-block;
    margin-top: .2rem;
  }
  .nav-v {
    font-size: .45rem;
    display: inline-block;
    margin-left: .5rem;
    margin-top: .1rem;
  }
  .particulars div {
    height: 1.8rem;
  }
  .tx {
    display: inline-block;
    height: 50%;
    width: 23%;
  }
  .tx img {
    height: 80%;
    width: 85%;
    border-radius: 50%;
    text-align: center;
    margin-left: 12%;
    margin-top: 0;
  }
  .tx p {
    font-size: .25rem;
    margin-left: 38%;
  }
  .ta {
    display: inline-block;
    height: 100%;
    width: 75%;
    border-left: 1px solid cadetblue;
  }
  .ta div {
    height: .9rem;
    width: 100%;
  }
  .ta p {
    font-size: .1rem;
    margin-top: .1rem;
    color: #7d7d7d;
  }

  .ta div:nth-child(1) div {
    width: 33.33%;
    float: left;
    text-align: center;
    border-bottom: 1px solid cadetblue;

  }
  .pj span {
    line-height: .9rem;
    float: left;
  }
  .pj span:nth-child(1) {
    margin-left: .2rem;
    width: 3.6rem;
    height: .9rem;
  }
  .pj span:nth-child(2) {
    margin-right: .1rem;
    color: springgreen;
  }
  .body {
    background-color: #F7F7F7;
    height: 13rem;
    width: 100%;
  }
  .bottom {
    bottom: 0;
    height: .6rem;
    width: 100%;
    display: flex;
    position: fixed;
  }
  .bottom input {
    width: 80%;
    height: .6rem;
  }
  .bottom button {
    width: 19%;
    height: .6rem;
    background-color: blue;
  }
</style>
