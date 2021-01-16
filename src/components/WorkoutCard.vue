<template>
      <div class="card">
            <img class="card-img-top" :src="info.url" />
            <div class="centered">{{ info.description }}</div>
      </div>
</template>

<script>
export default {
      props: ['info'],
      name: 'WorkoutCard',
};
</script>

<style scoped>
.card{
      margin: 6px;
      border: none;
}
.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}
.card img{
      width: 10rem;
}
.card .centered{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>