<template>
<div class="app">
    <b-container fluid>
      <b-row>
        <b-col cols="2">
          <ul class="nav list-group">
              <li class="nav-item mb-3">
                <router-link to="/myplan" class="nav-link text-light">My Plan</router-link>
              </li>
              <li class="nav-item mb-3">
                <router-link to="/login" class="nav-link text-light">Workouts</router-link>
              </li>
              <li class="nav-item mb-3">
                <router-link to="/" class="nav-link text-light">Motivation</router-link>
              </li>
              <li class="nav-item mb-3">
                <router-link to="/" class="nav-link text-light">Web shop</router-link>
              </li>
              <li class="nav-item mb-3">
                <router-link to="/" class="nav-link text-light">Account</router-link>
              </li>
            </ul>
        </b-col>
        </b-row>
    </b-container>
    <b-row class="ml-4"><h1></h1></b-row>
    
    <div class="title ml-4 mt-3"><h4><strong>Workouts</strong></h4></div>
    <b-row>
        <div class="container" style="max-width: 500px; text-align: left;">
          <div id="cards">
            <test-card v-for="card in cards" :key="card.naslov" :info="card" />
          </div>
          <footer id="footer"></footer>
        </div>
    </b-row>
</div>

</template>

<script>
import TestCard from '@/components/TestCard.vue';

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
};
</script>

<style scoped>
ul, li{
    text-transform: uppercase;
    color: black;
    text-align: left;
}
.container-fluid{
    position: fixed;
    left: 0;
    padding: 0;
}
.nav{
    display: flex;
    height: 100vh;
}
.title{
  text-align: left;
}

</style>