<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <h1>Pull - advanced level</h1>
        <div class="video embed-responsive embed-responsive-16by9 mt-5">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/vKp7uvH2gjQ"
            allowfullscreen
          ></iframe>
        </div>
      </b-col>
    </b-row>

    <b-container id="agenda">
      <b-row align-h="center">
        <b-col cols="12" md="6">
          <b-row
            style="border: 1px solid"
            no-gutters
            v-for="(option, data) in options"
            :key="data"
          >
            <b-col><img class="image" :src="option.img"/></b-col>
            <b-col id="workoutName">{{ option.workoutName }}</b-col>
            <b-col id="repsAndsets"> {{ option.reps }} reps / {{ option.sets }} sets </b-col>
            <b-col id="box">
              <b-form-checkbox>{{ option.status }}</b-form-checkbox>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-button pill variant="primary" class="mt-3" @click="clickToDashboard">Finish workout</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { img: require('@/assets/barbellDeadlift.png'), status: "Done", workoutName: "Barbell Deadlift", reps: "15", sets: "5" },
        { img: require('@/assets/bentOverRows.png'), status: "Done", workoutName: "Bent Over Row", reps: "8", sets: "3" },
        { img: require('@/assets/shrugs.png'), status: "Done", workoutName: "Dumbbell Shrugs", reps: "10", sets: "5"},
        { img: require('@/assets/curls.png'), status: "Done", workoutName: "Standing Barbell Curls", reps: "12", sets: "5" },
        { img: require('@/assets/pullUps.png'), status: "Done", workoutName: "Pull-ups", reps: "10", sets: "3" },
        { img: require('@/assets/inclineCurls.png'), status: "Done", workoutName: "Incline Dumbbell Curl", reps: "10", sets: "5" },
        { img: require('@/assets/oneArmRows.png'), status: "Done", workoutName: "One-arm Dumbbell Row", reps: "10", sets: "5" },
        { img: require('@/assets/chinUps.png'), status: "Done", workoutName: "Chin Ups", reps: "15", sets: "5" },
      ],
    };
  },
  methods: {
    clickToDashboard(){
      this.$router.push('/dashboard/overview');
    }
  }
};
</script>

<style>
.check {
  text-align: left;
  right: 65%;
  left: 35%;
  max-width: 440px;
}
#agenda {
  margin-top: 20px;
}
.image{
  width: 130px;
}
#workoutName, #repsAndsets, #box{
  margin: auto;
}
</style>
