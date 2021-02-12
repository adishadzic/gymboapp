<template>
    <div class="card mt-3" style="max-width: 10rem;">
      <a :href="info.route"><img class="card-img-top" :src="info.img" /></a>
      <div class="centered">{{ info.description }}</div>
    </div>
</template>

<script>
export default {
  props: ['info'],
  name: 'WorkoutOne',
};
</script>

<style>
.card{
      border: none;
}
.card:hover {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
} 
.card img{
       opacity: 1.0;
      width: 10rem;
}
.card img:hover{
  opacity: 0.8;
}
.card .centered{
  color: rgb(255, 255, 255);     
  position: absolute;
  top: 45%;
  left: 42%;
}
</style>