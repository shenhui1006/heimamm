import Vue from 'vue'
import App from './App.vue'

// 导入路由文件
import router from './router/index'

// 导入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

// 使用element
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
