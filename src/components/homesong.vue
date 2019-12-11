<template>
  <div>
    <!-- 聊聊专区 -->

    <div class="chat">
    <span style="color: red">------聊聊专区------</span>
      <div class="swiper-container swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-648px, 0px, 0px);">
          <div class="swiper-slide swiper-slide-prev" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide swiper-slide-active" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide swiper-slide-next" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide" style="width: 618px; margin-right: 30px;">Slide 4</div>
          <div class="swiper-slide" style="width: 618px; margin-right: 30px;">Slide 5</div>
        </div>
      </div>
  </div>

    <!-- 关注专区 -->

    <div class="chat">
      <span style="color: #42B983">------关注专区------</span>
      <div class="swiper-container swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-648px, 0px, 0px);">
          <div class="swiper-slide swiper-slide-prev" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide swiper-slide-active" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide swiper-slide-next" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide" style="width: 618px; margin-right: 30px;">Slide 4</div>
          <div class="swiper-slide" style="width: 618px; margin-right: 30px;">Slide 5</div>
        </div>
      </div>
    </div>


    <!-- 倾听专区 -->

    <div class="chat">
      <span style="color: #FF7A00">------倾听专区------</span>
      <div class="swiper-container swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-648px, 0px, 0px);">
          <div class="swiper-slide swiper-slide-prev" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide swiper-slide-active" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide swiper-slide-next" style="width: 618px; margin-right: 30px;">
            <div class="bread"></div>
          </div>
          <div class="swiper-slide" style="width: 618px; margin-right: 30px;">Slide 4</div>
          <div class="swiper-slide" style="width: 618px; margin-right: 30px;">Slide 5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

    export default {
        name: "homesong",
        data() {
            return {
                btnFlag: true,
            }
        },
        components: {
            serch: serch,
            myfooter: myfooter,
            homesong: homesong,
        },
        created() {

        },
        mounted() {
            this.myswipery1()
        },

        methods: {
            myswipery1: function () {
                var swiper1 = new Swiper('.chat .swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 30
                });
            }
        }
    }
</script>

<style scoped>
  @import url("../../node_modules/swiper/css/swiper.css");
  /*轮播图*/

  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
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

  .bread {
    width: 2.5rem;
    height: 3rem;
    background-color: wheat;
    border-radius: 12%;
  }

</style>
