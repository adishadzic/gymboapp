<template>
<div class="app">
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar">
          <div class="sidebar-sticky mt-0">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a class="nav-link active" href="#">My Workouts</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link" href="#">My Plan</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link" href="#">Other</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link" href="#">Motivation</a>
              </li>
            </ul>
            </div>
            </nav>
            <div class="workouts">
              <div class="title"><h4><strong>Workouts</strong></h4></div>
              <div class="row">
                  <div class="card" style="width: 18rem;">
                    <img src="@/assets/gym.jpg" class="card-img-top"><div class="card-img-overlay font-weight-bold">Pull</div>
                  </div>
                  <div class="card ml-3" style="width: 18rem;">
                    <img src="@/assets/gym1.jpg" class="card-img-top"><div class="card-img-overlay font-weight-bold">Push</div>
                  </div>
                  <div class="card ml-3" style="width: 18rem;">
                    <img src="@/assets/gym.jpg" class="card-img-top"><div class="card-img-overlay font-weight-bold">Core</div>
                  </div>
                  <div class="card ml-3" style="width: 18rem;">
                    <img src="@/assets/gym1.jpg" class="card-img-top"><div class="card-img-overlay font-weight-bold">Legs</div>
                  </div>
              </div>
              <div class="row">
                <div class="card mt-3" style="width: 18rem;">
                    <img src="@/assets/gym.jpg" class="card-img-top"><div class="card-img-overlay font-weight-bold">Pull & Push</div>
                  </div>
                  <div class="card mt-3 ml-3" style="width: 18rem;">
                    <img src="@/assets/gym1.jpg" class="card-img-top"><div class="card-img-overlay font-weight-bold">Cardio</div>
                  </div>
              </div>
              <div class="title mt-5"><h3>My plan</h3></div>
            </div>
      </div>
    </div>
</div>
</template>

<style scoped>
ul, li{
    text-transform: uppercase;
}
.container-fluid{
    position: fixed;
    left: 0;
    z-index: 100;
    padding: 0;
}

.sidebar .nav-link {
  font-weight: 500;
  color: white;
}
.nav a:hover {
    background: #122143 none repeat scroll 0 0; 
    border-left: 10px solid #5584ff;
    display: block;
    padding-left: 15px;
}
.sidebar-sticky{
    overflow-y: auto;
    top: 48px;
}
.nav{
    display: flex;
    height: 100vh;
}
.workouts{
  background-color: whoit;
}
.workouts .title{
  text-align: left;
}
.workouts .card-img-overlay{
  position: absolute;
  top: 70%;
}
</style>
