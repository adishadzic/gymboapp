<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <h1>Core - beginner level</h1>
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
    <b-button pill variant="primary" class="mt-3" @click="clickToDashboard">Finish workout</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { status: "Done", workoutName: "Anti-rotational plate Push Away", reps: "45sec", sets: "4" },
        { status: "Done", workoutName: "Side-to-side Tilts", reps: "10", sets: "4" },
        { status: "Done", workoutName: "Up-down Plank", reps: "10", sets: "4"},
        { status: "Done", workoutName: "Plank Shoulder Taps", reps: "30sec", sets: "4" },
        { status: "Done", workoutName: "V-sits", reps: "30sec", sets: "4" },
        { status: "Done", workoutName: "Windshield Wipers", reps: "10", sets: "4" }
      ],
    };
  },
  methods: {
    clickToDashboard(){
      this.$router.push('/Dashboard');
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
</style>
