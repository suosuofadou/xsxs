<template>
  <div class="find" style="background-color: rgba(46,250,241,0.1);height: 16.2rem">

    <div class="shopcart-head">
      <router-link to="/setting">
        <div class="indexicon"><img src="../../assets/img/fh.png"/></div>
      </router-link>
      <p class="escp">手机号&密码设置</p>
    </div>

    <div class="find_body">
      <div class="find_logo"></div>
    </div>

    <div class="num_input">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号" prop="age" maxlength="11">
          <el-input v-model="msg" size="medium" v-model.number="ruleForm.age"
                    oninput="if(value.length = 11)value = value.slice(0, 11)"></el-input>
        </el-form-item>
        <!--      yan正码-->
        <div class="yanzheng">
          <div class="yanzheng_input">
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="200px" class="demo-ruleForm">
              <el-form-item
                label="验证码"
                prop="age"
                :rules="[
      { type: 'number', message: '请输入正确的验证码'}
    ]"
              >
                <el-input type="age" v-model.number="numberValidateForm.age"></el-input>
              </el-form-item>
            </el-form>
          </div>

          <div class="yzm_num">
            <div class="btn-wrap">
              <button :class="['get-code', {'disable-click': disabled}]" @click="run">{{tipText}}</button>
            </div>
          </div>
        </div>

        <!--      asdasd-->
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="setting_btn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  axios.defaults.baseUrl="http://192.168.0.108:8080"
  import {Dialog} from "vant";

  export default {
    components: {
      [Dialog.Component.name]: Dialog.Component
    },
    data() {
      var checkAge = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入11位手机号'));
          } else {
            if (phoneReg.test(value)) {
              callback();
            } else {
              callback(new Error('电话号码格式不正确'));
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        tipText: '获取验证码',
        time: 60,
        disabled: false,
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
        },

        numberValidateForm: {
          age: ''
        },

        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let upwd = this.ruleForm.pass;
            let verification = this.numberValidateForm.age;
            axios.post("http://192.168.0.108:8080/test/updateUserinfo/"+ upwd +"/"+verification).then(data => {
              if (data.data === "手机号密码绑定成功"){
                Dialog.alert({
                  message: '设置成功'
                }).then(() => {
                  this.$router.push('/login');

                });
              }else {
                Dialog.alert({
                  message: '设置失败请检查手机或验证码'
                }).then(() => {
                });
              }
            })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      run() {
        if (this.ruleForm.age == ''){
          Dialog.alert({
            message: '手机号不能为空'
          }).then(() => {
          });
        }else if (!this.disabled) {
            this.setDisabled(true);
            this.timer();
            let  data = this.ruleForm.age;
            axios.post("http://192.168.0.108:8080/test/authcode/"+ data).then(data => {
              if (data.data == "手机号已经存在"){
                Dialog.alert({
                  message: '手机号已绑定用户'
                }).then(() => {
                });
              }
            })
          } else {
            return false;
          }
      },
      // 倒计时
      timer() {
        if (this.time > 0) {
          this.tipText = this.time + 's后获取';
          this.time--;
          setTimeout(this.timer, 1000);
        } else {
          this.setDisabled(false);
          this.time = 60;
          this.tipText = '获取验证码';
        }
      },
      // 设置disable的值
      setDisabled(val) {
        this.disabled = val;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .find_logo{
    width: 120px;
    height: 120px;
    background:url("../../assets/images/logo.png") center;
    background-size: 120px;
    border-radius: 0.45rem;
    margin-top: 8%;
    margin-left: 35%;
  }
  .shopcart-head {
    width: 100%;
    height: 0.75rem;
    background: #ffffff;
    border-bottom: #ccc solid 0.01rem;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .indexicon {
    width: 0.6rem;
    height: 0.6rem;
    top: 0.07rem;
    left: 0.23rem;
    position: absolute;
  }
  .indexicon img {
    width: 100%;
    height: 100%;
  }
  .escp {
    width: 4.8rem;
    height: 100%;
    text-align: center;
    line-height: 0.84rem;
    margin: auto;
    font-size: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .get-code {
    -webkit-appearance: none;
    border: none;
    outline: none;
    margin-left: 30px;
    margin-top: -10px;
    height: 50px;
    font-size: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #fc640a;
    color: #FFF;
    cursor: pointer;

    &.disable-click {
      cursor: not-allowed;
      background-color: #B4B4B4;
    }
  }

  .yanzheng {
    display: flex;
  }

  .yanzheng_input {
    margin-left: -2rem;
  }

  .num_input {

    margin-right: 0.8rem;
    font-weight: bold;
  }

  .yzm_num {
    width: 150px;
  }
  .setting_btn{
    width: 200px;
    height: 40px;
    margin-top: 30px;
  }
</style>
