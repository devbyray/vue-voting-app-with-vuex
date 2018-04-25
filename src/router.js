import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Movies from './views/Movies.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movies',
      component: Movies
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
