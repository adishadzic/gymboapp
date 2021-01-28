<template>

<div class="row"> 
<div class="card" >
  <div class="card-image">
  <img src="@/assets/push.jpg" class="main-image">
  </div>
  <div class="card-text">
    <br>
    <h2>PUSH</h2>
    <p> A push workout contracts your muscles when weight is being pushed away from your body, meaning the work is done when the muscle contracts as you push.</p>
  </div>
  <div class="card-stats">
    <div class="stat">      
      <div class="type"></div>
      <img src="@/assets/biceps.png" class="png-image">
    </div>
    <div class="">
      <div class="value"></div>
      <div class="type"><br>45'</div>
    </div>
    <div class="value"><img src="@/assets/timer.png" class="timer-image"> </div>
  </div>
</div>



<div class="row">
<div class="card">
  <div class="card-image">
  <img src="@/assets/pull.jpg" class="main-image">
  </div>
  <div class="card-text">
    <br>
    <h2>PULL</h2>
    <p>  Pull exercises are those where the muscles contract when weight is being pulled towards your body, meaning the work is done when the muscle contracts when you pull.</p>
  </div>
  <div class="card-stats">
    <div class="stat">      
      <div class="type"></div>
      <img src="@/assets/triceps.png" class="png-image">
    </div>
    <div class="">
      <div class="value"></div>
      <div class="type"><br>40'</div>
    </div>
    <div class="value"><img src="@/assets/timer.png" class="timer-image"> </div>
  </div>
</div>

<div class="row">
<div class="card" >
  <div class="card-image">
  <img src="@/assets/legs.jpg" class="main-image">
  </div>
  <div class="card-text">
    <br>
    <h2>LEGS</h2>
    <p><br> Work your legs hard to make the muscles grow and gain definition. </p>
  </div>
  <div class="card-stats">
    <div class="stat">      
      <div class="type"></div>
      <img src="@/assets/legs.png" class="png-image">
    </div>
    <div class="">
      <div class="value"></div>
      <div class="type"><br>30'</div>
    </div>
    <div class="value"><img src="@/assets/timer.png" class="timer-image"> </div>
  </div>
</div>

<div class="row">
<div class="card">
  <div class="card-image">
  <img src="@/assets/core.jpg" class="main-image">
  </div>
  <div class="card-text">
    <br>
    <h2>CORE</h2>
    <p> <br> Core exercises are an important part of a well-rounded fitness program.</p>
  </div>
  <div class="card-stats">
    <div class="stat">      
      <div class="type"></div>
      <img src="@/assets/abs.png" class="png-image">
    </div>
    <div class="">
      <div class="value"></div>
      <div class="type"><br>20'</div>
    </div>
    <div class="value"><img src="@/assets/timer.png" class="timer-image"> </div>
  </div>
</div>
      
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
.card-text p {
  color: #939597;
  font-size:15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top:0px;
  font-size:28px;
  color:rgb(192,192,192)
}
.card-stats {
   
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background:	rgb(32,32,32)
}
.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding:10px;
}
.png-image{
  margin-top: 5px;
  width: 50px;
  height: 65px;
  padding-bottom: 15px;
}
.timer-image{
  width: 60px;
  height: 75px;
  padding-bottom: 5px;
}
</style>

