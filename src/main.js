// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store";
import router from './router'
import "./assets/js/rem.js"
import  './assets/css/public.css'
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import Mint from 'mint-ui';
import 'mint-ui/lib/index.js';
import Element from 'element-ui'
Vue.use(Element, { size: 'small' })

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


Vue.config.productionTip = false
import myjquery from '@/assets/js/myjquery'
/*import iconfont from '@/assets/font_s1es48rez4e/iconfont'*/
Vue.use(Mint);
Vue.use(myjquery)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
