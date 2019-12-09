<template>
	<div class="orderlist">
		<div class="header-type-home">
			<router-link to="/">
			<span class="home-back">
				<img src="../assets/img/index_03.png">
			</span>
			</router-link>
			<div class="title">全部订单</div>
		</div>
		<div class="body-menu">
			<ul>
				<li v-for="(item,index) in nowTime" v-on:click="addClass(index)" :class="{ bgColors:index==current}">{{item.name}}</li>
			</ul>
		</div>
		<ul class="item-list">
			<li class="nodata">
				<div class="nodata-img"></div>
				<p class="nodata-tips">暂无订单</p>
			</li>
		</ul>
		<div class="section-cateList">
			<div class="titleline">
				<div class="titleline-box">
					<span class="mainTitle" style="color:#4A4A4A;border-color:#4A4A4A">为你推荐</span>
				</div>
			</div>
			<div class="blockline">
				<div class="blockline" style="width:100%;height:0.1rem;background:#FFFFFF;">
				</div>
			</div>
			<div class="doubleRowList">
				<div class="module-list">
					<router-link to="/">
						<img src="../assets/images/beileimao.jpg">
						<div class="shop-show">
							<div class="price">
								<span>￥</span>
								<span>149</span>
							</div>
							<div class="labels">
								<span style="background:#AB7FD1;color:#FFFFFF;border:0.01rem solid #AB7FD1;border-radius: .02rem;">精选</span>
								<span style="background:#FFFFFF;color:#FB4C81;border:0.01rem solid #FB4C81;border-radius: .02rem;">一起拼</span>
							</div>
							<div class="module-subtitle">Blunt制造商</div>
							<div class="module-title">100%羊毛 贝雷帽 百搭时尚</div>
							<div class="last-line">
								<span class="comment">91条好评</span>
							</div>
						</div>
					</router-link>
				</div>
				<div class="module-list">
					<router-link to="/">
						<img src="../assets/images/bigfengyi.jpg">
						<div class="shop-show">
							<div class="price">
								<span>￥</span>
								<span>199</span>
							</div>
							<div class="labels">
								<span style="background:#AB7FD1;color:#FFFFFF;border:0.01rem solid #AB7FD1;border-radius: .02rem;">精选</span>
								<span style="background:#FFFFFF;color:#FB4C81;border:0.01rem solid #FB4C81;border-radius: .02rem;">一起拼</span>
							</div>
							<div class="module-subtitle">Calvin Klein制造商</div>
							<div class="module-title">设计师款双面尼大口袋外套</div>
							<div class="last-line">
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'nowTime',
		data() {
			return {
				current: 0,
				nowTime: [{
						name: '全部'
					},
					{
						name: '代付款'
					},
					{
						name: '待成团'
					},
					{
						name: '生产/待收货'
					},
					{
						name: '待评价'
					}
				]
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			addClass: function(index) {
				this.current = index;
			}
		}
	}
</script>

<style>
	.orderlist {
		height: 5rem;
		background: #f2f2f2;
	}

	.header-type-home {
		height: .84rem;
		line-height: .84rem;
		border-bottom: .01rem solid #ccc;
		background: #fff;
		position: relative;
	}

	.home-back {
		cursor: pointer;
		width: .84rem;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		line-height: .84rem;
		font-size: .44rem;
		padding-right: .1rem;
		text-align: center;
	}

	.home-back img {
		width: 0.4rem;
		height: 0.35rem;
		margin: 0.27rem 0;
	}

	.title {
		font-size: .32rem;
		color: #333;
		display: block;
		line-height: .84rem;
		width: 4.8rem;
		margin: 0 auto;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}

	.body-menu {
		position: absolute;
		width: 100%;
		top: .84rem;
		z-index: 100;
		height: .8rem;
		text-align: center;
		background: #fff;
		display: flex;
		justify-content: space-between;
		padding: 0 .32rem;
		box-sizing: border-box;
	}

	.body-menu ul {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
	}

	.body-menu ul li {
		min-width: .74rem;
		max-width: 1.7rem;
		overflow: hidden;
		padding: 0 .08rem;
		height: .8rem;
		line-height: .86rem;
		/* color: #666; */
		font-size: .28rem;
	}

	.bgColors {
		color: #7f4395;
		border-bottom: .04rem solid #7f4395;
	}

	.item-list {
		width: 100%;
		height: 1.84rem;
		margin: 1rem 0 0 0;
		box-sizing: border-box;
	}

	.nodata {
		width: 100%;
		height: 1.84rem;
		padding-top: .14rem;
	}

	.module-list {
		position: relative;
		border-bottom: .02rem solid #F4F4F4;
		border-right: .02rem solid #F4F4F4;
		background: #fff;
		padding-bottom: .28rem;
	}

	.nodata .nodata-img {
		width: 1.3rem;
		height: 1rem;
		margin: 0 auto;
		background: url(../assets/images/noshuju.png) no-repeat center center;
		background-size: cover;
	}

	.nodata .nodata-tips {
		margin-top: .06rem;
		font-size: .24rem;
		color: #666;
		text-align: center;
		line-height: .33rem;
	}

	.section-cateList {
		background: #FFF;
		height: 5rem;
	}

	.titleline {
		height: 0.92rem;
	}

	.titleline-box {
		width: 100%;
		text-align: center;
		padding-top: .28rem;
		padding-bottom: .14rem;
		position: relative;
		background: #fff;
	}

	.titleline-box span:nth-child(1) {
		display: inline-block;
		height: .4rem;
		margin: 0 auto .1rem;
		font-size: .28rem;
		border-bottom: solid .02rem #4A4A4A;
		color: #666;
	}

	.doubleRowList {
		display: flex;
	}

	.module-list img {
		display: block;
		width: 3.74rem;
		height: 3.74rem;
		margin-bottom: .16rem;
	}

	.shop-show {
		width: 3.74rem !important;
		font-size: .24rem;
	}

	.price {
		color: #F7A701;
		margin-bottom: .12rem;
		margin-left: .24rem;
	}

	.price>span:nth-child(1) {
		font-size: .2rem;
		margin-top: .09rem;
	}

	.price>span:nth-child(2) {
		font-size: .32rem;
		margin-left: .04rem;
	}

	.labels {
		margin-left: .24rem;
	}

	.labels span {
		margin-right: .08rem;
		margin-bottom: .12rem;
		display: inline-block;
		padding: .03rem .04rem;
		line-height: .2rem;
	}

	.module-subtitle {
		color: #BF9E6B;
		margin-bottom: .08rem;
		margin-left: .24rem;
	}

	.module-title {
		margin-bottom: .08rem;
		color: #4A4A4A;
		margin-left: .24rem;
	}

	.last-line {
		margin-left: .24rem;
		color: #333;
	}
</style>
