<template>
<div class="app">
    <b-container fluid>
      <b-row>
        <b-col cols="2">
          <ul class="nav list-group">
              <li class="nav-item mb-3">
                <router-link to="/" class="nav-link text-light">My Plan</router-link>
              </li>
              <li class="nav-item mb-3">
                <router-link to="/" class="nav-link text-light">Workouts</router-link>
              </li>
              <li class="nav-item mb-3">
                <router-link to="/" class="nav-link text-light">Motivation</router-link>
              </li>
              <li class="nav-item mb-3">
                <router-link to="/" class="nav-link text-light">Web shop</router-link>
              </li>
            </ul>
        </b-col>
        </b-row>
    </b-container>
    <b-col>
    <div class="title ml-4 mt-3"><h4><strong>Workouts</strong></h4></div>
        <b-row class="ml-4">
          <workout-card v-for="card in cards" :key="card.url" :info="card" />
        </b-row>
    </b-col>
</div>

</template>

<script>
import WorkoutCard from '@/components/WorkoutCard.vue';
let cards = [];
cards = [
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Push'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090863342321674/gym.jpg", description: 'Pull'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Legs'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Push'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090863342321674/gym.jpg", description: 'Pull'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Legs'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Push'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090863342321674/gym.jpg", description: 'Pull'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Legs'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Push'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090863342321674/gym.jpg", description: 'Pull'},
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/800090855645904916/gym1.jpg", description: 'Legs'},
];
export default {
  name: 'Dashboard',
  data: function(){
      return {
        cards: cards,
    }
  },
  components: {
    WorkoutCard,
  },
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
    z-index: 100;
    padding: 0;
}
/*.nav a:hover {
    background: #122143 none repeat scroll 0 0; 
    border-left: 10px solid #5584ff;
    display: block;
    padding-left: 15px;
}*/
.nav{
    display: flex;
    height: 100vh;
}
.title{
  text-align: left;
}
</style>