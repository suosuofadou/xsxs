<template>
	<div class="myfooter">
    <ul>
        <li class="nav-footer-item" @click="open('/')">
          <i class="icon iconfont icon-1" :class="{'active': activeNav=='/'}"></i>
          <p class="item-text" :class="{'active': activeNav=='/'}">首页</p>
        </li>

      <li class="nav-footer-item" @click="open('/vip')">
        <i class="icon iconfont icon-huangguan" :class="{'active': activeNav=='/vip'}"></i>
        <p class="item-text" :class="{'active': activeNav=='/vip'}">套餐</p>
      </li>

      <li class="nav-footer-item" @click="open('/worry')">
        <i class="icon iconfont icon-xintubiao-" :class="{'active': activeNav=='/worry'}"></i>
        <p class="item-text" :class="{'active': activeNav=='/worry'}">心事</p>
      </li>

      <li class="nav-footer-item" @click="open('/news')">
        <i class="icon iconfont icon-xiaoxi" :class="{'active': activeNav=='/news'}"></i>
        <p class="item-text" :class="{'active': activeNav=='/news'}">消息</p>
      </li>

      <li class="nav-footer-item" @click="open('/my')">
        <i class="icon iconfont icon-wode" :class="{'active': activeNav=='/my'}"></i>
        <p class="item-text" :class="{'active': activeNav=='/my'}">我的</p>
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
      computed: {
          activeNav: function(){
              return this.$route.path;
          }
      },
		  mounted() {

		},
		  methods: {
          open(path){
              this.activeNav = path;
              this.$router.push({
                  path: path
              });
          }
		}
	}
</script>

<style scoped="scoped">
  @import "../assets/font_qsta16in8ho/iconfont.css";
  * {
    margin: 0 auto;
    padding: 0 auto;
  }
  .myfooter {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: white;
    height: 1rem;
    z-index: 1;
  }
  .myfooter ul {
    width: 100%;
    border-top: 1px solid #F6F4F5;
  }
  .myfooter ul li {
    text-align: center;
    float: left;
    width: 20%;
  }
  .active {
    transform: scale(1);
    color: #42B983;
  }
</style>
