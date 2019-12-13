import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
