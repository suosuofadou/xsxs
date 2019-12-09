<template>
	<div class="residentHome">
		<div class="resident-home">
			<img src="../assets/images/zhshbg.jpg">
			<div class="resident-btn">立即加入</div>
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

		}
	}
</script>

<style>
	.residentHome {
		height: 13.34rem;
	}

	.myfooter {
		display: none;
	}

	.resident-home {
		height: 100%;
		background: #001C5F;
	}

	.resident-home img {
		width: 100%;
		vertical-align: top;
	}

	.resident-btn {
		background: #F7D694;
		border-radius: .1rem;
		width: 5.9rem;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: .3rem;
		color: #784F05;
		position: absolute;
		top: 9.27rem;
		left: .8rem;
	}
</style>
