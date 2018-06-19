// import Vue from 'vue'
// console.log(ELEMENT)

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
// import axios from 'axios'
import * as filters from './filters'
import i18n from './lang'
Vue.use(VueLazyLoad,{
  error:'../static/img/error.jpg',
  loading:'../static/img/loading.gif'
});
// 遍历所有导出的过滤器并添加到全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ELEMENT, ELEMENT.lang.zhCN)
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  filters,
  i18n,
  template: '<App/>',
  components: { App }
})

