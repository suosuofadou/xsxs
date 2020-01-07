<template>
    <div class="find">
      <div class="find_nav">
        <router-link to="/setting">
          <img src="../../assets/img/fh.png" alt="">
        </router-link>
        找回账号
      </div>
<!--      分割-->
      <div class="fenge"></div>
<!--      body-->
<!--      头像logo-->
      <div class="find_body">
      <div class="find_logo"></div>
    </div>
<!--      表单-->
      <div class="find_input" >
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="50px" class="demo-ruleForm">

          <el-form-item prop="age">
            <span style="font-size: 20px">星号：</span>
            <el-input v-model.number="ruleForm2.age "placeholder="请输入星号" id="input_one">
          </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <span style="font-size: 20px">密码：</span><el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码 " id="input_two"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" id="input_btn">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
<!--      第三方找回-->
      <div class="find_third" style="text-align: center;margin-top: 1.5rem;color: #bfbfbf">
        ———————— 其他方式找回 ————————
      </div>
<!--      tubiao-->
      <ul class="tubiao">
        <router-link to="#"><li><img src="../../assets/images/shouji.png" alt=""></li></router-link>
        <router-link to="#"><li><img src="../../assets/images/weixin.png" alt=""></li></router-link>
        <router-link to="#"><li><img src="../../assets/images/QQ.png" alt=""></li></router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "find",
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('星号不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('星号请输入数字'));
                    } else {
                        /*if (length!=7) {
                            callback(new Error('必须输7位星号'));
                        } else {*/
                            callback();
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' },
                        {min:6,max:20, message: '长度在 6 到 20 个字符'}
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
  .find_nav{
    width: 100%;
    height: 0.8rem;
    background-color:#ffffff;
    line-height: .8rem;
    font-size: 0.44rem;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .find_nav img{
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 2rem;
    margin-top: 0.1rem;
  }
  .fenge{
    border-top: 2px solid #cccccc;
    margin-top: 0.8rem;
  }
  .find_logo{
    width: 120px;
    height: 120px;
    background:url("../../assets/images/logo.png") center;
    background-size: 120px;
    border-radius: 0.45rem;
    margin-top: 8%;
    margin-left: 33%;
  }
  .find_input{
    width: 80%;
    margin-top: 0.3rem;
  }
  .tubiao li{
    width: 0.8rem;
    height: .8rem;
    float: left;
    margin-left: 1.2rem;
    margin-top: 0.5rem;
  }
  >>>#input_one,>>>#input_two{
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
