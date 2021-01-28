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
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/choose',
    name: 'Choose',
    component: () => import('../views/Choose.vue')
  },
  {
    path: '/parameters',
    name: 'Parameters',
    component: () => import('../views/Parameters.vue')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../views/view.vue')
  },
  {
    path: '/legsbeginner',
  name: 'legsbeginner',
  component: () => import('../views/LegsWorkouts/LegsBeginner.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/chooseworkout',
    name: 'ChooseWorkout',
    component: () => import('../views/ChooseWorkout.vue')
  },
  {
    path: '/levelcards',
    name: 'LevelCards',
    component: () => import('../views/LevelCards.vue')
  },
  {
    path: '/legsintermediate',
    name: 'LegsI',
    component: () => import('../views/LegsWorkouts/LegsIntermediate.vue')
  },
  {
    path: '/legsadvanced',
    name: 'LegsA',
    component: () => import('../views/LegsWorkouts/LegsAdvanced.vue')
  },
  {
    path: '/coreadvanced',
    name: 'CoreAdvanced',
    component: () => import('../views/CoreWorkouts/CoreAdvanced.vue')
  },
  {
    path: '/corebeginner',
    name: 'CoreBeginner',
    component: () => import('../views/CoreWorkouts/CoreBeginner.vue')
  },
  {
    path: '/coreintermediate',
    name: 'CoreIntermediate',
    component: () => import('../views/CoreWorkouts/CoreIntermediate.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
