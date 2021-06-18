import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "route-contact" */ '../views/Contact.vue')
  },
  {
    path: '*',
    component: () => import("../views/404.vue")
  }
]

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTE_MODE,
  base: process.env.BASE_URL,
  routes
})

export default router
