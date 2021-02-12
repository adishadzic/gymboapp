<template>
<div class="app">
  <br>

    <b-container fluid class="container mt-4">
      <b-row class="d-flex inline-flex justify-content-start">
        <b-col class="mr-4 ml-3">
          <img src="@/assets/avatar.jpg" alt="Avatar" class="avatar">
          <h3 class="mt-3">{{ store.currentUser }}</h3>
          <router-link to="/editprofile">
          <button type="button" class="btn btn-secondary">Edit Profile</button>
          </router-link>
        </b-col>

        <b-col cols="8">
          <b-row no-gutters>
            <b-col>
              <router-link to="/dashboard/workouts" class="nav-link text-light active"><img src="@/assets/dumbbell.png" class="mr-1" height="20">Workouts</router-link>
            </b-col>
        
            <b-col>
              <router-link to="/dashboard/myplan" class="nav-link text-light"><img src="@/assets/pencil.png" class="mr-1" height="20">My Plan</router-link>
            </b-col>

            <b-col>
              <router-link to="/dashboard/pics" class="nav-link text-light"><img src="@/assets/image.png" class="mr-1" height="20">Pics</router-link>
            </b-col>

            <b-col>
              <router-link to="/dashboard/BMI" class="nav-link text-light"><img src="@/assets/bmi1.png" class="mr-1" height="20">BMI</router-link>
            </b-col>
          </b-row>
          <b-row class="ml-5 mt-4">
            <h3>Beginner</h3> 
          </b-row>
          <b-row class="content">
              <WorkoutOne class="ml-3" v-for="card in workout1" :key="card.url" :info="card" />
          </b-row>
          <b-row class="ml-5 mt-4">
            <h3>Intermediate</h3> 
          </b-row>
          <b-row class="content">
              <WorkoutTwo class="ml-3" v-for="card in workout2" :key="card.url" :info="card" />
          </b-row>
          <b-row class="ml-5 mt-4">
            <h3>Advanced</h3> 
          </b-row>
          <b-row class="content">
              <WorkoutThree class="ml-3" v-for="card in workout3" :key="card.url" :info="card" />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
</div>

</template>

<script>
import WorkoutOne from '@/components/WorkoutOne.vue';
import WorkoutTwo from '@/components/WorkoutTwo.vue';
import WorkoutThree from '@/components/WorkoutThree.vue';
import { firebase } from '@/firebase';
import store from '@/store';

let workout1, workout2, workout3 = [];

workout1 = [
  {img: require('@/assets/pull.jpg'), route: '/pullbeginner', description: "Pull"},
  {img: require('@/assets/pushup.jpg'), route: '/pushbeginner', description: "Push"},
  {img: require('@/assets/legs.jpg'), route: '/legsbeginner', description: "Legs"},
  {img: require('@/assets/core.jpg'), route: '/corebeginner', description: "Core"}
];

workout2 = [
  {img: require('@/assets/pull.jpg'), route: '/pullintermediate', description: "Pull"},
  {img: require('@/assets/pushup.jpg'), route: '/pushintermediate', description: "Push"},
  {img: require('@/assets/legs.jpg'), route: '/legsintermediate', description: "Legs"},
  {img: require('@/assets/core.jpg'), route: '/legsintermediate', description: "Core"}
];

workout3 = [
  {img: require('@/assets/pull.jpg'), route: '/pulladvanced', description: "Pull"},
  {img: require('@/assets/pushup.jpg'), route: '/pushadvanced', description: "Push"},
  {img: require('@/assets/legs.jpg'), route: '/legsadvanced', description: "Legs"},
  {img: require('@/assets/core.jpg'), route: '/coreadvanced', description: "Core"}
];
export default {
  name: 'Dashboard',
  data: function() {
    return {
      workout1,
      workout2,
      workout3,
      store
    };
  },
  components: {
    WorkoutOne,
    WorkoutTwo,
    WorkoutThree 
  }
}; 
</script>
<style scoped>
.content{
  margin-top: 20px;
  margin-left: 20px;
}
.container {
  margin-left: -150px;
}
a.router-link-active{
  background: gray;
}
a.router-link-active::after{
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width none;
  margin-top: 10px;
}
a.router-link-active:hover::after{
  width: 100%;
  transition: width .3s;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>