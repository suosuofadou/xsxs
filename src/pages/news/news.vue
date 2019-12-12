<template>
  <div>

    <!--	顶部导航栏-->

    <div class="shopcart-head">
      <router-link to="/">
        <div class="indexicon"><img src="../../assets/img/fh.png"/></div>
      </router-link>
      <p class="escp">消&nbsp;息</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style scoped>
  .shopcart-head {
    width: 100%;
    height: 0.75rem;
    background: #7D39A0;
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
</style>
