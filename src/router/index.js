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
	]
})
