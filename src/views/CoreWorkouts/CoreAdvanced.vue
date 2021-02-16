<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <h1>Core - advanced level</h1>
        <div class="video embed-responsive embed-responsive-16by9 mt-5">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/-hqYWRib5y8"
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
        { img: require('@/assets/plankJacks.png'), status: "Done", workoutName: "Anti-rotational plate Push Away", reps: "45sec", sets: "4" },
        { img: require('@/assets/squats.png'), status: "Done", workoutName: "Side-to-side Tilts", reps: "10", sets: "4" },
        { img: require('@/assets/squats.png'), status: "Done", workoutName: "Up-down Plank", reps: "10", sets: "4"},
        { img: require('@/assets/squats.png'), status: "Done", workoutName: "Plank Shoulder Taps", reps: "30sec", sets: "4" },
        { img: require('@/assets/squats.png'), status: "Done", workoutName: "Advanced Leg Raise", reps: "30sec", sets: "4" },
        { img: require('@/assets/squats.png'), status: "Done", workoutName: "Windshield Wipers", reps: "10", sets: "4" }
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
