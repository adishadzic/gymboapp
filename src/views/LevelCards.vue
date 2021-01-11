<template>
    <div class="intro">
      <h1>Levels</h1>
    <div class="container">
      <div class="coloumn">
    <div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Beginner level"
    text-variant="white"
    title="Beginner"
  >
  <b-button href="#" variant="primary">Start</b-button>
  </b-card>
</div>

  <div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Intermediate level"
    text-variant="white"
    title="Intermediate"
  >
  <b-button href="#" variant="primary">Start</b-button>
  </b-card>
</div>

  <div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Advanced level"
    text-variant="white"
    title="Advanced"
  >
  <b-button href="#" variant="primary">Start</b-button>
  </b-card>
</div>

  </div>
    </div>
    </div>
</template>

<script scoped>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .col{
    margin-top: 20px;
  }
  .cta{
    margin-top: 30px;
  }
</style>