<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <h1>Legs - intermediate level</h1>
        <div class="video embed-responsive embed-responsive-16by9 mt-5">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/WdGmrNcnapY"
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
            <b-col><img class="image" :src="option.img" /></b-col>
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
        { img: require('@/assets/jumpSquat.png'), status: "Done", workoutName: "Jump Squats", reps: "12", sets: "3" },
        { img: require('@/assets/touchdownJacks.png'), status: "Done", workoutName: "Touchdown Jacks", reps: "12", sets: "3" },
        { img: require('@/assets/stepUp.png'), status: "Done", workoutName: "Step-up", reps: "10", sets: "3"},
        { img: require('@/assets/curtsyLunge.png'), status: "Done", workoutName: "Curtsy Lunge", reps: "10", sets: "3" },
        { img: require('@/assets/hipThrust.png'), status: "Done", workoutName: "Hip Thrust", reps: "10", sets: "3" },
        { img: require('@/assets/splitSquat.png'), status: "Done", workoutName: "Split Squat", reps: "12", sets: "3" },
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
