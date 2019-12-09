<template>
	<div style="display: flex;">
		<div class="indexnav">
			<ul>
				<li :class="activeClass == index ? 'actives':''" v-for="(item,index) in items" :key="index" @click="getItem(index)">
					{{item.name}}
				</li>
				
			</ul>
		</div>
		<div class="hiden">
			<img src="../assets/img/icon.png" @click="showcond">
		</div>
		<!-- 隐藏导航 -->
		<div class="uli" id="nav" v-if="show">
			<div class="all">
				全部频道
				<img src="../assets/img/ulitop.png" @click="showcond">
			</div>
			<ul>
				<li :class="activeClass == index ? 'active':''" v-for="(item,index) in items" :key="index" @click="getItem(index)">
					{{item.name}}
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'indexnav',
		data(){
			return {
				show: false,
				items:[
					{name:'新品'},
					{name:'男装'},
					{name:'女装'},
					{name:'美妆'},
					{name:'个护'},
					{name:'内衣配饰'},
					{name:'餐厨'},
					{name:'电器'},
					{name:'鞋靴'},
					{name:'箱包'},
					{name:'饮食'},
					{name:'母婴'},
					{name:'眼镜'},
					{name:'运动'},
					{name:'数码'},
					{name:'家装'},
					{name:'正餐'},
					{name:'汽配'},
					{name:'保康保健'},
					{name:'图书'},
					{name:'生鲜直供'},
					{name:'宠物'},
					{name:'咖啡'},
					{name:'新品'},
					
				],
				
				activeClass:0
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			// 显示隐藏
			showcond: function() {
				this.show = !this.show;
			},
			getItem:function(index) {
				this.activeClass=index
			}
		}
	}
</script>

<style scoped="scoped">
	.uli {
		width: 100%;
		height: 10.45rem;
		background: rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 1.9rem;
		left: 0;
		z-index: 2;
	}

	.uli .all {
		height: .9rem;
		display: flex;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		padding-right: .2rem;
		padding-left: .5rem;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		background: #fff;
	}

	.uli .all img {
		width: .35rem;
		height: .25rem;
		opacity: 0.6;
	}

	.uli ul {
		background: #fff;
	}

	.uli ul li {
		margin-bottom: .2rem;
		margin-top: .2rem;
		display: inline-block;
		border: .01rem solid gray;
		border-radius: .24rem;
		height: .48rem;
		min-width: 1.2rem;
		text-align: center;
		line-height: .46rem;
		font-size: .24rem;
		margin-left: .2rem;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.uli ul .active{
		color: #7f4395;
		border-color: #7f4395;
	}


	.indexnav {
		width: 90%;
		overflow-x: scroll;
		padding: 0 .2rem;
		box-sizing: border-box;
		margin-right: .5rem;
	}

	.indexnav::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.indexnav ul {
		width: 530%;
		overflow-y: hidden;
		line-height: .8rem;
	}

	.indexnav ul li {
		width: 1rem;
		height: .8rem;
		line-height: .8rem;
		float: left;
		text-align: center;
		padding: 0 .12rem;
		list-style: none;
		font-size: .3rem;
	}

	.indexnav ul li.actives {
		color: #7f4395;
		border-bottom: .06rem solid #7f4395;
	}

	.hiden {
		margin-right: .2rem;
		display: flex;
		align-items: center;
	}

	.hiden img {
		width: .4rem;
		height: .4rem;
	}
</style>
