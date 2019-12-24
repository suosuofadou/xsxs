<template>
	<div>
		<div class="search">
			<div class="icon"><img class="iconimg" src="../assets/images/fdj.png" alt=""></div>
			<input type="text" placeholder="搜索果号、昵称、备注、聊天记录" />
		</div>

	</div>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {}
		},
		created() {},
		mounted() {},
		methods: {}
	}
</script>

<style scoped="scoped">
	.search {
		width: 100%;
		height: 0.84rem;
		padding: 0 0.15rem;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.search input {
		border: none;
		background: #f4f4f4;
		width: 100%;
		height: 0.7rem;
		border-bottom-right-radius: 0.3rem;
		border-top-right-radius: 0.3rem;
		outline: none;
		/* padding-left: 0.15rem; */
		margin: 0.2rem 0 0 0;
		box-sizing: border-box;
    background-color: #fff;
	}
	.icon{
		width: 0.6rem;
		height: 0.7rem;
		padding-left: 0.15rem;
		/* padding-top: .2rem; */
		margin: 0.2rem 0 0 0;
		box-sizing: border-box;
		/* background:url(../assets/ccsearch.png) no-repeat;
		background-size: 70%; */
		background-position: 50%,50%;
		border-top-left-radius: 0.3rem;
		border-bottom-left-radius: 0.3rem;
		background-color: #ffffff;


	}
	.iconimg{
		width: 70%;
		height: 70%;
		float: right;
		margin-top: 0.18rem;
    background-color: #fff;
		}
</style>
