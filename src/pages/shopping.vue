<template>
	<div>
	<!-- <div class="index shopping"> -->
		<div class="shopcart-none">
			<!-- 购物车为空 -->
			<div class="shopcart-head">
				<router-link to="/">
					<div class="indexicon"><img src="../assets/img/index_03.png" /></div>
				</router-link>
				<p class="escp">购物车</p>
			</div>
			<div class="content">
				<div class="shopcar-empty">
					<img src="../assets/img/car.png" />
					<div class="empty-til">购物车还是空的，赶紧行动吧！</div>
					<router-link to="/">
						<div class="gokuangkuang">去逛逛</div>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 购物车有东西 -->
		<div class="shopcart-have">
			<div class="shopcart-head">
				<router-link to="/">
					<div class="indexicon"><img src="../assets/img/index_03.png" /></div>
				</router-link>
				<p class="escp">购物车</p>
				<div class="editAll" @click="getMethod()">编辑</div>
			</div>
			<!-- 购物车商品内容 -->
			<div class="panel-set">
				<div class="shop-panel">
					<div class="shop-panel-store border-b-1 clear">
						<div class="float-left">
							<div class="store-check">
								<span class="nocheck"><img src="../assets/img/nocheck.png" /></span>
								<span class="checked none"><img src="../assets/img/check.png" /></span>
							</div>
							<img src="../assets/img/store-logo.png" class="store-logo" />
							<router-link to="#">
								<!-- 跳转分类classify/.... -->
								<div class="store-name">小必咖啡</div>
							</router-link>
							<div class="icon-arrow-right"><img src="../assets/img/icon-arrow-right.png" /></div>
						</div>
						<div class="float-right"><span class="store-edit" data-edit="1" @click="getMethod()">编辑</span></div>
					</div>
					<div class="shop-panel-product-set">
						<div class="icon-radio wujiang_pic_size" id="caocao_pic" @click="nn()"><img id="picts" src="../assets/img/nocheck.png" /></div>
						<div class="product-pic border-1">
							<img src="../assets/img/coffee.jpg" />
						</div>
						<div class="product-detail">
							<div class="product-name">
								<router-link to="#">
									<!-- 跳转products/..... -->
									手冲定制咖啡6杯 9.9元/杯
								</router-link>
							</div>
							<div class="product-info">
								<div class="product-dec">摩卡风味</div>
							</div>
							<div class="product-buy"><span class="product-price">￥<i>59</i></span>×<span class="product-num">1</span></div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer"><img src="../assets/img/nocheck.png"><span class="span-one">全选</span><span class="span-two">合计:</span><span
				 class="span-three">￥0</span><span class="set">去结算</span></div>
		</div>
	</div>
	</div>
	<!-- </div> -->
</template>

<script>
	
	export default {
		name: 'shopping',
		data() {
			return {

			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
		                getMethod () {      //点击事件的时候去寻找相应的方法，在底层做转换直接写方法名，大括号里面写相应的业务逻辑
		                    console.log('11');
		                },
		
		                nn(){
		                  var imgObj = document.getElementById("caocao_pic");
		                  if(imgObj.getAttribute("src",2)=="images/nocheck.png"){
		                  imgObj.src="images/right.png";
		                  }else{
		                  imgObj.src="images/nocheck.png";
		                  }
		                }
		                }
		}

</script>

<style>
	.shopping {
		background: firebrick;
	}
	.shopcart-none {
	  display: none;
	}
	.shopcart-head {
	  width: 100%;
	  height: 0.85rem;
	  background: #fff;
	  border-bottom: #ccc solid 0.01rem;
	  box-sizing: border-box;
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 1;
	}
	.indexicon {
	  width: 0.4rem;
	  height: 0.35rem;
	  top: 50%;
	  left: 0.23rem;
	  transform: translateY(-50%);
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
	.content {
	  background-color: #f2f2f2;
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  top: 0.85rem;
	  left: 0;
	  display: flex;
	  justify-content: center;
	}
	.shopcar-empty {
	  box-sizing: border-box;
	  top: 0.8rem;
	  width: 5.6rem;
	  text-align: center;
	  position: absolute;
	}
	.shopcar-empty img {
	  width: 1rem;
	  height: 1rem;
	}
	.empty-til {
	  height: 1.1rem;
	  line-height: 1.1rem;
	  font-size: 0.3rem;
	  color: #666;
	}
	.gokuangkuang {
	  height: 0.8rem;
	  line-height: 0.8rem;
	  color: #fff;
	  text-align: center;
	  font-size: 0.24rem;
	  background-color: #b768a5;
	  border-radius: 0.06rem;
	}
	/* 购物车有东西 */
	.shopcart-have {
	  display: block;
	}
	.editAll {
	  position: absolute;
	  right: 0.21rem;
	  top: 0;
	  line-height: 0.84rem;
	  font-size: 0.3rem;
	  color: #333;
	}
	.content-have {
	  background: #f2f2f2;
	}
	.panel-set {
	  margin-top: 0.85rem;
	}
	.shop-panel {
	  margin-bottom: 0.2rem;
	  background-color: #fff;
	}
	.shop-panel-store {
	  padding: 0.27rem 0.2rem;
	}
	.border-b-1 {
	  border-bottom: 1px solid #ccc;
	}
	.store-check {
	  float: left;
	  position: relative;
	}
	.nocheck,
	.checked {
	  width: 0.3rem;
	  height: 0.3rem;
	}
	.nocheck {
	  display: block;
	  float: left;
	}
	.nocheck img {
	  width: 0.3rem;
	  height: 0.3rem;
	}
	.float-left {
	  float: left;
	  display: flex;
	  align-items: center;
	}
	.none {
	  display: none;
	}
	.store-logo {
	  vertical-align: bottom;
	  margin-left: 0.2rem;
	  width: 0.32rem;
	  height: 0.32rem;
	  float: left;
	}
	.store-name {
	  float: left;
	  font-size: 0.3rem;
	  color: #7f4395;
	  margin-left: 0.2rem;
	  margin-right: 0.2rem;
	  max-width: 4.5rem;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  vertical-align: bottom;
	}
	.icon-arrow-right {
	  width: 0.26rem;
	  height: 0.26rem;
	  float: left;
	  display: flex;
	  align-items: center;
	}
	.icon-arrow-right img {
	  width: 0.14rem;
	  height: 0.25rem;
	}
	.clear::after {
	  content: '';
	  clear: both;
	  display: block;
	  width: 0;
	}
	
	.float-right {
	  float: right;
	}
	.store-edit {
	  font-size: 0.3rem;
	  color: #333;
	}
	/* 购物车列表 */
	.shop-panel-product-set,.shop-panel-product-item {
	    padding: .24rem .2rem;
	}
	.icon-radio {
	  display: flex;
	  align-items: center;
	  float: left;
	}
	.icon-radio img {
	  width: 0.3rem;
	  height: 0.3rem;
	  margin-top: .6rem;
	}
	.product-pic {
	  width: 1.44rem;
	  height: 1.44rem;
	  margin-left: 0.2rem;
	  margin-right: 0.2rem;
	  box-sizing: content-box;
	  overflow: hidden;
	  float: left;
	  border: 1px solid #666666;
	}
	.product-pic img{
	  width: 100%;
	  height: 100%;
	}
	a {
	    text-decoration: none;
	    color: #333;
	}
	.product-detail {
	    float: left;
	    width: 4.8rem;
	    overflow: hidden;
	}
	.product-name {
	    width: 100%;
	    font-size: .3rem;
	    line-height: 1.2;
	    color: #333;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.product-dec {
	    font-size: .3rem;
	    line-height: 1;
	    color: gray;
	    width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    padding: .2rem 0;
	}
	.product-buy {
	    font-size: .3rem;
	    line-height: 1;
	}
	.product-price {
	    color: #f33;
	    margin-right: .32rem;
	}
	
	.footer{
	  width: 100%;
	  height: 1rem;
	  margin-top:8rem;
	  position: fixed;
	  display: flex;
	  align-items: center;
	  line-height: 1rem;
	}
	
	.footer img{
	  width: .3rem;
	  height: .3rem;
	  padding-left: .2rem;
	}
	
	.span-one{
	  font-weight: 400;
	  margin-left: .2rem;
	  font-size: .3rem;
	}
	
	.set{
	   font-size: .3rem;
	   width: 1.6rem;
	   height: .65rem;
	   background-color: #FF3333;
	   float: right;
	   line-height: .65rem;
	   border-radius: .08rem;
	   text-align: center;
	   color: #fff;
	   margin-right: .2rem;
	   margin-left: auto;
	   bottom: 1rem;
	}
	
	.span-two{
	      width: 1.54rem;
	      height: .99rem;
	      display: -webkit-flex;
	      display: flex;
	      -webkit-flex-direction: column;
	      flex-direction: column;
	      -webkit-justify-content: center;
	      justify-content: center;
	      margin-right: .1rem;
	      margin-left: 2rem;
	      text-align: right;
	      font-size: .3rem;
	      float: right;
	}
	
	.span-three{
	  text-align: right;
	  font-size: .3rem;
	  color: #FF3333;
	}
</style>
