<template>
	<div class="newproductList">
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
		<div class="title-fix">
			<router-link to="/">
				<span class="m_goback"></span>
			</router-link>
			<p class="m_title">每日新品</p>
		</div>
		<ul class="commend-list">
			<li class="show-product-head">
				<div class="lines"></div>
				2019-12-05
				<div class="lines"></div>
			</li>
			<li class="new-product-list">
				<router-link to="/">
					<div class="newList">
						<div class="product-pic">
							<img src="../assets/images/SXmaozi.jpg" alt="">
						</div>
						<div class="item-des">
							<p class="item-price"><i>￥</i>
								<span class="item-price-int">159</span>
							</p>
							<p class="item-labels">
								<span class="item-labels-span">一起拼</span>
							</p>
							<p class="item-bck">Armani制造商</p>
							<p class="item-title">优雅气质棒球帽</p>
							<p class="item-salepoint">刺绣设计 大小可调 潮流出游 男女通用</p>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
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

		}
	}
</script>

<style>
	.newproductList {
		height: 15rem;
		background: #F2F2F2;
	}

	.top {
		position: relative;
		z-index: 99;
		overflow: hidden;
		box-sizing: content-box;
		width: 100%;
		height: 1.0rem;
		background: url(../assets/images/xiazaiapp.jpg) no-repeat;
		background-size: 100% 100%;
	}

	.header-down {
		width: 100%;
		height: .88rem;
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

	.title-fix {
		width: 7.5rem;
		height: 0.95rem;
		overflow: hidden;
		background: #fff;
		border-bottom: .01rem solid #ccc;
	}

	.title-fix p {
		line-height: 0.95rem;
		width: 4.8rem;
		margin: 0 auto;
		font-size: .32rem;
		text-align: center;
		color: #333;
	}

	.title-fix span {
		position: absolute;
		top: 1.2rem;
		left: .2rem;
		z-index: 2;
		display: block;
		width: .45rem;
		height: .45rem;
		font-size: .45rem;
		background: url(../assets/images/adrback.png) no-repeat;
		background-size: 100%;
	}

	.commend-list {
		width: 100%;
	}

	.show-product-head {
		height: 1.0rem;
		text-align: center;
		line-height: 1.0rem;
		display: flex;
		justify-content: center;
		font-size: 0.12rem;
		color: #808080;
	}

	.lines {
		width: 0.9rem;
		height: 0.01rem;
		background: gray;
		margin: 0.5rem 0.2rem;
	}

	.new-product-list {
		width: 100%;
	}

	.newList {
		width: 100%;
		height: 6.59rem;
		margin-top: .2rem;
		background: #FFFFFF;
	}

	.product-pic {
		width: 100%;
		height: 3.84rem;
		position: relative;
	}

	.product-pic img {
		width: 100%;
		height: 100%;
	}

	.item-des {
		height: 2.71rem;
		position: relative;
		padding: 0.16rem 0.16rem .24rem 0.16rem;
	}

	.item-price {
		height: 0.42rem;
		color: #F7A701;
		margin-bottom: .12rem;
	}

	.item-price i {
		font-size: .2rem;
		float: none;
		width: auto;
		height: auto;
		margin-top: 0;
		line-height: 1;
	}

	.item-price-int {
		font-size: 0.32rem;
	}

	.item-labels {
		height: 0.6rem;
		line-height: .4rem;
		overflow: hidden;
	}

	.item-labels-span {
		color: #FB4C81;
		font-size: 0.12rem;
		margin: 0 0 0.12rem;
		padding: 0.03rem 0.04rem;
		box-sizing: border-box;
		border: 0.01rem solid #FB4C81;
	}

	.item-bck {
		line-height: .33rem;
		color: #BF9E6B;
		font-size: .24rem;
		margin-bottom: .08rem;
	}

	.item-title {
		font-size: .32rem;
		line-height: .45rem;
		color: #4A4A4A;
	}

	.item-salepoint {
		font-size: .24rem;
		color: #999;
		margin-top: .08rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
