<template>
	<div>
		<div class="goodslist">
			<ul>
				<li>商品1</li>
				<li>商品1</li>
				<li>商品1</li>
				<li>商品1</li>
				<li>商品1</li>
				<li>商品1</li>
				<li>商品1</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {}
		},
		created() {},
		mounted() {},
		methods: {}
	}
</script>

<style scoped="scoped">
	.goodslist{
		width: 100%;
	}
	.goodslist ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		
	}
	.goodslist ul li{
		width: 50%;
		height: 4rem;
		background: #fff;
	}
</style>
