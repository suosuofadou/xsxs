<template>
  <div id="app">
     <myheader></myheader>
    <router-view/>
     <myfooter v-if=""></myfooter>
  </div>
</template>

<script>
  import myfooter from "./components/myfooter"
  export default {
    name:"App",
    components:{
      // myheader:myheader,
      myfooter:myfooter
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
