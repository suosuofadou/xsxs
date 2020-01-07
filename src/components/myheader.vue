<template>
    <div class="nav_top">
      <router-link to="/my">
        <img src="../assets/img/fh.png" alt="">
      </router-link>
      设置
    </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {

    }
  }
}
</script>
<style scoped="scoped">
  .nav_top{
    width: 100%;
    height: 0.8rem;
    background-color:#ffffff;
    line-height: .8rem;
    font-size: 0.44rem;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .nav_top img{
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 2.4rem;
    margin-top: 0.1rem;
  }


</style>
