<template>
  <div class="row">
  <div class="col">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Mdj711U31yU" allowfullscreen></iframe>
      </div>
        <div class="cta mt-3">
    <button type="button" class="btn btn-primary">Get started</button>
  </div>
  </div>
  <div class="col-5">
    <h1 class="presenting-title">How Gymbo works</h1>
    <img class="img-present-vid" src=@/assets/coach-home.png />
  </div>
</div>
</template>

<script>

</script>

<style>
.img-present-vid {
  position: relative; /* can play with absolutes too */
  left: 100px;
}

.presenting-title{
  top: 600px;
  text-align: right;
}
</style>