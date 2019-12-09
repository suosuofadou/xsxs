<template>
	<div class="helpCenters">
		<div class="top">
			<div class="header-down">
				<div class="header-logo">
					<img src="../assets/images/heare-logo.png">
				</div>
				<div class="header-right">
					<p class="top-p" id="topText">大牌品质 工厂价格</p>
					<p class="bottom-p" id="bottomText">下载app领取新用户限量专属特权</p>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="page-title" @click="prev">
				<p>售后咨询</p>
			</div>
			<div class="serviecContent">
				<span>您在商品详情页点击【客服】，即可向对应的商家客服咨询售后问题</span>
				<img src="../assets/images/shouhouzixun.png" >
			</div>
			<div class="flex-botton">
				<router-link to="/">
				  <span>查看我的订单</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				
			}
		},
		created() {
			
		},
		mounted() {
			
		},
		methods: {
			prev() {
			
				this.$router.go(-1)
			
			}
		}
	}
</script>

<style>
	.helpCenters{
		height: 11.3rem;
		background: #F2F2F2;
	}
	.myfooter{
		display: none;
	}
	.top {
		position: relative;
		z-index: 99;
		overflow: hidden;
		box-sizing: content-box;
		height: 1.0rem;
		background: url(../assets/images/xiazaiapp.jpg) no-repeat;
		background-size: 100% 100%;
	}
	
	.header-down {
		position: relative;
		height: .88rem;
		width: 100%;
		padding: .06rem 0rem;
		background-size: cover;
		background-position: top;
		display: flex;
	}
	
	.header-logo {
		width: .54rem;
		height: .54rem;
		margin: .17rem 0 .17rem .32rem;
	}
	
	.header-right {
		padding: .14rem .24rem;
		line-height: .3rem;
	}
	
	.top-p {
		font-size: .22rem;
		color: #fff;
	}
	
	.bottom-p {
		font-size: .22rem;
		color: #fff;
	}
	
	.container {
		width: 100%;
		height: 9.57rem;
		padding-bottom: .96rem;
		background: #f4f4f4;
		padding-top: .88rem;
		position: relative;
		line-height: 1;
	}
	
	.page-title {
		position: absolute;
		top: 0;
		width: 100%;
		text-align: center;
		line-height: .88rem;
		color: #333;
		font-size: .36rem;
		background-color: #fff;
		border-bottom: 0.02rem solid #f4f4f4;
		z-index: 99;
	}
	
	.page-title p {
		font-size: 0.3rem;
		color: #494949;
		background: url(../assets/images/backprev.png) no-repeat;
		background-position: 0 0.1rem;
		margin: 0 0.24rem;
	}
	
	.serviecContent {
		background: #fff;
		margin: .2rem 0rem;
	}
	
	.serviecContent span {
		display: block;
		font-size: .28rem;
		padding: .3rem .2rem .2rem;
		line-height: .4rem;
	}
	
	.serviecContent img {
		display: block;
		width: 100%;
	}
	
	.flex-botton {
		position: fixed;
		bottom: 0rem;
		width: 100%;
		text-align: center;
		height: .96rem;
		line-height: .96rem;
		background: #804097;
		font-size: .32rem;
		color: #fff;
	}
	.flex-botton span{
		color: #fff;
	}
</style>
