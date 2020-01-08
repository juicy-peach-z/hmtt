import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import './utils/register-vant'
import './styles/index.less'
import 'amfe-flexible'
Vue.use(components)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
