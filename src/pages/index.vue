<template>
	<div class="index myindex">
<!--		<div class="dexe">-->
<!--			<div class="money"><span>50元</span></div>-->
<!--			<div class="down">-->
<!--				<p><dtime></dtime>后过期</p>-->
<!--				<p>下载app领取新用户限量专属特权</p>-->
<!--			</div>-->
<!--		</div>-->
		<div class="indexheader">

			<serch></serch>
			<indexnav></indexnav>
			<myfooter></myfooter>
		</div>

		<!-- 轮播 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../assets/img/bg1.jpg"></div>
				<div class="swiper-slide"><img src="../assets/img/bg2.jpg"></div>
				<div class="swiper-slide"><img src="../assets/img/bg3.jpg"></div>
				<div class="swiper-slide"><img src="../assets/img/bg4.jpg"></div>
				<div class="swiper-slide"><img src="../assets/img/bg5.jpg"></div>
				<div class="swiper-slide"><img src="../assets/img/bg6.jpg"></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		<div class="bread">
			<ul>
				<li>大牌品质</li>
				<li>工场特价</li>
				<li>分期支付</li>
				<li>顺丰包邮</li>
				<li>无忧退款</li>
			</ul>
		</div>
		<div class="shop-nav">
			<ul>
				<li>
					<a href="#">
						<img src="../assets/img/li1.png">
						<span>品质男装</span>
					</a>
				</li>
				<li>
					<a href="#">
						<p>
							<img src="../assets/img/li21.png">
						</p>
						<img src="../assets/img/li22.png">
						<span>定制咖啡</span>
					</a>
				</li>
				<li>
					<a href="#">
						<p>
							<img src="../assets/img/li31.png" style="margin-left: .2rem;">
						</p>
						<img src="../assets/img/li32.png">
						<span>每日签到</span>
					</a>
				</li>
				<li>
					<router-link to="/newproductList">
						<p class='ZXC'>99+</p>
						<img src="../assets/img/li42.png">
						<span>每日上新</span>
					</router-link>
				</li>
				<li>
					<a href="#">
						<img src="../assets/img/li5.png">
						<span>生鲜直供</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="goods">
			<span>热销.好评</span>
			<p>用户购买热度实时推荐</p>
		</div>
		<div class="list">
			<ul>
				<li>
					<img src="../assets/img/list1.jpg">
					<p class="price"><span>￥</span><span>89</span></p>
					<p class="labels"><span>精选</span><span>一起拼</span></p>
					<p class="list-sub">青岛海域产地直供</p>
					<p class="list-title">青岛鲜冻大粒扇贝柱 1000g</p>
					<p class="comment">166条好评</p>
				</li>
				<li>
					<img src="../assets/img/list2.jpg">
					<p class="price"><span>￥</span><span>89</span></p>
					<p class="labels"><span>精选</span><span>一起拼</span></p>
					<p class="list-sub">青岛海域产地直供</p>
					<p class="list-title">青岛鲜冻大粒扇贝柱 1000g</p>
					<p class="comment">166条好评</p>
				</li>
				<li>
					<img src="../assets/img/list3.jpg">
					<p class="price"><span>￥</span><span>89</span></p>
					<p class="labels"><span>精选</span><span>一起拼</span></p>
					<p class="list-sub">青岛海域产地直供</p>
					<p class="list-title">青岛鲜冻大粒扇贝柱 1000g</p>
					<p class="comment">166条好评</p>
				</li>
				<li>
					<img src="../assets/img/list4.jpg">
					<p class="price"><span>￥</span><span>89</span></p>
					<p class="labels"><span>精选</span><span>一起拼</span></p>
					<p class="list-sub">青岛海域产地直供</p>
					<p class="list-title">青岛鲜冻大粒扇贝柱 1000g</p>
					<p class="comment">166条好评</p>
				</li>
				<li>
					<img src="../assets/img/list1.jpg">
					<p class="price"><span>￥</span><span>89</span></p>
					<p class="labels"><span>精选</span><span>一起拼</span></p>
					<p class="list-sub">青岛海域产地直供</p>
					<p class="list-title">青岛鲜冻大粒扇贝柱 1000g</p>
					<p class="comment">166条好评</p>
				</li>
				<li>
					<img src="../assets/img/list3.jpg">
					<p class="price"><span>￥</span><span>89</span></p>
					<p class="labels"><span>精选</span><span>一起拼</span></p>
					<p class="list-sub">青岛海域产地直供</p>
					<p class="list-title">青岛鲜冻大粒扇贝柱 1000g</p>
					<p class="comment">166条好评</p>
				</li>
			</ul>
		</div>
		<div class="histop">
			<img v-if="btnFlag" class="go-top" src="../assets/img/top.png" @click="backTop">
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
				btnFlag:true,
			}
		},
		components: {
			serch: serch,
			indexnav: indexnav,
			dtime:dtime,
			myfooter:myfooter

		},
		created() {

		},
		mounted() {
			this.myswipery()
			// this.scrollToTop()
		},

		methods: {
			// 置顶
			backTop(){
				this.$el.scrollTop=0
			},
			scrollToTop(){
				const that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop>20) {
					that.btnFlag = true
				} else{
					that.btnFlag = false
				}
			},
			// 轮播
			myswipery: function() {
				var swiper = new Swiper('.swiper-container', {
					 spaceBetween: 30,
					      centeredSlides: true,
					      autoplay: {
					        delay: 2500,
					        disableOnInteraction: false,
					      },
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					// 上一个下一个
					  navigation: {
					        nextEl: '.swiper-button-next',
					        prevEl: '.swiper-button-prev',
					      },
				});
			}
		}
	}
</script>

<style>
	/* 引入swiper  css */
	@import url("../../node_modules/swiper/css/swiper.css");
	/*.dexe{*/
	/*	width:100%;*/
	/*	height: 1rem;*/
	/*	display: flex;*/
	/*	align-items: center;*/
	/*	background:url(../assets/img/indextop.jpg);*/
	/*	background-size: 100%;*/
	/*	color: #fff;*/
	/*}*/
	/*.dexe .money{*/
	/*	width: 1.35rem;*/
	/*}*/
	/*.dexe .money span{*/
	/*	display: inline-block;*/
	/*	width: 1.35rem;*/
	/*	color: #fff;*/
	/*	text-align: center;*/
	/*	border-right: #fff solid .015rem;*/
	/*}*/
	/*.dexe .down{*/
	/*	margin-left: .2rem;*/
	/*}*/
	/*.dexe .down p{*/
	/*	font-size: .22rem;*/
	/*}*/
	/*.dexe .down p:nth-of-type(1){*/
	/*	display: flex;*/
	/*}*/
	.myindex {
		background: #F4F4F4;
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
	.swiper-container .swiper-pagination{
		width: 2.5rem;
		position: absolute;
		bottom: .2rem;
		left: 5rem;
	}
	.swiper-pagination .swiper-pagination-bullet{
		background: none;
	}
	.swiper-container .swiper-pagination .swiper-pagination-bullet-active{
		background: #f7b200;
		border: .02rem solid #f7b200;
	}
	.swiper-pagination span{
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

	.bread {
		background: #fff;
	}

	.bread ul {
		display: flex;
	}

	.bread ul li {
		flex: 1;
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		font-size: .24rem;
		color: #9687a4;
		list-style: none;
	}

	.shop-nav {
		background: #fff;
		padding: .22rem .15rem;
		box-sizing: border-box;
	}

	.shop-nav ul {
		display: flex;
		width: 100%;
	}

	.shop-nav ul li {
		flex: 1;
		text-align: center;
		font-size: .26rem;
		color: #9687a4;
		list-style: none;
	}

	.shop-nav ul li a {
		display: flex;
		height: 1.2rem;
		flex-direction: column;
		justify-content: flex-end;
		color: #666;
	}

	.shop-nav ul li a p img {
		width: 90%;
		height: .3rem;
		margin-left: 0;
	}

	.shop-nav ul li img {
		margin-left: .5rem;
		width: .46rem;
		height: .46rem;
	}

	.ZXC {
		width: .5rem;
		height: .3rem;
		color: #fff;
		line-height: .3rem;
		margin-left: .9rem;
		background: url(../assets/img/li41.png) no-repeat;
		background-size: 100% 100%;
	}

	.goods {
		width: 100%;
		height: 1.25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #fff;
		margin-top: .2rem;
		padding-top: .28rem;
		padding-bottom: .14rem;
	}

	.goods span {
		display: inline-block;
		height: .4rem;
		margin: 0 auto .1rem;
		font-size: .28rem;
		border-bottom: solid .02rem #4A4A4A;
	}
	.goods p{
		color:#CCB17A;
	}
	.list ul{
		width: 100%;
		background: #fff;
	}
	.list ul li{
		width: 49.73%;
		float: left;
		background: #fff;
		border-bottom: .02rem solid #F4F4F4;
		border-right: .02rem solid #F4F4F4;
		padding-bottom: .28rem;
		box-sizing: border-box;
	}
	.list ul li img{
		width: 100%;
	}
	.list ul li .price{
		color: #F7A701;
		font-size: .32rem;
	}
	.list ul li .labels span:nth-of-type(1){
		display: inline-block;
		background: #AB7FD1;
		color: #fff;
		font-size: .12rem;
		width: .55rem;
		height: .35rem;
		text-align: center;
	}
	.list ul li .labels span:nth-of-type(2){
		display: inline-block;
		border: 0.01rem solid #FB4C81;
		color: #FB4C81;
		font-size: .12rem;
		width: 1rem;
		height: .35rem;
		text-align: center;
		margin-left: .1rem;
	}
	.list ul li .labels{
		margin-bottom: .08rem;
	}
	.list ul li .list-sub{
		color: #BF9E6B;
		font-size: .24rem;
		margin-bottom: .08rem;
	}
	.list ul li .list-title{
		color: #4A4A4A;
		font-size: .25rem;
		margin-bottom: .08rem;
	}
	.list ul li .comment{
		color: #BBB;
		font-size: .2rem;
	}
	.list ul li p{
		padding-left: .24rem;
		box-sizing: border-box;
	}
	.histop{
		width: .8rem;
		height: .8rem;
		position:fixed;
		right: .2rem;
		bottom: 1.2rem;
	}
</style>
