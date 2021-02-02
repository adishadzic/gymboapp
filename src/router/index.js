import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from "../views/PageNotFound.vue";
import Workouts from "../views/Workouts.vue";
import MyPlan from "../views/MyPlan.vue";
import Pics from "../views/Pics.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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
  {
    path: '/legsadvanced',
    name: 'LegsAdvanced',
    component: () => import('../views/LegsWorkouts/LegsAdvanced.vue')
  },
  {
    path: '/legsbeginner',
  name: 'LegsBeginner',
  component: () => import('../views/LegsWorkouts/LegsBeginner.vue')
  },
  {
    path: '/legsintermediate',
    name: 'LegsIntermediate',
    component: () => import('../views/LegsWorkouts/LegsIntermediate.vue')
  },
  {
    path: '/pulladvanced',
    name: 'PullAdvanced',
    component: () => import('../views/PullWorkouts/PullAdvanced.vue')
  },
  {
    path: '/pullbeginner',
    name: 'PullBeginner',
    component: () => import('../views/PullWorkouts/PullBeginner.vue')
  },
  {
    path: '/pullintermediate',
    name: 'PullIntermediate',
    component: () => import('../views/PullWorkouts/PullIntermediate.vue')
  },
  {
    path: '/pushadvanced',
    name: 'PushAdvanced',
    component: () => import('../views/PushWorkouts/PushAdvanced.vue')
  },
  {
    path: '/pushbeginner',
    name: 'PushBeginner',
    component: () => import('../views/PushWorkouts/PushBeginner.vue')
  },
  {
    path: '/pushintermediate',
    name: 'PushIntermediate',
    component: () => import('../views/PushWorkouts/PushIntermediate.vue')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../views/view.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/dashboard/workouts',
        name: 'Workouts',
        component: Workouts,
      },
      {
        path: '/dashboard/myplan',
        name: 'MyPlan',
        component: MyPlan,
      },
      {
        path: '/dashboard/pics',
        name: 'Pics',
        component: Pics,
      },
    ]
  },
  {
    path: '/editprofile',
    name: 'Edit',
    component: () => import('../views/EditProfile.vue'),
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
    path: '*',
    component: PageNotFound,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router