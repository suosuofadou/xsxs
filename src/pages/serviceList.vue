<template>
	<div class="serviceList">
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
			<div class="page-title">
				<router-link to="/">
					<p>平台服务</p>
				</router-link>
			</div>
			<div class="serviceli">
				<ul>
					<router-link to="/helpCenter">
					<li>
						<span>售前咨询</span>
						<span class="float-right">
							<img src="../assets/images/forword.png">
						</span>
					</li>
					</router-link>
					<router-link to="/helpCenters">
					<li><span>售后咨询</span>
						<span class="float-right">
							<img src="../assets/images/forword.png">
						</span>
					</li>
					</router-link>
					<router-link to="/客服">
					<li>
						<span>意见建议，直连老毕</span>
						<span class="float-right">
							<img src="../assets/images/forword.png">
						</span>
					</li>
					</router-link>
					<router-link to="/客服">
					<li><span>纠纷与投诉</span>
						<span class="float-right">
							<img src="../assets/images/forword.png">
						</span>
					</li>
					</router-link>
					<router-link to="/residentHome">
					<li>
						<span>商家入驻</span>
						<img class="attract-invest" src="../assets/images/zhaoshang.jpg">
						<span class="float-right">
							<img src="../assets/images/forword.png">
						</span>
					</li>
					</router-link>
				</ul>
			</div>
			<div class="section-cateList">
				<div class="titleline">
					<div class="titleline-box">
						<div class="mainTitle"><span>为你推荐</span></div>
					</div>
				</div>
			</div>
			<div class="blockline"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {}
		},
		components: {},
		created() {},
		mounted() {},
		methods: {}
	}
</script>

<style scoped="scoped">
	.serviceList {
		background: #F2F2F2;
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
		height: 10.5rem;
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

	.serviceli {
		height: 4.98rem;
		padding: 0rem .22rem;
		margin: .16rem 0;
		background: #FFFFFF;
	}
    .serviceli ul li span{
		color: #333333;
	}
	.serviceli ul li:first-child {
		border: none;
	}

	.serviceli ul li {
		display: flex;
		justify-content: space-between;
		-webkit-box-pack: justify;
		height: .98rem;
		line-height: .98rem;
		font-size: .28rem;
		position: relative;
		border-top: #f4f4f4 solid 0.02rem;
	}

	.attract-invest {
		position: absolute;
		top: .12rem;
		left: 1.1rem;
		width: .56rem;
		height: .28rem;
	}

	.float-right {
		float: right;
	}

	.float-right img {
		width: 0.35rem;
		height: 0.35rem;
		margin-top: 0.32rem;
	}

	.section-cateList {
		background: #fff;
	}

	.titleline {
		height: 0.94rem;
	}

	.titleline-box {
		width: 100%;
		height: 0.94rem;
		text-align: center;
		padding: .28rem 0 0.14rem 0;
		box-sizing: border-box;
		position: relative;
	}

	.mainTitle {
		color: #4A4A4A;
		border-color: #4A4A4A;
	}
	.titleline-box span:nth-child(1){
		    display: inline-block;
		    height: 0.4rem;
		    margin: 0 auto .1rem auto;
		    font-size: .28rem;
		    border-bottom: 0.02rem solid #4A4A4A;
	}
	.blockline{
		background: #42B983;
	}
</style>
