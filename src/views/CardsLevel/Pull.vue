<template>

<div class="container">
<div class="wrapper">
<div class="row">
    <div class="card">
      <img class="img" src="@/assets/pull6.jpg">
      <div class="info">
        <h1>BEGINNER</h1>
        <p>Workouts that target your chest, shoulders and triceps.</p>
        <b-button pill variant="primary" class="btn" @click="goToPullB">GO TO</b-button>
      </div>
    </div>
</div> 

<div class="row">
    <div class="card">
      <img class="img" src="@/assets/pull3.jpg">
      <div class="info">
        <h1>INTERMEDIATE</h1>
        <p>Workouts that target your chest, shoulders and triceps.</p>
        <b-button pill variant="primary" class="btn" @click="goToPullI">GO TO</b-button>
      </div>
    </div>
</div>

<div class="row">
    <div class="card">
      <img class="img" src="@/assets/pull5.jpg">
      <div class="info">
        <h1>ADVANCED</h1>
        <p>Workouts that target your chest, shoulders and triceps.</p>
        <b-button pill variant="primary" class="btn" @click="goToPullA">GO TO</b-button>
      </div>
    </div>
</div>

</div>
</div>  
</template>

<script>
export default {
   methods: {
        goToPullB (){
            this.$router.push("/PullBeginner");
        },
        goToPullI (){
            this.$router.push("/PullIntermediate");
        },
        goToPullA (){
            this.$router.push("/PullAdvanced");
        },
    } 
}
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
}

template{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
}

.container{
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
}

.wrapper{
  display: flex;
  width: 70%;
  justify-content: space-around;
}

.card{
  width: 280px;
  height: 360px;
  padding: 2rem 1rem;
  background: rgb(58, 58, 58);
  position: relative;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 7px 10px rgb(0, 0, 0, 0.5);
  transition: 0.5 ease-in-out;
  margin-bottom: 80px;
  border-radius: 18px;
  margin-left: 40px;
  margin-right: 40px;
}

.card:hover{
  transform: translateY(20px);
}

.card:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(78, 78, 78, 0.5),rgb(0, 0, 0));
  z-index: 2;
  transition: 0.5s all;
  opacity: 0;
  border-radius: 18px;
}

.card:hover:before{
  opacity: 1;
}

.card img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 18px;
}

.card .info{
  position: relative;
  left: 0;
  z-index: 3;
  color: rgb(207, 207, 207);
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5 all;
  padding-top: 165px;
  
}

.card:hover .info{
  opacity: 1;
  transform: translateY(0px);
}

.card:hover .info h1{
    font-size: 2rem;
}

.card.info h1{
  margin: 0;
  color: rgb(100, 100, 100);
}

.card .info p{
  letter-spacing: 1px;
  font-size: 11px;
  margin-top: 8px;
  margin-bottom: 10px;
  color: rgb(143, 143, 143);
}

.card .info .btn{
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: rgb(51, 51, 51);
  color: #000;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease-in-out;

}

.card .info .btn:hover{
  box-shadow: 0px 4px 4px rgba(49, 49, 49, 0.5);
}

.row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

</style>