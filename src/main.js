// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 Mint UI 框架
import MintUi from 'mint-ui'
//注册 Mint UI 框架
Vue.use(MintUi);
//引入 Mint UI 样式
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false

//引入axios
import axios from 'axios';
    
// 方便在其他组件中直接使用axios
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
