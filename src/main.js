import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Settings } from 'luxon'

Vue.config.productionTip = false
Settings.defaultLocale = 'jp'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
