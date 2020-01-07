<template>
	<div>
    <myfooter></myfooter>
    <!--	顶部导航栏-->
			<div class="shopcart-head">
				<router-link to="/">
					<div class="indexicon"><img src="../../assets/img/fh.png"/></div>
				</router-link>
				<p class="escp">心&nbsp;事</p>
			</div>

    <div class="nav" v-model="selected">
      <div id="1" @click="change(1)" :class="{'active': selected === 1}">故事</div>
      <div id="2" @click="change(2)" :class="{'active': selected === 2}">心情</div>
      <div id="3" @click="change(3)" :class="{'active': selected === 3}">干货</div>
      <div id="4" @click="change(4)" :class="{'active': selected === 4}">文章</div>
    </div>

    <!-- tab-container -->
    <div>
      <!--故事-->
      <div v-if="selected == 1">
        1
      </div>

      <!--心情-->

      <div v-if="selected == 2">
        2
      </div>

      <!--文章-->

      <div v-if="selected == 3">
        3
      </div>

      <!--心情-->

      <div v-if="selected == 4">
        4
      </div>
     </div>
		</div>

</template>

<script>
import myfooter from "../../components/myfooter";
	export default {
      name: 'worry',
      data() {
        return {
            selected : 1
        };
      },
      components: {
        myfooter
      },
      methods: {
          change(index) {

             this.selected = index
          }
      }
  }

</script>

<style scoped>

	.shopcart-none {
	  display: none;
	}
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
	  text-align: center;
	  line-height: 0.84rem;
	  margin: auto;
	  font-size: 0.3rem;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	}
  .nav {
    width: 100%;
    height: .7rem;
  }
  .nav div {
    display: inline-block;
    width: 23.5%;
    line-height: .7rem;
    text-align: center;
  }
  .active {
    border-bottom: 2px solid springgreen;
    transform: scale(1.2);
  }
</style>
