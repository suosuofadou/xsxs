<template>
	<div class="myfooter">
    <ul>
      <li>
        <router-link to="/">
		      <img src="../assets/img/index.png">
			      首页
		    </router-link>
      </li>

      <li>
        <router-link to="/classs">
		      <img src="../assets/img/classs.png" alt="">
			      VIP
		    </router-link>
      </li>

      <li>
        <router-link to="/shopping">
			    <img src="../assets/img/shopping.png" alt="">
			      心事
			  </router-link>
      </li>

<!--      <li>-->
<!--        <router-link to="/message">-->
<!--			    <img src="../assets/img/my.png" alt="">-->
<!--			      消息-->
<!--			  </router-link>-->
<!--      </li>-->

      <li>
        <router-link to="/my">
          <img src="../assets/img/my.png" alt="">
            我的
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
  .myfooter{
    width: 100%;
    height: 1rem;
    background: #fff;
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
  }
  a{
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #333;
	padding-top: .05rem;
	box-sizing: border-box;
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
