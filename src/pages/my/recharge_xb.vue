<template>
  <div class="start_money">
    <div class="shopcart-head">
      <router-link to="/setting">
        <div class="indexicon"><img src="../../assets/img/fh.png"/></div>
      </router-link>
      <span class="escp">充值星币</span>
      <span>消费明细</span>
    </div>
    <div class="start_body">
      <p style="height: 50px; padding-left: 20px; line-height: 50px;font-weight: bold">您的星币：星币余额在这儿</p>
      <p style="height: 50px;background-color:#f8f8f8; line-height: 50px;padding-left: 20px;color: #454545; font-size: 18px;">请选择充值金额</p>
      <li class="xb_num">
          <img src="../../assets/images/jinbi.png" alt="">
          <span>36</span>
          <div class="xb_price">￥6.00</div>
      </li>
    </div>
  </div>
</template>

<script>
    export default {
        name: "recharge_xb"
    }
</script>

<style scoped>
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
    line-height: 0.75rem;
    font-size: 0.4rem;
    font-weight: bolder;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 3rem;
    margin-right: 1.4rem;
  }
  li{
    list-style: none;
  }
  .xb_num{
    height: 50px;
    background-color: red;
    line-height: 50px;
    font-weight: bold;
    display: flex;
  }
  .xb_num img{
    width: 25px;
    height: 25px;
    margin: 10px 5px 0 10px;
  }
  .xb_price{
    height: 40px;
    border: #3BE0CF solid 2px;
    color: #3BE0CF;
  }
</style>
