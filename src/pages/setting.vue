<template>
	<div class="setting">
		<div class="container">
			<div class="page-title" @click='prev'>
				<router-link to="">
					<p>设置</p>
				</router-link>
			</div>
			<div class="servicelist">
				<ul>
					<router-link to="/list">
						<li>
							<span>地址管理</span>
							<span class="addressCount">去设置</span>
							<span class="float-right">
								<img src="../assets/images/forword.png">
							</span>
						</li>
					</router-link>
				</ul>
				<ul>
					<router-link to="/provingPhone">
						<li>
							<span>支付密码</span>
							<span class="float-right">
								<img src="../assets/images/forword.png">
							</span>
						</li>
					</router-link>
				</ul>
				<ul>
					<li class="download">
						<span>下载app</span>
						<span class="float-right">
							<img src="../assets/images/forword.png">
						</span>
					</li>
					<router-link to="/aboutus">
						<li>
							<span>关于我们</span>
							<span class="float-right">
								<img src="../assets/images/forword.png">
							</span>
						</li>
					</router-link>
				</ul>
			</div>
			<div class="exitbtn">退出登录</div>
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
		methods: {
			prev(){
			
			this.$router.go(-1)
			
			}
		}
	}
</script>

<style>
	.setting {
		height: 11.5rem;
		background: #F2F2F2;
	}
     .myfooter{
     	display: none;
     }
	.container {
		width: 100%;
		height: 100%;
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
		border-bottom: 2px solid #f4f4f4;
		z-index: 99;
	}

	.page-title p {
		font-size: 0.3rem;
		color: #494949;
		background: url(../assets/images/backprev.png) no-repeat;
		background-position: 0 0.1rem;
		margin: 0 0.24rem;
	}

	.servicelist {
		margin-top: 0.16rem;
	}

	.servicelist ul {
		background: #FFF;
		padding: 0 0.22rem;
		margin-bottom: 0.16rem;
	}

	.servicelist ul li {
		line-height: 0.98rem;
		font-size: 0.28rem;
		color: #333333;
		background: #FFFFFF;
	}
    .servicelist ul li span{
		color: #333;
	}
	.float-right {
		float: right;
	}

	.float-right img {
		width: 0.35rem;
		height: 0.35rem;
		margin-top: 0.32rem;
	}

	.addressCount {
		position: absolute;
		right: 0.8rem;
	}

	.download {
		border-bottom: 0.02rem solid #f2f2f2;
	}

	.exitbtn {
		width: 6.86rem;
		height: 0.88rem;
		line-height: 0.88rem;
		font-size: 0.28rem;
		color: #7F4395;
		text-align: center;
		border-radius: 0.02rem;
		background: #FFF;
		margin: 0.4rem auto;
	}
</style>
