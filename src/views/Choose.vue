<template>

<div class="carousel">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="@/assets/gym.jpg" alt="First slide">
        <div class="carousel-caption">
            <h1>Choose a plan</h1>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/gym1.jpg" alt="Second slide">
        <div class="carousel-caption">
            <h1>Choose a workout</h1>
            <p></p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/gym2.jpg" alt="Third slide">
        <div class="carousel-caption">
            <h1>DIY workout</h1>
            <p>Make your own workout from hundreds of excercises</p>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

</template>

<style>
.carousel{
    margin-top: 25px;
}
</style>

