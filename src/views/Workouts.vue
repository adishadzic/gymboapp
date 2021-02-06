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
          <b-row class="content">
              <test-card class="ml-3" v-for="card in cards" :key="card.url" :info="card" />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
</div>

</template>

<script>
import TestCard from '@/components/TestCard.vue';
import { firebase } from '@/firebase';
import store from '@/store';

let cards = [];

cards = [
  {img: require('@/assets/pull.jpg'), route: '/pullbeginner', description: "Pull"},
  {img: require('@/assets/pushup.jpg'), route: '/login', description: "Push"},
  {img: require('@/assets/legs.jpg'), route: '/login', description: "Legs"},
  {img: require('@/assets/core.jpg'), route: '/login', description: "Core"},
  {img: require('@/assets/pull.jpg'), route: '/pullbeginner', description: "Pull"},
  {img: require('@/assets/pushup.jpg'), route: '/login', description: "Push"},
  {img: require('@/assets/legs.jpg'), route: '/login', description: "Legs"},
  {img: require('@/assets/core.jpg'), route: '/login', description: "Core"},
  {img: require('@/assets/pull.jpg'), route: '/pullbeginner', description: "Pull"},
  {img: require('@/assets/pushup.jpg'), route: '/login', description: "Push"},
  {img: require('@/assets/legs.jpg'), route: '/login', description: "Legs"},
  {img: require('@/assets/core.jpg'), route: '/login', description: "Core"},
];

export default {
  name: 'Dashboard',
  data: function() {
    return {
      cards,
      store
    };
  },
  components: {
    TestCard, 
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