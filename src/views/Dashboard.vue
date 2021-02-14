<template>
<div class="app">
  <br>

    <b-container fluid class="container mt-4">
      <b-row class="d-flex inline-flex justify-content-start">
        <b-col class="mr-4 ml-3">
          <img src="@/assets/avatar.jpg" alt="Avatar" class="avatar">
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
              <router-link to="/dashboard/workouts" class="nav-link active text-light active"><img src="@/assets/dumbbell.png" class="mr-1" height="20">Workouts</router-link>
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
        </b-col>
      </b-row>
    </b-container>
</div>

</template>

<script>
/* import { firebase } from '@/firebase'; */
import store from '@/store';

export default {
  data() {
    return {
      store,
    };
  },
}
</script>

<style scoped>
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
.container {
  margin-left: -150px;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>