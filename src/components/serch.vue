<template>
	<div>
    <div class="serch">
      <input type="text" placeholder="搜索倾听者/话题">
    </div>
	</div>
</template>

<script>
	export default {
		name: 'serch',
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

<style scoped="scoped">
  .serch{
    width: 95%;
    height: 1rem;
    margin-left: 2.5%;
    padding: 0 .15rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .serch input{
    width: 100%;
    height: .7rem;
    outline: none;
    background: #f4f4f4;
    border: none;
    border-radius: .4rem;
    padding-left: .3rem;
  }
  .icon{
  	width: 0.6rem;
  	height: 0.6rem;
  	padding-left: 0.15rem;
  	/* padding-top: .2rem; */
  	margin: 0.2rem 0 0 0;
  	box-sizing: border-box;
  	/* background:url(../assets/ccsearch.png) no-repeat;
  	background-size: 70%; */
  	background-position: 50%,50%;
  	border-top-left-radius: 0.3rem;
  	border-bottom-left-radius: 0.3rem;
  	background: #f4f4f4;


  }
  .iconimg{
  	width: 80%;
  	height: 80%;
  	float: right;
  	margin-top: 0.1rem;
  	}
</style>
