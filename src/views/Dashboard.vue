<template>
<div class="app">
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar">
          <div class="sidebar-sticky mt-0">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a class="nav-link active" href="#">My Workouts</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link" href="#">My Plan</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link" href="#">Motivation</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link" href="#">Webshopping</a>
              </li>
            </ul>
            </div>
            </nav>
            <div class="workouts">
              <div class="title"><h4><strong>Workouts</strong></h4></div>
             <div class="row">
                <div class="card">
                  <workout-card v-for="card in cards" :key="card.url" :info="card" />
                </div>
             </div>
              <div class="title mt-5"><h3>My plan</h3></div>
            </div>
      </div>
    </div>
</div>
</template>

<script>
import WorkoutCard from '@/components/WorkoutCard.vue';
let cards = [];
cards = [
  {url:"https://cdn.discordapp.com/attachments/700685922299019265/799406930261966898/gym.jpg"},
  {url:"https://images.unsplash.com/photo-1434596922112-19c563067271?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},
  {url:"https://images.unsplash.com/photo-1434596922112-19c563067271?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},
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
}
.container-fluid{
    position: fixed;
    left: 0;
    z-index: 100;
    padding: 0;
}
.sidebar .nav-link {
  font-weight: 500;
  color: white;
}
.nav a:hover {
    background: #122143 none repeat scroll 0 0; 
    border-left: 10px solid #5584ff;
    display: block;
    padding-left: 15px;
}
.sidebar-sticky{
    overflow-y: auto;
    top: 48px;
}
.nav{
    display: flex;
    height: 100vh;
}
.workouts .title{
  text-align: left;
}
.workouts .card-img-overlay{
  position: absolute;
  top: 70%;
}
</style>