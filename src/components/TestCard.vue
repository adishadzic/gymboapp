<template>
  <div class="container" style="max-width: 500px;">
    <div class="card">
      <a :href="info.route"><img class="card-img-top" :src="info.img" /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: 'TestCard',
};
</script>

<style>
.card{
      margin: 6px;
      border: none;
}
.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
} 

.card img{
      opacity: 0.8;
      width: 10rem;
}
.card img:hover{
  opacity: 1.0;
}
.card .centered{
  color: rgb(255, 255, 255);     
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>