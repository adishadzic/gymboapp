<template>
<div class="app">
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column bg-dark">
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
      </div>
    </div>
</div>
</template>

<style>
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
</style>
