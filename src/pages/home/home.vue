<template>
  <div class="index myindex">
    <div class="indexheader">
      <serch></serch>
      <myfooter></myfooter>
    </div>

    <!-- 顶部轮播 -->

    <div class="swiperbox">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/img/bg1.jpg"></div>
          <div class="swiper-slide"><img src="../../assets/img/bg2.jpg"></div>
          <div class="swiper-slide"><img src="../../assets/img/bg3.jpg"></div>
          <div class="swiper-slide"><img src="../../assets/img/bg4.jpg"></div>
          <div class="swiper-slide"><img src="../../assets/img/bg5.jpg"></div>
          <div class="swiper-slide"><img src="../../assets/img/bg6.jpg"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- 导航模块 -->

    <div class="swiperbox2">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="nav">
              <li><span class="iconfont icon-wanhui"><p>情感挽回</p></span></li>
              <li><span class="iconfont icon-hunyin"><p>婚恋关系</p></span></li>
              <li><span class="iconfont icon-tongxing"><p>同性恋情</p></span></li>
              <li><span class="iconfont icon-yiyu"><p>抑郁情绪</p></span></li>
              <li><span class="iconfont icon-shuimian"><p>催眠</p></span></li>
              <li><span class="iconfont icon-zixun"><p>心理咨询</p></span></li>
              <li><span class="iconfont icon-piaoliuping"><p>漂流瓶</p></span></li>
              <li><span class="iconfont icon-qingsu"><p>马上倾诉</p></span></li>
              <li><span class="iconfont icon-laba"><p>传声筒</p></span></li>
              <li><span class="iconfont icon-niandushengdian"><p>年度盛典</p></span></li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="nav">
              <li><span class="iconfont icon-falv"><p>法律</p></span></li>
              <li><span class="iconfont icon-zixun"><p>团体咨询</p></span></li>
              <li><span class="iconfont icon-xinren"><p>新人专区</p></span></li>
              <li><span class="iconfont icon-yuyue"><p>预约专区</p></span></li>
              <li><span class="iconfont icon-mingshi"><p>名师</p></span></li>
              <li><span class="iconfont icon-jiatingjiaoyu"><p>家庭教育</p></span></li>
              <li><span class="iconfont icon-xueye"><p>学业问题</p></span></li>
              <li><span class="iconfont icon-renjiguanxi"><p>人际关系</p></span></li>
              <li><span class="iconfont icon-hunyin"><p>婚姻关系</p></span></li>
              <li><span class="iconfont icon-shilian"><p>失恋陪护</p></span></li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="nav">
              <li><span class="iconfont icon-danshen"><p>摆脱单身</p></span></li>
              <li><span class="iconfont icon-jiatingguanxi"><p>家庭关系</p></span></li>
              <li><span class="iconfont icon-qinzi"><p>亲子关系</p></span></li>
              <li><span class="iconfont icon-jiaolv"><p>焦虑</p></span></li>
              <li><span class="iconfont icon-zhichang"><p>职业减压</p></span></li>
              <li><span class="iconfont icon-chengchang"><p>个人成长</p></span></li>
              <li><span class="iconfont icon-shimian"><p>失眠</p></span></li>
              <li><span class="iconfont icon-chengchang"><p>情绪疏导</p></span></li>
              <li><span class="iconfont icon-hunyin"><p>疑心病</p></span></li>
              <li><span class="iconfont icon-zhengzhuang"><p>强迫症</p></span></li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="nav roof">
              <li><span class="iconfont icon-zhiyeguihua"><p>职业规划</p></span></li>
              <li><span class="iconfont icon-kuangzao"><p>暴躁</p></span></li>
              <li><span class="iconfont icon-zhichang"><p>恐惧</p></span></li>
              <li><span class="iconfont icon-bei"><p>自卑</p></span></li>
              <li><span class="iconfont icon-piaoliuping"><p>其他</p></span></li>
            </ul>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!--听你倾述-->

    <div class="chat">
      <span style="color: brown">-----听你倾述-----</span>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="liao">
                <router-link to="/information">
                <img src="../../assets/img/bg2.jpg">
                 <span>11111</span>
                </router-link>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
              </div>
            </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>张三</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>11111</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>李四</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>王五</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>赵六</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <router-link to="/more">
        <a href=""><span class="base">更多倾听者<i>&gt;</i></span></a>
      </router-link>
    </div>

    <!--给你分析建议-->

    <div class="chat">
      <span style="color: cornflowerblue">-----给你分析建议-----</span>
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>11111</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>张三</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>11111</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>李四</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>王五</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="liao">
              <img src="../../assets/img/bg2.jpg">
              <span>赵六</span>
              <div style="background-color: #cccccc;">
                <a href=""><i>个人简介></i></a>
              </div>
            </div>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <router-link to="/suggest">
        <a href=""><span class="base">提供分析建议的倾听者<i>&gt;</i></span></a>
      </router-link>
    </div>

    <!--成长套餐-->


    <div class="chat">
      <span style="color: green">-----成长套餐-----</span>
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="grow">
              <div>
                <h>九型人格,识人圣经</h>
              </div>
              <div>
                <ul>
                  <li>¥511</li>
                  <li>
                    <span style="font-size: .25rem" class="iconfont icon-huomiaohuoreredianhuobaomianxing">359</span>
                    <span style="color: #8f9bad">人购买</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="grow">
              <div>
                <h>九型人格,识人圣经</h>
              </div>
              <div>
                <ul>
                  <li>¥511</li>
                  <li>
                    <span style="font-size: .25rem" class="iconfont icon-huomiaohuoreredianhuobaomianxing">359</span>
                    <span style="color: #8f9bad">人购买</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="grow">
              <div>
                <h>九型人格,识人圣经</h>
              </div>
              <div>
                <ul>
                  <li>¥511</li>
                  <li>
                    <span style="font-size: .25rem" class="iconfont icon-huomiaohuoreredianhuobaomianxing">359</span>
                    <span style="color: #8f9bad">人购买</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="grow">
              <div>
                <h>九型人格,识人圣经</h>
              </div>
              <div>
                <ul>
                  <li>¥511</li>
                  <li>
                    <span style="font-size: .25rem" class="iconfont icon-huomiaohuoreredianhuobaomianxing">359</span>
                    <span style="color: #8f9bad">人购买</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="grow">
              <div>
                <h>九型人格,识人圣经</h>
              </div>
              <div>
                <ul>
                  <li>¥511</li>
                  <li>
                    <span style="font-size: .25rem" class="iconfont icon-huomiaohuoreredianhuobaomianxing">359</span>
                    <span style="color: #8f9bad">人购买</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="grow">
              <div>
                <h>九型人格,识人圣经</h>
              </div>
              <div>
                <ul>
                  <li>¥511</li>
                  <li>
                    <span style="font-size: .25rem" class="iconfont icon-huomiaohuoreredianhuobaomianxing">359</span>
                    <span style="color: #8f9bad">人购买</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        </div>
      <router-link to="/vip">
        <a href=""><span class="base">更多成长套餐<i>&gt;</i></span></a>
      </router-link>
    </div>
  </div>
</template>

<script>
    // 引入swiper插件js
    import Swiper from "swiper"
    import serch from "../../components/serch"
    import myfooter from "../../components/myfooter"
    export default {

        name: 'home',
        data() {
            return {
                btnFlag: true,
            }
        },
        components: {
            serch: serch,
            myfooter: myfooter

        },
        created() {

        },
        mounted() {
            this.myswipery1()
            this.myswipery()
            this.myswipery2()

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

            // 导航轮播图
            myswipery2: function() {
                var swiper1 = new Swiper('.swiperbox2 .swiper-container', {
                    autoplay: false,
                    loop: false,
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
                    spaceBetween: 3
                });
            }
        }
    }
</script>

<style scoped>
  @import url("../../../node_modules/swiper/css/swiper.css");
  @import "../../assets/font_rz6j5od5yi/iconfont.css";
  @import "../../assets/font_o9kfodo6i8c/iconfont.css";
  @import "../../assets/font-icon/iconfont.css";

    /*顶部轮播图*/

  * {
    margin: 0 auto;
    padding: 0 auto;
  }
  .nav{
    width: 100%;

  }
  .nav li {
    padding-right: 0;
    width: 20%;
    float: left;
    text-align: center;
    background-color: #ffffff;
    }

  .nav li span{
    color:#54DD90;
    font-size: 0.6rem;
  }
  .nav li span p{
    font-size: 0.2rem;
    color: black;
  }

  .myindex {
    background: #F7F7F7;
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
    bottom: -5px;
    left: 2.5rem;
  }

  .swiper-container img {
    width: 100%;
    height: 100%;
  }

  /*.swiper-pagination span {*/
  /*  border: .01rem solid springgreen;*/
  /*}*/

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

  .swiperbox2 {
    margin-top: .15rem;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  /*轮播图*/

  .chat {
    width: 100%;
    height: 4.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .18rem;
    padding-top: .28rem;
    padding-bottom: .14rem;
    background-color: white;
  }

  .liao {
    height: 100%;
    width: 100%;
    background-color: #8f9bad;
  }

  .nav-v span {
    display: inline-block;
    float: left;
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
    border-radius: 13%;
    height: 88%;
    border: 2px solid #cccccc;
  }

  .liao img {
    width: 50%;
    height: 38%;
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

  span {
    font-weight: bold;
  }

  .base {
    color: black;
  }

  .roof li {
    padding-bottom: 1.2rem;
  }

  .grow {
    height: 2.2rem;
    width: 3rem;
    background-color: white;
    border-radius: 13%;
  }

  .grow div:nth-child(1) {
    background-color: powderblue;
    height: 1.5rem;
    width: 100%;
    border-radius: 13%;
    padding-top: .2rem;
  }

  .grow div:nth-child(2) {
    height: .4rem;
    width: 100%;
    color: red;
    padding: 0 .2rem 0 .2rem;
    font-size: .25rem;
  }

  .grow ul li {
    float: left;
    padding: 0;
    margin-right: .18rem;
  }

</style>
