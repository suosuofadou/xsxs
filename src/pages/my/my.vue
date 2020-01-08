<template>
	<div class="myny">
    <div>
      <myfooter></myfooter>
    </div>
<!--    设置-->
    <div class="myny-top">
          <router-link to="#">
          <img src="../../assets/images/xinxishezhi.png" alt="">
        </router-link>
    </div>
    <div class="myny-container">
<!--      头像-->
      <div class="pto">
        <img src="../../assets/images/297762.jpg" alt="">
        <div class="user_name" v-for="(item, index) in arrlist" :key="index">
          <span>{{item.uname}}</span>
          <p>星号：{{item.uid}}</p>
        </div>
          <span class="user_juese">切换角色&gt;</span>
<!--        会员中心-->
        <div class="huiyuan">
          <div class="huiyuan_fist"><span><img src="../../assets/images/huiyuan.png" alt="">会员中心&gt;</span></div>
          <div class="huiyuan_scend"><span><img src="../../assets/images/hongbao.png" alt="">红包</span></div>
        </div>

      </div>
      <div class="funs">
            <ul>
              <li>
                <span>366</span>
                <p> <a href="#">关注</a></p>
              </li>
              <li>
                <span>66</span>
                <p> <a href="#">粉丝</a></p>
              </li>
              <li>
                <span>56</span>
                <p> <a href="#">访客</a></p>
              </li>
              <li>
                <span>56</span>
                <p> <a href="#">收藏</a></p>
              </li>
            </ul>
      </div>
    </div>
<!--    分割线-->
    <div class="apply"></div>
<!--    导航模块-->
    <div class="my_nav">
      <ul>
        <router-link to="/money"><li><img src="../../assets/images/qianbao.png" alt=""><p>钱包</p></li></router-link>
        <router-link to="/recharge"><li><img src="../../assets/images/chongzhi.png" alt=""><p>充值</p></li></router-link>
        <li><img src="../../assets/images/dingdan.png" alt=""><p>订单</p></li>
        <li><img src="../../assets/images/youhuiquan.png" alt=""><p>优惠券</p></li>
      </ul>
        <div class="fenge"></div>
      <ul class="nav_bom">
        <li><img src="../../assets/images/yaoqing.png" alt=""><p>邀请有奖</p></li>
        <li><img src="../../assets/images/fabu.png" alt=""><p>我的发布</p></li>
        <li><img src="../../assets/images/hudong.png" alt=""><p>互动消息</p></li>
        <li><img src="../../assets/images/huodong.png" alt=""><p>活动</p></li>
      </ul>
    </div>
<!--    分割-->
    <div class="fenge_2"></div>
<!--    功能栏-->
    <div class="entity">
      <img src="../../assets/images/songshu.png" alt="">
      <span>心星庄园</span>
      <span class="entity_right">去喂养
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
    <div class="fenge_3"></div>
    <div class="entity">
      <img src="../../assets/images/dianpu.png" alt="">
      <span>心星小店</span>
      <span class="entity_right">分享赚钱
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
    <div class="fenge_3"></div>
    <div class="entity">
    <img src="../../assets/images/riji.png" alt="">
    <span>心情日记</span>
    <span class="entity_right">
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
  </div>
    <div class="fenge_3"></div>
    <div class="entity">
      <img src="../../assets/images/qingsu.png" alt="">
      <span>申请倾诉者</span>
      <span class="entity_right">
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
    <div class="fenge_4"></div>
    <router-link to="/setting">
    <div class="entity">
      <img src="../../assets/images/shezhi.png" alt="">
      <span>设置</span>
      <span class="entity_right">
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
    </router-link>
    <div class="fenge_3"></div>
    <div class="entity">
      <img src="../../assets/images/guanyv.png" alt="">
      <span>关于心星诉说</span>
      <span class="entity_right">
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
    <div class="fenge_4"></div>
    <div class="entity">
      <img src="../../assets/images/wenti.png" alt="">
      <span>常见问题</span>
      <span class="entity_right">
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
    <div class="fenge_4"></div>
    <div class="entity">
      <img src="../../assets/images/dianhua.png" alt="">
      <span>客服电话</span>
      <span class="entity_right" style="color: #9E9E9E">400-633-6659
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
    <div class="fenge_4"></div>
    <div class="entity">
      <img src="../../assets/images/songshu.png" alt="">
      <span>意见反馈</span>
      <span class="entity_right">
        <img src="../../assets/images/youjiantou.png" alt="">
      </span>
    </div>
	</div>
</template>

<script>
	import myfooter from "../../components/myfooter.vue";
  import Myheader from "../../components/myheader";
  import axios from 'axios';
  axios.defaults.baseUrl="http://192.168.0.108:8080";
	export default {
		name: '',
		data() {
			return {
				active:false,
        arrlist:[]
			}
		},
		components: {
        Myheader,
			myfooter: myfooter,
		},

		mounted() {
			this.hellojquery()
		},
		methods: {
    hellojquery: function() {
          axios.post("http://192.168.0.108:8080/test/random").then(res => {
              this.arrlist.push(res.data);
          })
			},
			droback:function(){
				this.active=!this.active;
			},

		}
	}
</script>

<style scoped>
	.myny {
		width: 100%;
    height: 2.5rem;
    background-color:#3BE0CF;;
	}
  .myny-top img{
    float: right;
    margin-right: .3rem;
    margin-top: .3rem;
    width: 0.6rem;
  }
  .pto{
    position: relative;
  }
  .pto img{
    width: 1.7rem;
    border-radius: 100%;
    margin-top: 1.4rem;
    margin-left: 0.5rem;
  }
  .user_juese{
    width: 1.7rem;
    height: .4rem;
    position: absolute;
    top: 1.6rem;
    right:0;
    font-size: 15px;
    text-align: center;
    line-height: .4rem;
    border: 0.02rem solid #ffffff;
    color: #ffffff;
    border-right: none;
    border-radius: 2rem 0 0 2rem;
  }
  .user_name{
    position: absolute;
    top: 1.4rem;
    left: 2.5rem;
  }
  .user_name span{
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
  }
  .user_name p{
    color: #c8f0ed;
    font-size: 0.25rem;
    margin-top: 0.03rem;
  }
  .huiyuan{
    margin-top: -0.5rem;
    text-align: center;
    font-size: 0.25rem;
    font-weight: bold;
  }
  .huiyuan img{
    width: 0.3rem;
    height: 0.3rem;
    margin: 0.05rem 0 0 0;
  }
  .huiyuan_fist{
    display: inline-block;
    width: 1.7rem;
    height: 0.4rem;
    margin-left:0;
    border: 2px solid #cccccc;
    border-radius: 0.15rem;
    line-height: .4rem;
  }
  .huiyuan_scend{
    display: inline-block;
    width: 1rem;
    height: .4rem;
    /*margin-left: 4.5rem;*/
    border: 2px solid #cccccc;
    border-radius: 0.15rem;
    color: red;
    line-height: .4rem;
  }
  .funs li{
    margin-top: 0.5rem;
    float: left;
    margin-left: .75rem;
    padding-right: 0.4rem;
  }
  .funs li span{
    color: #000000;
    font-weight: bold;
  }
  .funs li p a{
    color: #000000;
    font-weight: bold;
  }
  .apply{
    margin-top: 1.5rem;
    border-top: 0.25rem solid #F2F2F2;
  }
  .fenge{
    margin-top: 1.3rem;
    border-top: 0.05rem solid #F2F2F2;
  }
  .my_nav ul{
    padding-top: 0.5rem;
  }
  .my_nav ul:nth-child(1) li{
    float: left;
    padding-right: 0.5rem;
    margin-left: 0.6rem;
    color: black;
  }
  .my_nav ul:nth-child(3) li{
    float: left;
    padding-right: 0.2rem;
    margin-left: 0.6rem;
    color: black;
  }
  .my_nav li img{
    width: 0.6rem;
    height: 0.6rem;
  }
  .nav_bom li:nth-child(-n+3) p{
    margin-left: -0.2rem;
  }
  .fenge_2{
    margin-top: 1.2rem;
    border-top: 0.25rem solid #F2F2F2;
  }
  .entity{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: black;
  }
  .entity img{
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    padding-right: 0.1rem;
  }
  .entity_right{
    float: right;
    font-size: 0.2rem;
    color: #F17500;
  }
  .entity_right img{
    width: 0.4rem;
    height: 0.4rem;
    margin-top: 0.3rem;
    margin-right: 0.2rem;

  }
  .fenge_3{
    border-top: 0.2rem solid #F2F2F2;
  }
  .fenge_4{
    border-top: 0.05rem solid #F2F2F2;
  }
</style>
