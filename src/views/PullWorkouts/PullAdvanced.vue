<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <h1>Pull - advanced level</h1>
        <div class="video embed-responsive embed-responsive-16by9 mt-5">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/RjexvOAsVtI"
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
            <b-col> //image from options </b-col>
            <b-col>
              {{ option.workoutName }}
            </b-col>
            <b-col> {{ option.reps }} reps / {{ option.sets }} sets </b-col>
            <b-col>
              <b-form-checkbox
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="checkbox-status"
              >
                {{ option.status }}
              </b-form-checkbox>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-button pill variant="primary" class="mt-3">Finish workout</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { status: "Done", workoutName: "Barbell Deadlift", reps: "15", sets: "5" },
        { status: "Done", workoutName: "Bent Over Row", reps: "8", sets: "3" },
        { status: "Done", workoutName: "Dumbbell Shrugs", reps: "10", sets: "5"},
        { status: "Done", workoutName: "Standing Barbell Curls", reps: "12", sets: "5" },
        { status: "Done", workoutName: "Pull-ups", reps: "10", sets: "3" },
        { status: "Done", workoutName: "Incline Dumbbell Curl", reps: "10", sets: "5" },
        { status: "Done", workoutName: "One-arm Dumbbell Row", reps: "10", sets: "5" },
        { status: "Done", workoutName: "Chin Ups", reps: "15", sets: "5" },
      ],
    };
  },
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
</style>
