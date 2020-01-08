<template>
  <div class="login">
    <div class="find_body">
      <div class="find_logo">
      </div>
      <span>果号：{{guohao}}</span>
    </div>
<!--    mima-->
    <div class="find">
      <div class="find_input">
        <el-form  status-icon :rules="rules"  label-width="50px" class="demo-ruleForm">
          <el-form-item>
            <span style="font-size: 20px">密码：</span><el-input type="password" v-model="userpwd" auto-complete="off" placeholder="请输入密码 " id="input_two"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" id="input_btn">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--      第三方找回-->
    <div class="find_third" style="text-align: center;margin-top: 1.5rem;color: #bfbfbf">
      ———————— 其他登录方式 ————————
    </div>
    <!--      tubiao-->
    <ul class="tubiao">
      <router-link to="#"><li><img src="../../assets/images/shouji.png" alt=""></li></router-link>
    </ul>
  </div>
</template>

<script>
import  axios from 'axios'
axios.defaults.headers['Content-Type'] = 'Access-Control-Allow-Origin'

    export default {
        name: "login",

        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.checkPass !== '') {
                        this.$refs.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
              guohao:'',
              userpwd: '',
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' },
                        {min:6,max:20, message: '长度在 6 到 20 个字符'}
                    ]
                }
            };
        },
      created() {
          this.userName();
        },
      methods: {
          userName(){
            axios.post("http://192.168.0.108:8080/test/uid").then(res => {
              this.guohao = res.data.uid;
              console.log( this.guohao);
            })
          },
            submitForm() {
            console.log(this.userpwd);
                axios.post("http://192.168.0.108:8080/test/login",{ upwd: this.userpwd }).then(data => {
                  console.log(this.userpwd);
                  console.log(data.data);
                    if (data.data === "登录成功"){
                        this.$router.push({path:'/'})
                    }else {
                        alert("密码错误");
                    }
                })
            },
            }
    }
</script>
<style scoped>
  .find_logo{
    width: 120px;
    height: 120px;
    background:url("../../assets/images/banner6.jpg") center;
    background-size: 120px;
    border-radius: 100%;
    margin-top: 8%;
    margin-left: 33%;
  }
  .find_body{
    position: relative;
  }
  .find_body span{
    font-size: 20px;
    position: absolute;
    left: 2.4rem;
    top: 3rem;
  }
  .find_input{
    width: 80%;
    margin-top: 2rem;
    position: relative;
  }
 .find_pwd input{
    border:none;
    width: 80%;
    height: 1rem;
  }
  .find_pwd span{
    font-size: 20px;
    margin-right: 0.4rem;
  }
  .sure button{
       width: 60%;
       height: 1rem;
       background-color: #99EEEB;
       font-size: 18px;
       text-align: center;
       line-height: 1rem;
       border: none;
       border-radius: 6px;
       margin-top: 1rem;
       margin-left: 1.5rem;
     }
  .tubiao li {
    width: 0.8rem;
    height: .8rem;
    float: left;
    margin-left: 45%;
    margin-top: 0.5rem;
  }
  >>>#input_two{
    height: 60px;
    border: none;
    border-bottom: 2px solid #cccccc;
  }
  #input_btn{
    width: 250px;
    height: 40px;
    margin-left: 10px;
    margin-top: 20px;
  }
</style>
