import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Mint from  'mint-ui';
import 'mint-ui/lib/style.css'
// import { Cell, Checklist } from 'mint-ui';
// Vue.component(Cell.name, Cell);
// Vue.component(Checklist.name, Checklist);

Vue.prototype.axios = axios
Vue.prototype.qs = qs
// Vue.use(ElementUI);
Vue.use(Mint);

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
