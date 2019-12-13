import Vue from 'vue'
import Router from 'vue-router'

import TriviaApp from './components/TriviaApp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'trivia',
      component: TriviaApp
    }
    
  ]
})