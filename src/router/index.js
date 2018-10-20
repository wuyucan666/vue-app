import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import Home from '@/components/Home/home'



Vue.use(Router)

export default new Router({
	routes: [
		{
		path: '/',
		name: 'home',
		component: Home
		}
	]
})
