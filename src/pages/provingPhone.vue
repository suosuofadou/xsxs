<template>
	<div class="provingPhone">
		<div class="main-title">
			<div class="title-fix">
				<div class="page-title" @click='prev'>
					<router-link to="">
						<p>验证手机号</p>
					</router-link>
				</div>
			</div>
		</div>
		<div class="bind-wrap">
			<ul class="message">
				<li>为确保您的账户安全，需先进行安全验证</li>
				<li>向您的手机号<span class="phoneNum">178****8917</span>发送验证码</li>
			</ul>
			<div class="phone-login">
				<div class="label-yzm">
					<input type="tel" id="yzm" maxlength="6" placeholder="请输入验证码">
					<span class="getyzm">获取验证码</span>
				</div>
				<div id="next-step" class="next-step next-step-fail">下一步</div>
			</div>
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
	.provingPhone {
		height: 13.3rem;
		background: #f2f2f2;
	}

	.myfooter {
		display: none;
	}

	.main-title {
		height: 0.84rem;
		position: relative;
	}

	.title-fix {
		margin-top: 0.84rem;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 0.84rem;
		overflow: hidden;
		background: #fff;
		box-shadow: 0.01rem 0.01rem 0.05rem rgba(7, 0, 2, 0.2);
		box-shadow: 0.01rem 0.01rem 0.05rem rgba(7, 0, 2, 0.2);
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

	.bind-wrap {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	.message {
		color: gray;
		font-size: .3rem;
		padding: .3rem .4rem;
	}

	.phone-login {
		text-align: center;
	}

	.label-yzm {
		position: relative;
	}

	.phone-login div {
		display: inline-block;
		width: 90%;
		border-bottom: 1px solid #ccc;
		text-align: left;
	}

	.phone-login .label-yzm .getyzm {
		position: absolute;
		padding: .16rem .05rem;
		text-align: center;
		top: 50%;
		color: #7f4395;
		border-radius: .1rem;
		margin-top: -.3rem;
		right: 0;
		z-index: 999;
		border: 1px solid #7f4395;
	}

	.phone-login div input {
		width: 60%;
		height: 1.0rem;
		background-color: #f5f5f5;
		font-size: 0.3rem;
		border: 0;
		outline: 0;
		border-radius: 0;
		color: #333;
		box-sizing: border-box;
	}

	.bind-wrap .next-step-fail {
		background-color: #ccc;
		box-shadow: 0 0.08rem 0.133333rem rgba(204, 204, 204, .4);
	}

	.bind-wrap .next-step {
		display: inline-block;
		width: 90%;
		height: .96rem;
		line-height: .96rem;
		font-size: .36rem;
		background-color: #7f4395;
		color: #fff;
		border-radius: .64rem;
		margin: .533333rem 0 0;
		box-shadow: 0 0.08rem 0.133333rem rgba(127, 67, 149, .4);
		outline: 0;
		margin-top: .42rem;
		text-align: center;
	}
</style>
