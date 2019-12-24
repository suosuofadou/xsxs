<template>
  <div>
    <myfooter></myfooter>

    <!--	顶部导航栏-->

    <div class="shopcart-head">
      <router-link to="/">
        <div class="indexicon"><img src="../../assets/img/fh.png"/></div>
      </router-link>
      <p class="escp">消&nbsp;息</p>
    </div>

<!--    搜索框-->
      <search></search>
    <section class="aui-flexView">

        <div class="aui-list-box">
          <a href="javascript:;" class="aui-flex">
            <div class="aui-flex-logo">
              <img src="../../assets/images/jinghuqye.jpg" alt="">
            </div>
            <div class="aui-flex-box">
              <h2>金币抵钱</h2>
              <h3>全场商品可抵</h3>
            </div>
            <span class="aui-flex-add">
              16.23
            </span>
          </a>
          <a href="javascript:;" class="aui-flex">
            <div class="aui-flex-logo">
              <img src="../../assets/images/dianhua.png" alt="">
            </div>
            <div class="aui-flex-box">
              <h2>信用白条</h2>
              <h3>全场商品可抵</h3>
            </div>
            <span class="aui-flex-add">
              16.23
            </span>
          </a>

          <a href="javascript:;" class="aui-flex">
            <div class="aui-flex-logo">
              <img src="../../assets/images/dingzhicf.png" alt="">
            </div>
            <div class="aui-flex-box">
              <h2>金币抵钱</h2>
              <h3>全场商品可抵</h3>
            </div>
            <span class="aui-flex-add">
             16.23
            </span>
          </a>

          <a href="javascript:;" class="aui-flex">
            <div class="aui-flex-logo">
              <img src="../../assets/images/fabu-.png" alt="">
            </div>
            <div class="aui-flex-box">
              <h2>信用白条</h2>
              <h3>全场商品可抵</h3>
            </div>
            <span class="aui-flex-add">
              16.23
            </span>
          </a>

          <a href="javascript:;" class="aui-flex">
            <div class="aui-flex-logo">
              <img src="../../assets/images/ren.png" alt="">
            </div>
            <div class="aui-flex-box">
              <h2>金币抵钱</h2>
              <h3>全场商品可抵</h3>
            </div>
            <span class="aui-flex-add">
             16.23
            </span>
          </a>

          <a href="javascript:;" class="aui-flex">
            <div class="aui-flex-logo">
              <img src="../../assets/images/dianhua.png" alt="">
            </div>
            <div class="aui-flex-box">
              <h2>信用白条</h2>
              <h3>全场商品可抵</h3>
            </div>
            <span class="aui-flex-add">
              16.23
            </span>
          </a>

          <a href="javascript:;" class="aui-flex">
            <div class="aui-flex-logo">
              <img src="../../assets/images/dianhua.png" alt="">
            </div>
            <div class="aui-flex-box">
              <h2>金币抵钱</h2>
              <h3>全场商品可抵</h3>
            </div>
            <span class="aui-flex-add">
              16.23
            </span>

          </a>
        </div>
    </section>

  </div>
</template>

<script>
  import search from "../../components/search";
    export default {
        name: "news",
        components:{
            search: search,
        }
    }
</script>

<style scoped>
  @import "../../assets/css/style.css";
  .shopcart-head {
    width: 100%;
    height: 0.75rem;
    background: #7D39A0;
    border-bottom: #ccc solid 0.01rem;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .indexicon {
    width: 0.6rem;
    height: 0.6rem;
    top: 0.07rem;
    left: 0.23rem;
    position: absolute;
  }
  .indexicon img {
    width: 100%;
    height: 100%;
  }
  .escp {
    width: 4.8rem;
    height: 100%;
    padding-left: 35%;
    text-align: center;
    line-height: 0.84rem;
    font-size: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
