import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import vip from '@/pages/vip/vip'
import worry from '@/pages/worry/worry'
import news from '@/pages/news/news'
import login_index from "../pages/my/login_index"
import login from "../pages/my/login"
import regist from "../pages/my/regist"
import my from "../pages/my/my";
import gushi from "../pages/worry/gushi";
import more from "../pages/home/more";
import suggest from "../pages/home/suggest";
import information from "../pages/home/information";

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
			path: '/login_index',
			name: 'login_index',
			component: login_index
		},
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/more',
      name: 'more',
      component:more
    },
    {
      path: '/suggest',
      name: 'suggest',
      component:suggest
    },
    {
      path:'/information',
      name: 'information',
      component:information
    }
	]
})
