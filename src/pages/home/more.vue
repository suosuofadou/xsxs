<template>
  <div class="bgc">
    <div class="nav">
      <router-link to="/">
        <img src="../../assets/img/fh.png" alt="">
      </router-link>
      <p>听你倾述</p>
    </div>
    <hr />
    <div class="hint">
      <p>以下倾听者可耐心地听您的心事</p>
    </div>
    <MoreContent></MoreContent>
  </div>
</template>

<script>
    import MoreContent from "../../components/content";
    export default {
        name: "more",
        components: {
            MoreContent: MoreContent,
        }
    }
</script>

<style scoped>
  .bgc {
    background-color: #F7F7F7;
  }
  .nav {
    background-color: white;
    height: 1rem;
    width: 100%;
  }
  .nav img {
    height: .6rem;
    margin-top: .18rem;
    margin-left: .25rem;
  }
  .nav p {
    font-size: .45rem;
    display: inline-block;
    margin-top: .18rem;
    margin-left: 1.9rem;
  }
  .hint {
    height: .8rem;
    background-color: papayawhip;
  }
  .hint p {
    line-height: .8rem;
    font-size: .3rem;
    text-align: center;
    color: #ee9900;
    margin-bottom: .2rem;
  }
</style>
