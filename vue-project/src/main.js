import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://192.168.0.107:8000/';

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

