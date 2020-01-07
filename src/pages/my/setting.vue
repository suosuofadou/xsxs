<template>
  <div class="setting">
    <div class="setting_head">
      <myheader></myheader>
    </div>

    <div class="setting_body">
      <!--    消息提醒-->
      <div class="news">
        新消息提醒
      </div>
      <div class="shengyin">
        <span>声音</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="shengyin">
        <span>振动</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <!--账号-->
      <div class="news">
        账号相关
      </div>
      <div class="zhanghao">
        <router-link to="/text"><span>账号设置</span>
          <img src="../../assets/images/youjiantou.png" alt=""></router-link>
      </div>
      <div class="beifen">
      <span style="margin-left: 0.2rem;
    margin-right: 4.6rem;">备份聊天记录</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>
      <div class="zhanghao">
      <span style="margin-left: 0.2rem;
    margin-right: 4.6rem;">还原聊天记录</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>
      <div class="zhanghao">
      <span style="margin-left: 0.2rem;
    margin-right: 4rem;">清理过期聊天记录</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>
      <div class="zhanghao">
        <span style="margin-right: 4.6rem;">设置手势密码</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>
      <div class="zhanghao">
        <span>隐私功能</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>

      <!--    辅助功能-->
      <div class="news">
        辅助功能
      </div>
      <div class="shengyin">
        <span style="margin-right: 2.8rem;">2G/3G/4G下无图省流量</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="shengyin">
        <span style="margin-right: 4.1rem;">屏蔽距离感应</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="zhanghao">
        <span>聊天背景</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>
      <div class="zhanghao">
        <span>清理内存</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>

      <div class="shengyin">
        <span style="margin-right: 4.7rem;">夜间模式</span>
        <mt-switch v-model="value"></mt-switch>
      </div>

      <div class="zhanghao">
        <span style="margin-right: 4.6rem;">上传错误日志</span>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div>
      <!--    分割-->
      <div class="setting_fenge"></div>
      <!--    找回账号-->
      <router-link to="/find">
        <div class="find">
          已有账号，点此找回
        </div>
      </router-link>
      <!--    退出-->
      <div class="setting_fenge"></div>
      <!--    找回账号-->
        <div class="find" style="color:#C23E53" @click="pwd">
          退出当前账号
        </div>
      <div class="setting_fenge"></div>
    </div>
    <action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      description="此账号已绑定手机与设置密码？"
      @select="select"
    />
  </div>

</template>

<script>
    import { ActionSheet } from 'vant';
    import myheader from "../../components/myheader";
    import Toast from "vant/es/toast";

    export default {
        name: "setting",
        components: {
            myheader,
            ActionSheet,
        },
        data() {
            return {
                value:"",
                show: false,
                actions: [
                    { name: '去设置',color:'red',index:0},
                    { name: '已绑定手机和密码',index:1 },
                ]
            };
        },

        methods: {
            onSelect(item) {
                this.show = true;
                Toast(item.name);
            },
            pwd(){
                this.show = true;
            },
            select (item) {
                switch (item.index) {
                    case 0:
                        this.$router.push('/text');
                        break;
                    case 1:
                        alert(123456);
                        break;

                }
            },
        }
    }
</script>

<style scoped>

  .news {
    width: 100%;
    height: 1rem;
    background-color: #f7f7f7;
    font-size: 0.35rem;
    line-height: 1rem;
    padding-left: 0.2rem;
  }

  .shengyin {
    width: 100%;
    height: 1rem;
    font-size: 0.3rem;
    line-height: 1rem;
    display: flex;
  }

  .shengyin span {
    margin-left: 0.2rem;
    margin-right: 5.3rem;
  }

  .zhanghao {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
  }

  .zhanghao span {
    margin-left: 0.2rem;
    margin-right: 5.2rem;
    color: black;
  }

  .zhanghao img {
    margin-top: 0.2rem;
    width: 0.7rem;
    height: 0.6rem;
  }

  .beifen {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
  }

  .beifen img {
    margin-top: 0.2rem;
    width: 0.7rem;
    height: 0.6rem;
  }

  .setting_fenge {
    border-bottom: 17px solid #F9F9FB;
  }

  .find {
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.35rem;
    color: #3EAF9B;
  }

  .setting{
    position: relative;
    height: 100%;
  }
  .setting_head {
    position: absolute;
    width: 100%;
    height: 1rem;
    top: 0;
  }
  .setting_body{
    overflow-y: scroll;
    position: absolute;
    top:1rem
  }
</style>
