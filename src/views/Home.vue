<template>
  <div class="row">
  <div class="col">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5qap5aO4i9A" allowfullscreen></iframe>
      </div>
        <div class="cta mt-3">
     <b-button pill variant="primary" class="mt-3" @click="clickToChoose">Get started</b-button>
  </div>
  </div>
  <div class="col-5">
    <h1 class="presenting-title">How Gymbo works</h1>
    <img class="img-present-vid" src=@/assets/coach-home.png />
  </div>
</div>
</template>

<script>
  export default {
   methods: {
    clickToChoose(){
      this.$router.push('/Choose');
    }
  }
}
</script>

<style>
.img-present-vid {
  position: relative;
  left: 100px;
}

.presenting-title{
  top: 600px;
  text-align: right;
}
</style>