<template>
      <div class="card">
            <img class="card-img-top" :src="info.url" />
      </div>
</template>

<script>
export default {
      props: ['info'],
      name: 'WorkoutCard',
};
</script>

<style scoped>
.card img{
      width: 18rem;
}
</style>