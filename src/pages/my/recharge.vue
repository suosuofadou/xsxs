<template>
  <div class="recharge">
    <div class="find_nav">
      <router-link to="/my">
        <img src="../../assets/img/fh.png" alt="">
      </router-link>
      余额充值
    </div>
    <br><br>
      <div style="border-top: 2px solid #e0e0e0;"></div>
    <div class="pu_vip">
      <div class="vip_img">
        <img src="../../assets/images/baoxiang.png" alt="">
      </div>
      <span style="font-size: 20px">
        赠送普卡会员</span>&nbsp;&nbsp;
      <span style="font-size: 10px; color: #adadad">(获得666点会员成长值)</span>
    </div>
    <div style="border-top: 13px solid #f5f5f5"></div>
    <div class="price">
      <ul>
        <li @click="clickNode(index)" v-for="(item, index) in money" :key="index" v-bind:class='{active:index==classID}'>{{item.ptNum + "元"}}</li>
        <li @click="clickNode" :class="{'active': index === 9}">
          <input value="inputValue"  @blur.prevent="changeCount()" type="number" oninput="if(value.length>10)value=value.slice(0,10)"  placeholder="其他金额" v-model="num">
        </li>
      </ul>
    </div>
    <div style="height: 45px;margin-top: 4.8rem;background-color:#f9f9f9;line-height: 45px;color: #6c7584;padding-left: 15px">
      选择支付方式
    </div>
<!--fenge=----支付-->
    <div style="border-bottom: #E4E4E4 1px solid"></div>
    <div class="pay">
      <radio-group v-model="radio">
       <div class="zhifuPay">
         <div style="background-color:#fff;width: 20%">
           <img src="../../assets/images/支付宝.png" alt="">
         </div>
         <div class="zhifu_input">
           <radio name="1" checked-color="#49D6D2" label-position="left">支付宝支付</radio>
           <p style="font-size: 8px; color:#D39E50;margin-top: -10px">首次随机赠送0——100元</p>
         </div>
        </div>
<!--        分割-----微信-->
        <div style="border-bottom: #E4E4E4 1px solid"></div>
        <div class="zhifuPay">
          <div style="background-color:#fff;width: 20%">
            <img src="../../assets/images/weixin.png" alt="">
          </div>
          <div class="zhifu_input">
            <radio name="2" checked-color="#49D6D2" label-position="left">微信支付</radio>
          </div>
        </div>
<!--        分割 -----qq-->
        <div style="border-bottom: #E4E4E4 1px solid"></div>
        <div class="zhifuPay">
          <div style="background-color:#fff;width: 20%">
            <img src="../../assets/images/QQ.png" alt="">
          </div>
          <div class="zhifu_input">
            <radio name="3" checked-color="#49D6D2" label-position="left">QQ支付</radio>
          </div>
        </div>
<!--        fenge -- --银行卡-->
        <div style="border-bottom: #E4E4E4 1px solid"></div>
        <div class="zhifuPay">
          <div style="background-color:#fff;width: 20%">
            <img src="../../assets/images/yhk(1).png" alt="">
          </div>
          <div class="zhifu_input">
            <radio name="4" checked-color="#49D6D2" label-position="left">银行卡支付</radio>
          </div>
        </div>
      </radio-group>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="其他支付方式" name="1">
          <radio-group v-model="radio">
          <div class="zhifuPay">
            <div style="background-color:#fff;width: 20%">
              <img src="../../assets/images/paypal.png" alt="" style="width: 40px;height: 20px">
            </div>
            <div class="zhifu_input">
              <radio name="5" checked-color="#49D6D2" label-position="left"><span style="margin-right: 3.6rem">PayPal</span></radio>
            </div>
          </div>
            </radio-group>
        </van-collapse-item>
      </van-collapse>
      </div>
    <div style="width: 100%;height: 3.2rem"></div>
    <!--      条款----合计-->
    <div class="total">
      <div class="clause">
        确认充值代表同意 <span style="color:#8AEBD7">《心诉星说钱包服务协议》</span>
      </div>
      <div class="total_number">
        <div class="total_left">合计 <span style="color: #D85529">￥{{num}}</span></div>
        <span>确认充值</span>
      </div>
    </div>
  </div>
</template>
<script>
    import {RadioGroup, Radio,Collapse, CollapseItem} from 'vant';
    import axios from 'axios';
        export default {
          name: "recharge",

          data() {
            return {
                index: 0,
                inputValue:"",
                checked: false,
                radio: '1',
                activeNames:['1'],
                num:"",
                money:[],
                classID:"0",
            }
          },
          mounted() {
            this.money_num()
          },
         components: {
            RadioGroup,
            Radio
        },
          methods: {
            money_num: function() {
              axios.get("http://192.168.0.182:8080/yerecharge").then(res => {
                this.money = res.data;
                console.log(this.money);
              })
            },
            clickNode(index) {
              this.classID = index;
              $("ul li:first-child").removeClass('active');
              this.num = this.money[index].ptNum;
            },
            changeCount(){
                alert(inputValue)
              this.inputValue = inputValue
            },
        }
    }
</script>

<style scoped>
  .find_nav{
    width: 100%;
    height: 0.8rem;
    background-color:#ffffff;
    line-height: .8rem;
    font-size:18px;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .find_nav img{
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 2.5rem;
    margin-top: 0.1rem;
  }
  .pu_vip{
    width: 100%;
    height:1.5rem;
    display: flex;
    padding-top: 30px;
  }
  .vip_img{
    background-color: pink;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-right: 15px;
  }
  .vip_img img{
    width: 32px;
    height: 32px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .price ul li{
    width: 25%;
    height: 1.2rem;
    background-color: #F6F6F6;
    float: left;
    margin-left: 6.3%;
    margin-top: 0.3rem;
    border-radius: 8px;
    text-align: center;
    line-height: 1.2rem;
    color: #000000;
  }
  .price li input{
    border: none;
    background-color: #F6F6F6;
    width: 100%;
    text-align: center;
  }
  .active{
    background-color: #8AEBD7 !important;
    color:white!important;
  }
  .active input{
    background-color: #8AEBD7 !important;
    color:white!important;
  }
  .price li span{
    background-color: #89A4C1;
    color: #ffffff;
    height: 20px;
    position: relative;
    bottom: 20px;
    left: 10px;
    border-radius: 0 5px 0 8px;
  }
  .zhifuPay{
    width: 100%;
    height: 55px;
    line-height: 55px;
    display: flex;
  }
  .zhifuPay img{
    width: 40px;
    height: 40px;
    margin-top: 5px;
    margin-left: 15px;
  }
  .zhifu_input{
    padding-top: 9px;
    font-size: 16px;
    font-weight: bold;
  }
  .total{
    position: fixed;
    bottom: 0;
    z-index: 1;
  }
  .total_number{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    font-size: 18px;
    background-color: #fff;
    margin-left: 10px;

  }
  .total_number span:nth-child(2){
    background-color: #03C7BB;
    position: absolute;
    right: -1.5rem;
    width: 90px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    margin-top: 5px;
  }
  .clause{
    width: 140%;
    height: 0.5rem;
    background-color: #F8F8F8;

  }
</style>
