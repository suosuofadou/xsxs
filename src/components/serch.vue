<template>
	<div>
    <div class="serch">
      <input type="text" placeholder="搜索倾听者/话题" onclick="">

      <label for="ap">
        <a href="http://www.baidu.com"><img style="height: .5rem ; width: .5rem" src="../assets/sx.svg" alt=""></a>
        <span id="ap">筛选</span>
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
  .serch{
    width: 100%;
    height: 1rem;
    padding: 0 .15rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7D39A0;
  }
  .serch input{
    width: 100%;
    height: .7rem;
    outline: none;
    background: #f4f4f4;
    border: none;
    border-radius: .4rem;
    padding-left: .3rem;
    margin-right: .6rem;
  }
  span {
    display: inline-block;
  }
</style>
