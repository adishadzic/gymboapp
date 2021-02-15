<template>
<div class="app">
  <br>

    <b-container fluid class="container mt-4">
      <b-row class="d-flex inline-flex justify-content-start">
        <b-col class="mr-4 ml-3">
          <img :src="store.userPicture"  alt="profile pic" class="avatar">
          <h3 class="mt-3">{{ store.displayName }}</h3>
          <router-link to="/editprofile">
          <button type="button" class="btn btn-secondary">Edit Profile</button>
          </router-link>
        </b-col>

        <b-col cols="8">
          <b-row no-gutters>
            <b-col>
              <router-link to="/dashboard/overview" class="nav-link active text-light active"><img src="@/assets/dumbbell.png" class="mr-1" height="20">Overview</router-link>
            </b-col>

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
            <h3>Week 1</h3> 
          </b-row>
          <b-row class="ml-4">
            <week-one class="ml-2" v-for="card in week1" :key="card.id" :info="card" />
          </b-row>
          <b-row class="ml-5 mt-4">
            <h3>Week 2</h3> 
          </b-row>
          <b-row class="ml-4">
            <week-two class="ml-2" v-for="card in week2" :key="card.id" :info="card" />
          </b-row>
          <b-row class="ml-5 mt-4">
            <h3>Week 3</h3> 
          </b-row>
          <b-row class="ml-4">
            <week-three class="ml-2" v-for="card in week3" :key="card.id" :info="card" />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
</div>

</template>
<script>
import WeekOne from '@/components/WeekOne.vue';
import WeekTwo from '../components/WeekTwo.vue';
import WeekThree from '@/components/WeekThree.vue';
import { firebase } from '@/firebase';
import store from '@/store';

let week1, week2, week3 = [];

week1 = [
  {title: "Day 1", route: '/pullbeginner', desc: 'Pull'},
  {title: "Day 2", route: '/pushbeginner', desc: 'Push'},
  {title: "Day 3", route: '/legsbeginner', desc: 'Legs'},
  {title: "Day 4", route: '/corebeginner', desc: 'Core'},
  {title: "Day 5", route: '/', desc: 'Cardio'},
];

week2 = [
  {title: "Day 1", route: '/pushadvanced', desc: 'Push'},
  {title: "Day 2", route: '/pulladvanced', desc: 'Pull'},
  {title: "Day 3", route: '/coreadvanced', desc: 'Core'},
  {title: "Day 4", route: '/legsadvanced', desc: 'Legs'},
  {title: "Day 5", route: '/', desc: 'Mix'},
];

week3 = [
  {title: "Day 1", route: '/pullbeginner', desc: 'Legs'},
  {title: "Day 2", route: '/pushbeginner', desc: 'Pull'},
  {title: "Day 3", route: '/legsbeginner', desc: 'Push'},
  {title: "Day 4", route: '/corebeginner', desc: 'Core'},
  {title: "Day 5", route: '/', desc: 'Mix'},
];

export default {
  name: 'MyPlan',
  data() {
    return {
      week1,
      week2,
      week3,
      store,
    };
  },
  components: {
    WeekOne,
    WeekTwo,
    WeekThree,
  }
}
</script>

<style scoped>
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
.nav-link::after{
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width .3s;
  margin-top: 10px;
}
.nav-link:hover::after{
  width: 100%;
  transition: width .7s;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>