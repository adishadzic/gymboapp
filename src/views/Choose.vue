<template>

<div class="carousel">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="@/assets/gym.jpg" alt="First slide">
        <div class="carousel-caption">
            <router-link to="/parameters" class="nav-link text-light" ><h1>Make a plan</h1></router-link>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/gym1.jpg" alt="Second slide">
        <div class="carousel-caption">
            <router-link to="/chooseworkout" class="nav-link text-light"><h1>Choose a workout</h1></router-link>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/ropes.jpg" alt="Third slide">
        <div class="carousel-caption">
            <h1>DIY workout</h1>
            <h5 class="mt-1" style="color: black"><strong>Coming soon!</strong></h5>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/gym8.jpg" alt="Fourth slide">
        <div class="carousel-caption">
            <a class="nav-link text-light" style="font-size=40px"  href="https://gymbofipu.wordpress.com/"> <h1>Go to webshop! </h1></a>
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


