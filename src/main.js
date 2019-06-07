// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element.js
import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css'

//引入帖子的tab字段对象
import tab from './utils/tab'

//引入全局CSS
import '@/assets/vue.css'

//引入moment
import moment from 'moment'

//设置使用中文
moment.locale('zh-cn')

Vue.config.productionTip = false

//将tab 字段挂载到vue原型上，方便使用
Vue.prototype.$tab = tab

//将moment挂载到原型上，方便使用
Vue.prototype.$moment = moment


// //引入axios
// import Axios from 'axios'

// //给vue原型挂载$axios
// Vue.prototype.$axios = Axios
// //配置基本api
// Axios.defaults.baseUrl = ''



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
