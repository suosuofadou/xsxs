<template>
	<div class="myny">
		<!-- 头部 -->
		<div class="personal">
			<div class="personal-pic"></div>
			<div class="person-info">
				<div class="person-name">
					<p>178****8917</p>&nbsp;&nbsp;&nbsp;
          <img src="../assets/images/erji1.png" alt="">
				</div>
				<div class="person-level">
					<img src="../assets/images/huiyaun.png" />
				</div>
			</div>
			<ul>
				<li>
					<router-link to="/serviceList">
						<img src="../assets/images/ptfw.png" />
						<p>会员中心</p>
					</router-link>
				</li>
				<li>
					<router-link to="/setting">
						<img src="../assets/images/shezhi.png" />
						<p>设置</p>
					</router-link>
				</li>
			</ul>
		</div>
      <div class="funs">
        <div class="funs_num">
          <ul>
          <li>
            <span>366</span>
           <p> <a href="#">关注</a></p>
          </li>
            <li>
              <span>66</span>
              <p> <a href="#">收藏</a></p>
            </li>
            <li>
              <span>56</span>
              <p> <a href="#">访客</a></p>
            </li>
            <li>
              <span>86</span>
              <p> <a href="#">粉丝</a></p>
            </li>
        </ul>
        </div>

      </div>
		<!-- 订单 -->
		<div class="order-panel">
			<div class="order-all">
				<router-link to="/orderlist">
					<img src="../assets/images/lvsefenkaicankaoxianban-.png" />
					<p>我的订单</p>
				</router-link>
			</div>
			<ul>
				<li>
					<router-link to="">
						<img src="../assets/images/iconzhengli-.png">
						<p>我的钱包</p>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<img src="../assets/images/chongzhi.png">
						<p>钱包充值</p>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<img src="../assets/images/fabu-.png">
						<p>我的发布</p>
					</router-link>
				</li>
				<li class="drawback" @click="droback()">
					<router-link to="">
						<img src="../assets/images/huodong.png">
						<p>超值活动</p>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- nav -->
		<div class="entry-wrapper">
      <a href="#">
        <img src="../assets/images/hearts.png" alt="">
        <span>心情日记</span>
      </a>
		</div>
    <div class="entry-wrapper">
      <a href="#"><img src="../assets/images/ren.png" alt=""><span>成为倾听者</span></a>
    </div>
    <div class="entry-wrapper">
      <a href="#"><img src="../assets/images/wenti.png" alt=""><span>常见问题</span></a>
    </div>
    <div class="entry-wrapper">
      <a href="#"><img src="../assets/images/dianhua.png" alt=""><span>客服电话</span></a>
    </div>
    <div class="entry-wrapper">
      <a href="#"><img src="../assets/images/yijianfankui.png" alt=""><span>意见反馈</span></a>
    </div>
    <div class="entry-wrapper">
      <a href="#"><img src="../assets/images/tuichu.png" alt=""><span>退出账号</span></a>
    </div>
		<!-- 为你推荐 -->
		<div class="recommendPosition">
			<div class="recommend-title">
				<!--<p class="title">推荐倾听</p>-->
				<!--<div class="line"></div>-->
			</div>
		</div>
		<!-- 商品详情 -->
		<!--<div class="section-cateList-wrap">
			<ul>
				<li>
					<router-link to="/">
						<img src="../assets/images/cafeiji.jpg">
						<div class="price">
							<span>￥</span>
							<span>499</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">飞利浦制造商</div>
						<div class="module-title">豆粉茶三用全自动咖啡机</div>
						<div class="last-line">
							<span class="comment">295条好评</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../assets/images/zhqiji.jpg">
						<div class="price">
							<span>￥</span>
							<span>399</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">飞利浦制造商</div>
						<div class="module-title">压力咖啡机胶囊机蒸汽奶泡</div>
						<div class="last-line">
							<span class="comment">1204条好评</span>
						</div>
					</router-link>
				</li>
			</ul>
			<ul>
				<li>
					<router-link to="/">
						<img src="../assets/images/kouhong.jpg">
						<div class="price">
							<span>￥</span>
							<span>78</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">LANCOME同原料制造商</div>
						<div class="module-title">魅惑倾城思慕口红</div>
						<div class="last-line">
							<span class="comment">208条好评</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../assets/images/kuaizi.jpg">
						<div class="price">
							<span>￥</span>
							<span>89</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">WMF制造商</div>
						<div class="module-title">304不锈钢筷子10双装</div>
						<div class="last-line">
							<span class="comment">2857条好评</span>
						</div>
					</router-link>
				</li>
			</ul>
			<ul>
				<li>
					<router-link to="/">
						<img src="../assets/images/jinghuqye.jpg">
						<div class="price">
							<span>￥</span>
							<span>139</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">POLA同原料制造商</div>
						<div class="module-title">热感抗皱精华液</div>
						<div class="last-line">
							<span class="comment">3937条好评</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../assets/images/shoes.jpg">
						<div class="price">
							<span>￥</span>
							<span>369</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">Calvin Klein制造商</div>
						<div class="module-title">男士弹力系带 皱感小白鞋</div>
						<div class="last-line">
							<span class="comment">369条好评</span>
						</div>
					</router-link>
				</li>
			</ul>
			<ul>
				<li>
					<router-link to="/">
						<img src="../assets/images/eyesjing.jpg">
						<div class="price">
							<span>￥</span>
							<span>269</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">依视路制造商</div>
						<div class="module-title">经典.飞行员-B·可配度数</div>
						<div class="last-line">
							<span class="comment">751条好评</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../assets/images/kuzi.jpg">
						<div class="price">
							<span>￥</span>
							<span>259</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">Balenciaga制造商</div>
						<div class="module-title">绒里人字纹九分直筒裤</div>
						<div class="last-line">
						</div>
					</router-link>
				</li>
			</ul>
			<ul>
				<li>
					<router-link to="/">
						<img src="../assets/images/foodmuer.jpg">
						<div class="price">
							<span>￥</span>
							<span>138</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">海螺国际大酒店正餐制造商</div>
						<div class="module-title">青春常驻组合菜 【4盒装】</div>
						<div class="last-line">
							<span class="comment">76条好评</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../assets/images/miupai.jpg">
						<div class="price">
							<span>￥</span>
							<span>133</span>
						</div>
						<div class="labels">
							<span class="togther">一起拼</span>
						</div>
						<div class="module-subtitle">海螺国际大酒店正餐制造商</div>
						<div class="module-title">黑椒牛排【3盒装】</div>
						<div class="last-line">
							<span class="comment">1338条好评</span>
						</div>
					</router-link>
				</li>
			</ul>
		</div>-->
		<div class="drowback" v-if="active" >
			<div class="by-lightbox-box">
				<div class="by-lightbox-content">
					<div class="by-lightbox-description">
						<p class="msg">请前往必要APP退款/售后</p>
					</div>
				</div>
				<div class="by-lightbox-button" v-if="active" @click="droback()">
					<span class="btn confirm">知道了</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped="scoped">
	import myfooter from "../components/myfooter.vue"
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
		background: #F2F2F2;
	}

	.personal {
		display: flex;
		height: 1.52rem;
		background: #7d39a0;
		padding: 0.32rem;
		box-sizing: border-box;
	}

	.personal-pic {
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		border: 0.05rem solid #fff;
		background: url(../assets/images/297762.jpg) no-repeat;
		background-size: 100%;
	}

	.person-info {
		width: 3.62rem;
		height: 0.76rem;
		padding-top: 0.04rem;
		margin-left: 0.12rem;
		background: #7d39a0;
	}

	.person-name {
		display: flex;
		width: 100%;
		height: 0.42rem;
		background: #7d39a0;
	}

	.person-name p {
		max-width: 1.85rem;
		height: 0.42rem;
		line-height: 0.42rem;
		font-size: 0.3rem;
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.person-message {
		width: 0.42rem;
		height: 0.42rem;
		margin-left: 0.12rem;
		position: relative;
		background: url(../assets/images/kefu.png) no-repeat;
		background-size: 100% 100%;
	}

	.person-name img {
		width: 0.42rem;
		height: 0.42rem;
	}

	.personal ul {
		display: flex;
		width: 2.24rem;
		height: 0.78rem;
	}

	.personal ul a {
		color: #fff;
	}

	.personal ul li {
		/* width: 0.88rem; */
		height: 0.78rem;
		margin-left: 0.24rem;
		text-align: center;
	}

	.personal ul li img {
		width: 0.4rem;
		height: 0.4rem;
	}

	.personal ul li p {
		/* width: 0.96rem; */
		height: 0.28rem;
		font-size: 0.12rem;
		text-align: center;
		margin-top: 0.1rem;
	}
  .funs{
    width: 100%;
    height: 1.2rem;
    background-color:#7D39A0;
    color: #cccccc;
    font-size: 6px;
  }
  .funs_num li{
    padding-top: 0.3rem;
    float: left;
    margin-left: 1.1rem;
  }
  .funs_num li p a{
    color: #ffffff;
  }
	.person-level {
		width: 0.32rem;
		height: 0.28rem;
		padding-top: 0.14rem;
		background: #7d39a0;
	}

	.order-panel {
		width: 100%;
		height: 1.72rem;
		background: #FFF;
		padding: .2rem .24rem;
		display: flex;
		box-sizing: border-box;
		margin-bottom: .16rem;
	}

	.order-all {
		width: 1.32rem;
		height: 1.19rem;
		text-align: center;
		padding-top: .21rem;
		background: #fff;
	}

	.order-all a {
		color: #fff;
	}

	.order-all img {
		width: .44rem;
		height: .44rem;
	}

	.order-all p {
		height: 0.3rem;
		line-height: 0.44rem;
		font-size: 0.24rem;
		color: #666;
		margin-top: 0.08rem;
	}
	.order-line {
		width: .18rem;
		padding-top: .13rem;
		background: #fff;
	}

	.order-panel ul {
		display: flex;
		width: 5.52rem;
		height: 1.32rem;
	}

	.order-panel ul li {
		width: 1.32rem;
		height: 1.32rem;
		text-align: center;
		padding-top: .21rem;
		margin: 0 .03rem;
		position: relative;
	}

	.order-panel ul li img {
		width: .44rem;
		height: .44rem;
	}

	.order-panel ul li p {
		width: 100%;
		height: .33rem;
		line-height: .33rem;
		font-size: .24rem;
		color: #666;
		margin-top: .14rem;
	}

	.entry-wrapper {
		width: 100%;
    height: 1rem;
		margin-top: .16rem;
		overflow: hidden;
		background: #FFFFFF;
	}
  .entry-wrapper img{
    line-height: 1rem;
		width: .54rem;
		height: .54rem;
    vertical-align: middle;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
	}
  .entry-wrapper span{
    font-size: 16px;
    font-weight: bold;
    line-height:1rem;
  }
	.red-point {
		position: absolute;
		right: -0.06rem;
		top: -0.06rem;
		width: 0.12rem;
		height: 0.12rem;
		background: #F84242;
		border-radius: 50%;
	}

	.recommendPosition {
		display: block;
		width: 100%;
		margin-top: 0.16rem;
		background: #7D39A0;
	}

	.recommend-title {
		width: 100%;
		height: 0.85rem;
		text-align: center;
		background: #fff;
	}

	.recommend-title p {
		display: inline-block;
		width: 1.12rem;
		height: 0.4rem;
		line-height: 0.8rem;
		font-size: 0.28rem;
		color: #4A4A4A;
		text-align: center;
	}

	.recommend-title .line {
		width: 1.12rem;
		text-align: center;
		height: 0;
		border-bottom: .02rem solid #4A4A4A;
		margin: 0 auto;
	}

	.section-cateList-wrap {
		width: 100%;
		height: 6.5rem;
	}

	.section-cateList-wrap ul {
		display: flex;
		width: 100%;
		height: 100%;
		margin-bottom: 1.0rem;
	}

	.section-cateList-wrap ul li:first-child {
		border-right: 0.01rem solid #f4f4f4;
	}

	.section-cateList-wrap ul li {
		border-bottom: 0.01rem solid #f4f4f4;
		width: 50%;
		height: 100%;
		background: #fff;
	}

	.section-cateList-wrap ul li img {
		display: block;
		width: 3.74rem;
		height: 3.74rem;
		margin-bottom: .16rem;
	}

	.section-cateList-wrap ul li div {
		margin-left: 0.24rem;
	}

	.price {
		color: #F7A701;
		margin-bottom: 0.12rem;
	}

	.price span:first-child {
		font-size: .2rem;
		margin-top: .09rem;
	}

	.price span:nth-of-type(2) {
		font-size: .32rem;
		margin-left: .04rem;
	}

	.labels {
		display: block;
		font-size: .18rem;
	}

	.togther {
		background: #FFFFFF;
		color: #FB4C81;
		border: 0.01rem solid #FB4C81;
		border-radius: .02rem;
	}

	.module-subtitle {
		color: #BF9E6B;
		margin-bottom: .08rem;
		font-size: .24rem;
	}

	.module-title {
		margin-bottom: .08rem;
		color: #4A4A4A;
		font-size: 0.24rem;
	}

	.last-line {
		color: #BBB;
		font-size: .2rem;
		padding-top: .06rem;
	}

	.drowback {
		position: fixed;
		top: 0;
		left: 0;
		fight: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(51, 51, 51, 0.4);
	}

	.by-lightbox-box {
		height: 1.89rem;
		position: fixed;
		width: 70%;
		background: #fff;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: .1rem;
		z-index: 1000;
	}

	.by-lightbox-content {
		height: 0.6rem;
		padding: 0.2rem;
	}

	.by-lightbox-description {
		color: #797979;
		font-size: .24rem;
	}

	.by-lightbox-description p.msg {
		text-align: center;
		font-size: .24rem;
		color: #000;
	}

	.by-lightbox-description p {
		line-height: .44rem;
		padding: .08rem 0;
	}

	.by-lightbox-button {
		height: 0.88rem;
		text-align: center;
		border-top: solid 1px #b3b3b3;
		overflow: hidden;
	}

	.by-lightbox-button .confirm {
		width: 100%;
		overflow: hidden;
	}

	.by-lightbox-button .btn {
		display: block;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
		font-size: .3rem;
		color: #7f4395;
	}
</style>
