<template>
	<div class="list">
		<div class="m_pagetop">
			<router-link to="/">
			<span class="m_goback"></span>
			</router-link>
			<span class="m_title">地址管理</span>
			<div class="m_menu"></div>
		</div>
		<div class="m-addr">
			<router-link to="/">
			<span>添加新地址</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {}
		},
		components: {

		},
		created() {},
		mounted() {},
		methods: {}
	}
</script>

<style scoped="scoped">
	.list {
		height: 11.0rem;
		background: #fff;
	}
	.m_pagetop {
		width: 100%;
		min-width: 3.2rem;
		height: 0.84rem;
		background-color: #fff;
		color: #333;
		overflow: hidden;
		padding: 0;
		position: fixed !important;
		top: 0;
		left: 0;
		z-index: 20;
		box-shadow: 0.01rem 0.01rem 0.05rem rgba(7, 0, 2, 0.2);
	}

	.m_goback {
		cursor: pointer;
		width: 0.8rem;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		line-height: 0.84rem;
		font-size: 0.22rem;
		padding-right: 0.05rem;
		background: url(../assets/images/adrback.png) no-repeat center;
		background-size: 54%;
	}

	.m_title {
		font-size: 0.32rem;
		color: #333;
		display: block;
		line-height: 0.84rem;
		width: 2.4rem;
		height: 0.84rem;
		margin: 0 auto;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}

	.m_menu {
		cursor: pointer;
		width: 0.8rem;
		height: 0.8rem;
		position: absolute;
		top: 0;
		right: 0.07rem;
		background: url(../assets/images/adrcaidan.png) no-repeat center;
		background-size: 64%;
		text-align: center;
	}

	.m-addr {
		margin-top: 0.9rem;
		text-align: left;
	}

	.m-addr span {
		padding: 0.1rem 0;
		background-color: #B768A5;
		border-radius: 0.15rem;
		font-size: 0.3rem;
		color: #fff;
		border: 0;
		width: 96%;
		height: 0.6rem;
		line-height: 0.6rem;
		display: block;
		margin: 1.1rem auto;
		text-align: center;
	}
</style>
