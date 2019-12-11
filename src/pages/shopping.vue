<template>
	<div>
<!--	顶部导航栏-->
			<div class="shopcart-head">
				<router-link to="/">
					<div class="indexicon"><img src="../assets/img/fh.png"/></div>
				</router-link>
				<p class="escp">心事</p>
			</div>
    <!--<div class="nav_head">
      <ul>
        <li>故事</li>
        <li>心情</li>
        <li>干货</li>
        <li>文章</li>
      </ul>
    </div>-->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">option A</mt-tab-item>
      <mt-tab-item id="2">option B</mt-tab-item>
      <mt-tab-item id="3">option C</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'content ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
		</div>

</template>

<script>

	export default {
      name: 'shopping'
  }

</script>

<style>
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
  .nav_head {
    width: 100%;
    height: 0.8rem;
    background:url("../../src/assets/img/ys.png")no-repeat;
  }
  .nav_head li{
    float: left;
    padding: 0 0.6rem;
    font-size: 18px;
    font-weight: bold;
    line-height: 0.8rem;
  }
</style>
