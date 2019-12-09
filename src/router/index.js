import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import classs from '@/pages/classs'
import shopping from '@/pages/shopping'
import message from '@/pages/message'
import my from '@/pages/my'
import serviceList from '@/pages/serviceList'
import setting from '@/pages/setting'
import list from '@/pages/list'
import provingPhone from '@/pages/provingPhone'
import helpCenter from '@/pages/helpCenter'
import helpCenters from '@/pages/helpCenters'
import residentHome from '@/pages/residentHome'
import minemessage from '@/pages/minemessage'
import quality from '@/pages/quality'
import products from '@/pages/products'
import newproductList from '@/pages/newproductList'
import orderlist from '@/pages/orderlist'
import aboutus from '@/pages/aboutus'

import qiandao from '@/pages/qiandao'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/classs',
			name: 'classs',
			component: classs
		},
		{
			path: '/shopping',
			name: 'shopping',
			component: shopping
		},
    {
      path: '/message',
      name: 'message',
      component: message
    },
		{
			path: '/my',
			name: 'my',
			component: my
		},
		{
			path: '/serviceList',
			name: 'serviceList',
			component: serviceList
		}, {
			path: '/setting',
			name: 'setting',
			component: setting
		}, {
			path: '/list',
			name: 'list',
			component: list
		}, {
			path: '/provingPhone',
			name: 'provingPhone',
			component: provingPhone
		}, {
			path: '/helpCenter',
			name: 'helpCenter',
			component: helpCenter
		}, {
			path: '/helpCenters',
			name: 'helpCenters',
			component: helpCenters
		},{
			path: '/residentHome',
			name: 'residentHome',
			component: residentHome
		},{
			path: '/minemessage',
			name: 'minemessage',
			component: minemessage
		},
		{
			path: '/qiandao',
			name: 'qiandao',
			component: qiandao

		},{
			path: '/products',
			name: 'products',
			component: products
		},{
			path: '/newproductList',
			name: 'newproductList',
			component: newproductList

		},{
			path: '/quality',
			name: 'quality',
			component: quality

		},{
			path: '/orderlist',
			name: 'orderlist',
			component: orderlist
		},{
			path: '/aboutus',
			name: 'aboutus',
			component: aboutus
		}
	]
})
