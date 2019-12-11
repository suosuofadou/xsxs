<template>
  <div class="index myindex">
    <div class="indexheader">
      <serch></serch>
      <indexnav></indexnav>
      <myfooter></myfooter>
    </div>
    <!-- 顶部轮播 -->
    <div class="swiperbox">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/img/bg1.jpg"></div>
          <div class="swiper-slide"><img src="../assets/img/bg2.jpg"></div>
          <div class="swiper-slide"><img src="../assets/img/bg3.jpg"></div>
          <div class="swiper-slide"><img src="../assets/img/bg4.jpg"></div>
          <div class="swiper-slide"><img src="../assets/img/bg5.jpg"></div>
          <div class="swiper-slide"><img src="../assets/img/bg6.jpg"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!--聊聊专区-->

    <div class="chat">
      <span style="color: cornflowerblue">-----聊聊专区-----</span>
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>张三</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>李四</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>王五</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>赵六</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <a href=""><span>更多聊友<i>&gt;</i></span></a>
    </div>

    <!--关注专区-->

    <div class="chat">
      <span style="color: cornflowerblue">-----关注专区-----</span>
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>张三</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>李四</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>王五</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>赵六</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <a href=""><span>更多用户<i>&gt;</i></span></a>
    </div>

    <!--倾听专区-->

    <div class="chat">
      <span style="color: brown">-----倾听专区-----</span>
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../assets/img/bg2.jpg">
              <span>11111</span>
              <a href=""><i>个人简介></i></a>
            </div>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        </div>
      <a href=""><span>更多倾听者<i>&gt;</i></span></a>
    </div>

  </div>
</template>

<script>
    // 引入swiper插件js
    import Swiper from "swiper"
    import serch from "../components/serch"
    import indexnav from "../components/indexnav"
    import myfooter from "../components/myfooter"
    import dtime from "../components/dtime"
    export default {

        name: 'index',
        data() {
            return {
                btnFlag: true,
            }
        },
        components: {
            serch: serch,
            indexnav: indexnav,
            dtime: dtime,
            myfooter: myfooter

        },
        created() {

        },
        mounted() {
            this.myswipery1()
            this.myswipery()

            this.scrollToTop()
        },

        methods: {
            // 置顶
            // backTop(){
            // 	this.$el.scrollTop=0
            // },
            // scrollToTop(){
            // 	const that = this
            // 	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // 	that.scrollTop = scrollTop
            // 	if (that.scrollTop>20) {
            // 		that.btnFlag = true
            // 	} else{
            // 		that.btnFlag = false
            // 	}
            // },

            // 顶部轮播图
            myswipery: function() {
                var swiper = new Swiper('.swiperbox .swiper-container', {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true, //修改swiper的父元素时，自动初始化swiper
                });
            },

            // 底部轮播
            myswipery1: function() {
                var swiperswiper = new Swiper('.chat .swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    pagination: '.swiper-pagination',
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 30
                });
            }
        }
    }
</script>

<style>
  @import url("../../node_modules/swiper/css/swiper.css");

  /*顶部轮播图*/

  * {
    margin: 0 auto;
  }

  .myindex {
    background: #BBBBBB;
    overflow-y: scroll;
    position: fixed;
    left: 0;
    bottom: 1rem;
  }

  .indexheader {
    background: #fff;
  }

  .swiper-container {
    width: 100%;
    height: 2.5rem;
    position: relative;
  }

  .swiper-container .swiper-pagination {
    width: 2.5rem;
    position: absolute;
    bottom: .2rem;
    left: 5rem;
  }

  .swiper-container img {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination span {
    border: .02rem solid #7f4395;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  /*轮播图*/

  .chat {
    width: 100%;
    height: 3.65rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .2rem;
    padding-top: .28rem;
    padding-bottom: .14rem;
    background-color: white;
  }

  .chat {}

  /*.bread {*/
  /*  width: 2.5rem;*/
  /*  height: 3rem;*/
  /*  background-color: wheat;*/
  /*  border-radius: 12%;*/
  /*}*/

  .swiper-container {
    border-radius: 12%;
  }

  .liao {
    height: 100%;
    width: 100%;
    background-color: powderblue;
  }

  .chat .swiper-container {
    width: 100%;
    height: 100%;
  }

  .chat .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .liao {
    border-radius: 16%;
    height: 88%;
  }

  .liao img {
    width: 50%;
    height: 32%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-top: .25rem;
    margin-bottom: .25rem;
  }

  .liao span {
    display: flex;
    justify-content: center;
  }

  .liao i {
    font-size: 8px;
    color: blue;
    margin-left: 1rem;
  }
  .chat span i {
    color: #FF7A00;
  }

</style>
