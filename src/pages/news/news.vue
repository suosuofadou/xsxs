<template>
  <div>
    <!--	顶部导航栏-->
    <div class="shopcart-head">
     <span class="head_left">
       我的分组
     </span>
      <span class="head_songyv">松语</span>
     <div class="head_kefu"><img src="../../assets/images/kefu.png" alt="">
     <span>客服</span>
     </div>
    </div>
    <br><br><br>
<!--    搜索框-->
    <div class="search">
      <search></search>
    </div>

<!--    消息列表-->
    <section class="aui-flexView">
        <div class="aui-list-box">

            <router-link to="/information">
              <a href="#" class="aui-flex">
                <div class="aui-flex-logo">
                  <img src="../../assets/images/banner2.jpg" alt="">
                </div>
                <div class="aui-flex-box">
                  <h2>信用条条</h2>
                  <h3>全场商品可抵</h3>
                </div>
                <span class="aui-flex-add">
              12月10日 16.23
            </span>
              </a>
            </router-link>
<!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>
          <router-link to="/information">
            <a href="#" class="aui-flex">
              <div class="aui-flex-logo">
                <img src="../../assets/images/banner2.jpg" alt="">
              </div>
              <div class="aui-flex-box">
                <h2>信用条条</h2>
                <h3>全场商品可抵</h3>
              </div>
              <span class="aui-flex-add">
              12月10日 16.23
            </span>
            </a>
          </router-link>
          <!--          分割-->
          <div class="fenge"></div>


          <div class="fenge"></div>
        </div>
    </section>
<myfooter></myfooter>
  </div>
</template>

<script>
  import search from "../../components/search";
  import Myfooter from "../../components/myfooter";
    export default {
        name: "news",
        components:{
            Myfooter,
            search,
        }
    }
</script>

<style scoped>
  @import "../../assets/css/style.css";
  .shopcart-head {
    width: 100%;
    height: 1rem;
    background: #ffffff;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .head_left{
    color: #2BBBB2;
    line-height: 1rem;
    margin-left: 0.3rem;
    font-size: 0.3rem;
  }
  .head_songyv{
    text-align: center;
    margin-left: 1.8rem;
    font-size: 0.4rem;
  ;
  }
  .head_kefu{
    margin-left: 1.8rem;
    display: inline-block;
    font-size: 0.3rem;
  }
  .head_kefu img{
    width: 0.4rem;
    height: 0.4rem;
    margin-top: 0.06rem;
    padding-right: 0.03rem;
  }
  .search{
    width: 100%;
    height:1.1rem;
    background-color: #EFEFEF;
    margin-top: -0.3rem;
  }
  .indexicon img {
    width: 100%;
    height: 100%;
  }
</style>
