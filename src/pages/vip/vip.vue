<template>
  <div class="classs">
    <myfooter></myfooter>

    <div class="bg">
      <div class="search">
        <div class="icon"><img class="iconimg" src="../../assets/images/ccsearch.png" alt=""></div>
        <input type="text" placeholder="搜索倾听者/话题" />
      </div>
    </div>
  </div>
</template>

<script>
  import myfooter from "../../components/myfooter";
    export default {
        name: 'vip',
        data() {
            return {}
        },
        components: {
          myfooter
        },
        created() {},
        mounted() {},
        methods: {}
    }
</script>

<style scoped="scoped">
  .classs {
    width: 100%;
  }

  .bg {
    width: 100%;
    height: 0.73rem;
    border-bottom: 1px solid #e6e6e6;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .search {
    width: 100%;
    height: 0.84rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: #fff;
  }

  .search input {
    border: none;
    background: #f4f4f4;
    width: 100%;
    height: 0.62rem;
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    outline: none;
    margin: 0.2rem 0 0 0;
    box-sizing: border-box;
  }

  .icon {
    width: 0.6rem;
    height: 0.6rem;
    padding-left: 0.15rem;
    margin: 0.2rem 0 0 0;
    box-sizing: border-box;
    background-position: 50%, 50%;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    background: #f4f4f4;


  }

  .iconimg {
    width: 80%;
    height: 80%;
    float: right;
    margin-top: 0.1rem;
  }

  .left {
    width: 1.72rem;
    height: 100%;
    float: left;
  }

  /* 侧边栏 */
  .sidebar {
    width: 1.72rem;
    height: 100%;
    background: #f7f7f7;
    position: fixed;
    left: 0;
    overflow-y: scroll;
    top: .9rem;
    bottom: .9rem;
    float: left;

  }

  .sidebar::-webkit-scrollbar {
    display: none;
  }

  .sidebar ul {
    width: 1.72rem;
    text-align: center;
  }

  .sidebar ul li {
    width: 100%;
    height: 0.98rem;
    line-height: 0.7rem;
    font-size: 0.26rem;
  }

  .right {
    width: 76%;
    height: 10.27rem;
    float: right;
    background: #fff;
  }

  .line {
    width: 100%;
    height: 0.98rem;
    margin-top: 0.44rem;
    display: flex;
    justify-content: center;
  }

  .line .zxian {
    width: 0.35rem;
    height: 0.05rem;
    background: url(../../assets/images/zxian.png)no-repeat;
    margin-right: .18rem;

  }

  .line span {
    font-size: .3rem;
    line-height: 0.09em;
  }

  .line .yxian {
    width: 0.35rem;
    height: 0.05rem;
    background: url(../../assets/images/yxian.png)no-repeat;
  }

  .more {
    width: 88%;
    height: .8rem;
    line-height: .02rem;
    margin-left: .38rem;
    display: flex;
    justify-content: space-between;
    font-size: .24rem;
  }

  .more p:nth-of-type(1) {
    color: #7d7d7d;
  }

  .more p:nth-of-type(2) {
    color: #c8c8c8;
  }

  .more p span {
    margin-left: .16rem;
  }

  .whole {
    width: 100%;
  }

  .pic {
    width: 100%;
    height: 5.48rem;
  }

  .picture {
    width: 100%;
    float: right;
    display: flex;
    text-align: center;
    justify-content: space-around;
    font-size: .22rem;
    color: #bcbcbc;

  }

  .picture img {
    width: 1.3rem;
  }

  .picture p {
    margin-top: .3rem;
  }

  .ture {
    margin-top: 1rem;
  }

  .tu {
    margin-top: 1rem;
    width: 96%;
    display: flex;
    justify-content: flex-start;
  }

  .who {
    margin-top: 1rem;
  }

  .tue {
    width: 93%;
    display: flex;
    justify-content: flex-start;
  }

  .myfooter {
    z-index: 2;
  }
</style>
