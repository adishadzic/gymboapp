<template>

<div class="row">
<div class="card">
  <div class="card-image">
  <img src="@/assets/push.jpg" class="main-image">
  </div>
  <div class="card-text">
    <span class="date">4 days ago</span>
    <h2>PUSH</h2>
    <p><br> <br> ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
  <div class="card-stats">
    <div class="stat">
      <div class="value">4<sup>m</sup></div>
      <div class="type">read</div>
    </div>
    <div class="stat border">
      <div class="value">5123</div>
      <div class="type">views</div>
    </div>
    <div class="stat">
      <div class="value">32</div>
      <div class="type">comments</div>
    </div>
  </div>
</div>



<div class="card">
  <div class="card-image">
  <img src="@/assets/pull.jpg" class="main-image">
  </div>
  <div class="card-text">
    <span class="date">4 days ago</span>
    <h2>PULL </h2>
    <p><br> <br> ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
  <div class="card-stats">
    <div class="stat">
      <div class="value">4<sup>m</sup></div>
      <div class="type">read</div>
    </div>
    <div class="stat border">
      <div class="value">5123</div>
      <div class="type">views</div>
    </div>
    <div class="stat">
      <div class="value">32</div>
      <div class="type">comments</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
  <img src="@/assets/legs.jpg" class="main-image">
  </div>
  <div class="card-text">
    <span class="date">4 days ago</span>
    <h2>LEGS</h2>
    <p><br> <br> ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
  <div class="card-stats">
    <div class="stat">
      <div class="value">4<sup>m</sup></div>
      <div class="type">read</div>
    </div>
    <div class="stat border">
      <div class="value">5123</div>
      <div class="type">views</div>
    </div>
    <div class="stat">
      <div class="value">32</div>
      <div class="type">comments</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
  <img src="@/assets/core.jpg" class="main-image">
  </div>
  <div class="card-text">
    <span class="date">5 days ago</span>
    <h2>LEGS</h2>
    <p><br> <br> ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
  <div class="card-stats">
    <div class="stat">
      <div class="value">4<sup>m</sup></div>
      <div class="type">read</div>
    </div>
    <div class="stat border">
      <div class="value">5123</div>
      <div class="type">views</div>
    </div>
    <div class="stat">
      <div class="value">32</div>
      <div class="type">comments</div>
    </div>
  </div>
</div>
</div>






</template>

<style>

.card {
  display: grid;
  grid-template-columns: 210px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  text-align: center;
  width: 210px;
  height: 210px;
}

.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}
.card {

  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
}

.main-image {
  border-radius: 15px;
  background-size: cover;
  height: 210px;
  width: 210px;
}

.card-text {
  grid-area: text;
  
  
  
}
.card-text .date {
  color: rgb(255, 7, 110);
  font-size:13px;
}
.card-text p {
  color: red;
  font-size:15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top:0px;
  font-size:28px;
}




.card-stats {
  grid-area: stats; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(58, 58, 58);
}
.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding:10px;
}


</style>

