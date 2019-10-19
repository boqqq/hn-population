// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import echarts from 'echarts';
import  'echarts/theme/macarons.js'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import httpRequest from './utils/httpRequest';
import vueSeamlessScroll from 'vue-seamless-scroll';
import tagCloud from 'v-tag-cloud'

Vue.prototype.axios=axios;
Vue.prototype.vueSeamlessScroll=vueSeamlessScroll;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(tagCloud)

// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
