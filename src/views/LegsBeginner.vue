<template>
    <div class="intro">
      <h1>How it works</h1>
    <div class="container">
      <div class="row">
    <div class="col">
      <h5>Introductory video</h5>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=N5PN7G06pKg" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col">
    <h4>Exercise agenda</h4>
      <h5></h5>
      <br>
    </div>
  </div>
  <div class="cta">
    <button type="button" class="btn btn-primary">Get started</button>
  </div>
    </div>
    </div>
</template>

<script>
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