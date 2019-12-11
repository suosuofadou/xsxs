<template>
	<div class="myfooter">
    <ul>
      <li>
        <router-link to="/">
          <span class="iconfont icon-1"></span>
		    </router-link>
      </li>

      <li>
        <router-link to="/classs">
          <span class="iconfont icon-huangguan"></span>
		    </router-link>
      </li>
      <li>
        <router-link to="/shopping">
          <span class="iconfont icon-xintubiao-"></span>
			  </router-link>
      </li>
      <li>
        <router-link to="/message">
          <span class="iconfont icon-xiaoxi"></span>

			  </router-link>
      </li>

      <li>
        <router-link to="/my">
          <span class="iconfont icon-wode"></span>
        </router-link>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'myfooter',
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
  @import "../assets/font_qsta16in8ho/iconfont.css";
  .myfooter{
    width: 100%;
    height: 1rem;
    background-color:#cccccc;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  ul{
    display: flex;
  }
  li{
    flex: 1;
    height: 100%;
    font-size: .12rem;
    list-style: none;
    margin-top: 0.25rem;
  }
  a{
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #ffffff;
	padding-top: .05rem;
	box-sizing: border-box;
  }
  a:hover{
    color: red;
  }
  li a img{
	  width: .45rem;
	  height: .45rem;
  }
  li a p{
	  width: 100%;
	  height: 40%;
  }

</style>
