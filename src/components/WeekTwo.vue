<template>
    <div class="card text-white bg-secondary mb-3" style="max-width: 8rem;">
        <a :href="info.route"><div class="card-header">{{ info.title }}</div></a>
            <div class="card-body">
                <p class="card-text">{{info.desc}}</p>
            </div>
    </div>    
</template>

<script>
export default {
  props: ['info'],
  name: 'WeekTwo',
};
</script>

<style scoped>
.card-header{
  color:black;
}
/* .card{
      border: none;
}
.card:hover {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
} 
.card img{
       opacity: 1.0;
      width: 10rem;
}
.card img:hover{
  opacity: 0.8;
} */
/* .card .centered{
  color: rgb(255, 255, 255);     
  position: absolute;
  top: 45%;
  left: 42%;
} */
</style>