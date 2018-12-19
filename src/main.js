// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import layer from './assets/lib/vue2-layer-mobile'
import store from './store'
// import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import myHeader from './components/header'

Vue.config.productionTip = false
process.env.MOCK && require('@/mock')

// 引入mockjs
require('./mock')

// 全局组件
Vue.component('myHeader', myHeader)
// 轮播
Vue.use(VueAwesomeSwiper)
// 弹窗组件
Vue.use(layer)
// 路由
Vue.use(VueRouter)
const router = new VueRouter({
  routes, // 路由路径
  mode: 'hash' // 环境
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
