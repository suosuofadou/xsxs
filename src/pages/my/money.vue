<template>
  <div class="money_bag">
    <div class="find_nav">
      <router-link to="/my">
        <img src="../../assets/img/fh.png" alt="">
      </router-link>
      钱包
      <router-link to="#"><span style="color: black;margin-left: 30%">账单</span></router-link>

    </div>
    <div style="border-top: 1px solid #cccccc"></div>
    <div class="money_body">
      <div class="yve" style="width: 100%;height:3.1rem;background-color:#fff;padding-top: 0.2rem;padding-left: 5%">
<!--        余额-->
        <div class="yve_num">
          <p>余额（元）</p>
          <span style="margin-left: 0.4rem;font-size: 0.5rem;margin-right: 2.5rem">0.00</span>
          <router-link to="/recharge">
            <span><img src="../../assets/images/baoxiang.png" alt="" style="width: 0.4rem;height: 0.4rem;padding-top: 0.25rem;padding-right: 0.1rem">充值有礼 &gt;</span></router-link>

        </div>
      </div>
<!--      果币-->
      <div class="guobi">
        <p style="font-size:20px;margin-top: 15px;margin-left: 15px;margin-bottom: 15px">果币</p>
        <span style="font-size: 30px;margin-left: 20px;">0</span>
        <span style="font-size: 15px;margin-right:55%">个</span>
        <router-link to="/recharge_xb"><span style="font-size: 18px;color: black">去充值 &gt;</span></router-link>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "money"
    }
</script>

<style scoped>
  .find_nav{
    width: 100%;
    height: 0.8rem;
    background-color:#ffffff;
    line-height: .8rem;
    font-size:18px;
  }
  .find_nav img{
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 2rem;
    margin-top: 0.1rem;
  }
  .money_body{
    width: 100%;
    height: 20rem;
    background-color: #eaeaea;
  }
  .yve_num{
    width: 90%;
    height: 2.9rem;
    background-color: #70E9CD;
    border-radius: 15px;
  }
  .yve_num p{
    color: #ffffff;
    font-size:0.5rem;
    padding-top: 0.4rem;
    margin-bottom: 0.8rem;
    margin-left: 0.4rem;
  }
  .yve_num span{
    color: white;
  }
  .guobi{
    width: 100%;
    height: 130px;
    background-color: #fff;
  }
</style>
