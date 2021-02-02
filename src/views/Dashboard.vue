<template>
<div class="app">
  <br>
      <div class="row mt-5">
        <div class="col-0 image">
          <img src="@/assets/avatar.jpg" alt="Avatar" class="avatar">
          <h3 class="mt-3">User Userić</h3>
          <router-link to="/editprofile">
          <button type="button" class="btn btn-secondary">Edit Profile</button>
          </router-link>
        </div>
        <div class="ml-5"><router-link to="/dashboard/workouts" class="nav-link text-light active"><img src="@/assets/dumbbell.png" class="dumbbell-logo1 mr-1" height="25">Workouts</router-link>
        </div>
        <div class="ml-5"><router-link to="/dashboard/myplan" class="nav-link text-light"><img src="@/assets/pencil.png" class="dumbbell-logo mr-1" height="20">My Plan</router-link>
        </div>
        <div class="ml-5"><router-link to="/dashboard/pics" class="nav-link text-light"><img src="@/assets/image.png" class="dumbbell-logo mr-1" height="20">Pics</router-link>
        </div>
      </div>
</div>

</template>

<script>
/* import TestCard from '@/components/TestCard.vue';

let cards = [];

cards = [
  {
    img: require('@/assets/gym.jpg'),
    route: '/login',
  },
];

export default {
  name: 'Dashboard',
  data: function() {
    return {
      cards,
    };
  },
  components: {
    TestCard,
  }
}; */
</script>

<style scoped>
a.router-link-active{
  background: gray;
}
/* .nav-link:hover{
  background-color: gray;
}
.nav-link:focus{
  background-color: red;
} */
.image{
  margin-left: -120px;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.dumbbell-logo{
  margin-top: -2px;
}
</style>