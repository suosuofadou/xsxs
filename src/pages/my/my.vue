<template>
	<div class="myny">
    <div class="myny-top">
      <ul>
        <li>
          <router-link to="/setting">
          <img src="../../assets/images/szk.png" alt="">
        </router-link>
        </li>
      </ul>
    </div>
    <div class="myny-container">
      <div class="pto">
        <img src="../../assets/images/297762.jpg" alt="">
      </div>
      <div class="pepo">
        <h2>索索发抖</h2>
        <p>某某号：213546879</p>
        <ul>
          <li><span><img src="../../assets/img/nan.png" alt="">95后</span></li>
          <li><span>双子座</span></li>
          <li><span>山西 吕梁</span></li>
          <li><span><img src="../../assets/img/bj.png" alt="">编辑 资料</span></li>
        </ul>
      </div>
      <div class="funs">
            <ul>
              <li>
                <span>366</span>
                <p> <a href="#">访客</a></p>
              </li>
              <li>
                <span>66</span>
                <p> <a href="#">粉丝</a></p>
              </li>
              <li>
                <span>56</span>
                <p> <a href="#">关注</a></p>
              </li>
            </ul>
      </div>
    </div>
    <div class="apply">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1"><img src="../../assets/img/fb.png" alt="">我的发布</mt-tab-item>
        <mt-tab-item id="2"><img src="../../assets/img/dd.png" alt="">我的订单</mt-tab-item>
        <mt-tab-item id="3"><img src="../../assets/img/hd.png" alt="">互动消息</mt-tab-item>
      </mt-navbar>
    </div>
	</div>
</template>

<script scoped="scoped">
	import myfooter from "../../components/myfooter.vue"
	export default {
		name: '',
		data() {
			return {
				active:false
			}
		},
		components: {
			myfooter: myfooter,
		},
		created() {},
		mounted() {
			console.log($("drawback"))
			this.hellojquery()
		},
		methods: {
			hellojquery: function() {
				console.log($("drawback"))
			},
			droback:function(){
				this.active=!this.active;
			}
		}
	}
</script>

<style>
	.myny {
		width: 100%;
    height: 2.5rem;
		background:url("../../assets/images/ti.png");
	}
  .myny-top li{
    float: right;
    margin-right: .3rem;
    margin-top: .3rem;
  }
  .myny-top img{
    width: 0.6rem;
  }
  .myny-container{
  }
  .pto img{
    width: 1.7rem;
    border-radius: 100%;
    margin-top: 1.7rem;
    margin-left: 0.5rem;
  }
  .pepo h2{
    margin-top: 0.2rem;
    margin-left: 0.5rem;
  }
  .pepo p{
    font-size: 0.2rem;
    color: #9d9d9d;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
  }
  .pepo li{
    float: left;
    margin-left: 0.1rem;
    margin-top: 0.4rem;
    background-color: #cccccc;
    text-align: center;
    border-radius: 10rem;
  }
  .pepo li span{
    margin-right: .3rem;
    font-size: 0.28rem;
    font-weight: lighter;
    padding-left: 0.3rem;
    color: #000000;
  }
  .pepo li span img{
    margin-top: 0.06rem;
    width: 0.3rem;
    height: 0.3rem;
  }
  .funs li{
    padding-top: 0.4rem;
    float: left;
    margin-left: .5rem;
  }
  .funs li p a{
    color: #696969;
  }
  .apply{
    margin-top: 2.2rem;
    border-top: 0.04rem solid #cccccc;
  }
  .apply img{
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.05rem;
  }
</style>
