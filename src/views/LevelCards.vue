<template>
    <div class="intro">
      <h1>Levels</h1>
      <div class="container">
        <div class="coloumn">
      <div>
        <b-card
        class="mb-3"
          overlay
          img-src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          img-height="500"
          img-alt="Beginner level"
          text-variant="white"
          title="Beginner"
        >
        <b-button href="#" variant="primary">Start</b-button>
        </b-card>
</div>

  <div>
  <b-card
    class="mb-3"
    overlay
    img-src="https://images.unsplash.com/photo-1434596922112-19c563067271?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    img-height="500"
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
    img-src="https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80"
    img-width="900"
    img-height="500"
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
</style>