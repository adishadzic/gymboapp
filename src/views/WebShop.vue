<template>
<div class="app">
  <br>
      <div class="row mt-5">
        <div class="col-0 image">
          <img src="@/assets/avatar.jpg" alt="Avatar" class="avatar">
          <h3 class="mt-3">User Userić</h3>
        </div>
        <div class="ml-5 active">Workouts
        </div>
        <div class="ml-5">My Plan
        </div>
        <div class="ml-5">Web shop
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
.image{
  margin-left: -120px;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>