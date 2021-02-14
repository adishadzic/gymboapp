import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from "../views/PageNotFound.vue";
import store from "@/store"
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
    component: () => import('../views/Choose.vue'),
    meta: {
      needsUser: true,
    }
  },
  {
    path: '/parameters',
    name: 'Parameters',
    component: () => import('../views/Parameters.vue'),
    meta: {
      needsUser: true,
    }
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
    meta: {
      needsUser: true,
    }
  },
  {
    path: '/dashboard/workouts',
    name: 'Workouts',
    component: () => import('../views/Workouts.vue'),
  },
  {
    path: '/dashboard/myplan',
    name: 'MyPlan',
    component: () => import('../views/MyPlan.vue'),
  },
  {
    path: '/dashboard/pics',
    name: 'Pics',
    component: () => import('../views/Pics.vue'),
  },
  {
    path: '/dashboard/BMI',
    name: 'BMI',
    component: () => import('../views/BMI.vue'),
  },
  {
    path: '/dashboard/overview',
    name: 'Overview',
    component: () => import('../views/Overview.vue'),
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
    path: '/push',
    name: 'Push',
    component: () => import('../views/CardsLevel/Push.vue')
  },
  {
    path: '/pull',
    name: 'Pull',
    component: () => import('../views/CardsLevel/Pull.vue')
  },
  {
    path: '/legs',
    name: 'Legs',
    component: () => import('../views/CardsLevel/Legs.vue')
  },
  {
    path: '/core',
    name: 'Core',
    component: () => import('../views/CardsLevel/Core.vue')
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

 router.beforeEach((to, from, next) => {
  console.log("Stara ruta", from.name, ' -> ', "nova ruta:", to.name, "korisnik:", store.currentUser);

  const noUser = store.currentUser === null;
  console.log(noUser);

  if(noUser && to.meta.needsUser) {
    next('login');
    //console.error('Ne dopustam')
  }else {
  //console.log(noUser);

  next();
  }
}) 

export default router