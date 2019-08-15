import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "about" */ './views/Home')
    },
    {
      path: '/movieranking',
      name: 'movieranking',
      component: () => import( /* webpackChunkName: "about" */ './views/MovieRanking')
    },
    {
      path: '/programtable',
      name: 'programtable',
      component: () => import( /* webpackChunkName: "about" */ './views/TvProgram.vue')
    }
  ]
})