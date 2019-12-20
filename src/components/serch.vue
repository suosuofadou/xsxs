<template>
	<div>
    <div class="serch">
      <input type="text" placeholder="搜索倾听者/话题">
      <label for="ap">
        <a href="http://www.baidu.com"><img style="height: .5rem ; width: .5rem" src="../assets/sx1.svg" alt=""></a>
        <span id="ap">筛选</span>
      </label>
      <label for="ab">
        <a href="http://www.baidu.com"><img style="height: .5rem ; width: .5rem" src="../assets/hb1.svg" alt=""></a>
        <span id="ab">红包</span>
      </label>
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
  * {
    margin: 0 auto;
    padding: 0 auto;
  }
  input::-webkit-input-placeholder {
    color: #8AEBD7;
  }
  .serch{
    width: 100%;
    height: 1rem;
    padding: 0 .15rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8AEBD7;
  }

  .serch input{
    width: 100%;
    height: .7rem;
    outline: none;
    background: #f4f4f4;
    border: none;
    border-radius: .4rem;
    padding-left: .3rem;
    margin-right: .15rem;
  }

  span {
    /*display: inline-block;*/
    margin-left: .25rem;
    float: left;
    font-size: 10px;
    text-align: center;
  }
  a {
    margin-left: .2rem;
  }

</style>
