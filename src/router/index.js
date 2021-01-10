import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/choose',
    name: 'Choose',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Choose.vue')
  },
  {
    path: '/parameters',
    name: 'Parameters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Parameters.vue')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import(/* webpackChunkName: "about" */ '../views/view.vue')
  },
  {
    path: '/legsbeginner',
  name: 'legsbeginner',
  component: () => import(/* webpackChunkName: "about" */ '../views/LegsBeginner.vue')
  },
  {
    path: '/mbeginner',
    name: 'MBeginner',
    component: () => import(/* webpackChunkName: "about" */ '../views/MBeginner.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
