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
  {title: "Whole Body", route: '/pullbeginner', desc: 'blablabla'},
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
];

week2 = [
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
];

week3 = [
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
  {title: "siahdashbdashuoidhsuoih", route: '/pullbeginner', desc: 'blablabla'},
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
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>