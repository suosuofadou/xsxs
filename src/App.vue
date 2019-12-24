<template>
  <div id="app">
     <myheader></myheader>
    <router-view/>
<!--    <div v-show="xianshi">-->
<!--      <myfooter></myfooter>-->
<!--    </div>-->
  </div>
</template>

<script>
  import myfooter from "./components/myfooter"
  export default {
    name:"App",
    components:{
      // myheader:myheader,
      myfooter:myfooter
    },

      //让more页面的footer消失

    watch: {
        $route(e) {
            if (e.name === 'information') {
                this.xianshi = false;
            }else {
                this.xianshi = true;
            }
        },
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .index{
    width: 100%;
    height: 94%;
    position: fixed;
    top: 0rem;
    left: 0;
    bottom: 1rem;
    background: #42B983;
  }
</style>
