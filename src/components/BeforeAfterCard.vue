<template>
     <div class="col-6">
  <div class="card text-center">
  <!-- <div class="card-header">
    {{info.desc}}askdasdljkads
  </div> -->
  <div class="card-body p-0">
    <img class="card-img-top" :src="info.url">
  </div>
  <div class="card-footer text-muted">
   {{postedFromNow}} , {{info.description}}
  </div>
</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
    props: ["info"],
    name: "BeforeAfterCard",
    computed: {
        postedFromNow(){
            return moment(this.info.time).fromNow();
    },
    },
};
</script>

<style scoped>
.card-header{
    height: 49px;
}
</style>