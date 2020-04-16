import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'


Vue.prototype.axios = axios
Vue.prototype.qs = qs


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
