<template>
<div class="app">
<div class="row">
  <div class="card" >
    <div class="card-image">
      <img src="@/assets/push1.jpg" class="main-image">
    </div>
    <div class="card-text">
      <br>
      <div class="myDIV">
        <h2>PUSH</h2>
      </div>
      <div class="hide">   <br>Legs workout - these workouts target your quads, hamstrings, gluteus and calves.
        3 levels: Beginner, Intermediate, Advanced.
        Program duration depends on level you choose; typically 3 weeks. 
        Workout timer: 45-60min
        Required equipment: none (bodyweight) or dumbbells/kettlebells.
      </div>
    </div>
  </div>
  <div class="row">
    <div class="card">
      <div class="card-image">
        <img src="@/assets/pull2.jpg" class="main-image">
      </div>
      <div class="card-text">
        <br>
        <div class="myDIV">
          <h2>PULL</h2>
        </div>
        <div class="hide">  <br> <br> meaning the work is done when the muscle contracts when you pull.</div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="card" >
    <div class="card-image">
      <img src="@/assets/push1.jpg" class="main-image">
    </div>
    <div class="card-text">
      <br>
      <div class="myDIV">
        <h2>PUSH</h2>
      </div>
      <div class="hide">   <br>Legs workout - these workouts target your quads, hamstrings, gluteus and calves.
        3 levels: Beginner, Intermediate, Advanced.
        Program duration depends on level you choose; typically 3 weeks. 
        Workout timer: 45-60min
        Required equipment: none (bodyweight) or dumbbells/kettlebells.
      </div>
    </div>
  </div>
  <div class="row">
    <div class="card">
      <div class="card-image">
        <img src="@/assets/pull2.jpg" class="main-image">
      </div>
      <div class="card-text">
        <br>
        <div class="myDIV">
          <h2>PULL</h2>
        </div>
        <div class="hide">  <br> <br> meaning the work is done when the muscle contracts when you pull.</div>
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
  background: none;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  text-align: center;
  width: 210px;
  height: 300px;
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
  height: 300px;
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
  font-size:40px;
  color:rgb(255, 255, 255)
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

.hide {
  display: none;

}

.myDIV:hover + .hide {
  display: block;
  color: grey;
}

</style>
