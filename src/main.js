import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/t-ui.js'
import echarts from 'echarts'
import VueAMap from 'vue-amap'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'd0face2397384365119fbf558c48c10a',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
