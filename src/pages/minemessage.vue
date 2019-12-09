<template>
	<div class="minemessage">
		<div class="page-title" @click='prev'>
			<router-link to="">
				<p>客服消息</p>
			</router-link>
		</div>
		<div class="empty_message">
            <img src="../assets/images/online-mess.png" >
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
	.minemessage {
		height: 13.3rem;
		background: #F2F2F2;
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

	.empty_message {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 3.75rem;
		height: 4.95rem;
		transform: translate3d(-50%, -50%, 0);
	}
</style>
