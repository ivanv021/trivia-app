import Vue from 'vue'
import Router from 'vue-router'

import TriviaApp from './components/TriviaApp.vue'
import Chuck from './components/Chuck.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'trivia',
      component: TriviaApp
    },

    {
      path: '/chuck',
      name: 'chuck',
      component: Chuck
    }
    
  ]
})
