import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import vip from '@/pages/vip/vip'
import worry from '@/pages/worry/worry'
import news from '@/pages/news/news'
import my from "../pages/my/my";
import gushi from "../pages/worry/gushi";
import more from "../pages/home/more";
import suggest from "../pages/home/suggest";
import information from "../pages/home/information";
import setting from "../pages/my/setting";
import find from "../pages/my/find";
import login from "../pages/my/login";
import money from "../pages/my/money";
import recharge from "../pages/my/recharge";
import text from "../pages/my/text";
import recharge_xb from "../pages/my/recharge_xb";
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/vip',
			name: 'vip',
			component: vip
		},
    {
      path: '/worry',
      name: 'worry',
      component: worry,
      children: [
        {
          path: '/gushi',
          name: 'gushi',
          component: gushi
        }
        ]
		},
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/suggest',
      name: 'suggest',
      component:suggest
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/money',
      name: 'money',
      component: money
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/recharge_xb',
      name: 'recharge_xb',
      component: recharge_xb
    }

	]
})
