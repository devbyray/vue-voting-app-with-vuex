import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import 'normalize.css'
import { storeObject } from './store.js';

Vue.use(Vuex);

const store = new Vuex.Store(storeObject);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
