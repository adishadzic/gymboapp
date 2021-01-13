<template>
  <div class="app">
    <b-modal v-model="show" title="Getting started">
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col
            >Please fill out the following to continue with your journey</b-col
          >
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Age</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-age">Age</label>
              <b-form-input
                id="inline-form-input-age"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Enter your age"
                v-model="age"
              ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Height</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-height"
                >Height</label
              >
              <b-form-input
                id="inline-form-input-height"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Enter your height"
                v-model="height"
              ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Weight</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-weight"
                >Weight</label
              >
              <b-form-input
                id="inline-form-input-weight"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Enter your weight"
                v-model="weight"
              ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Goal</b-col>
          <b-col>
            <b-form-select
              v-model="selectedGoal"
              :options="goals"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Level</b-col>
          <b-col>
            <b-form-select
              v-model="selectedLevel"
              :options="levels"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <b-button
          pill
          variant="primary"
          size="sm"
          class="float-right"
          :disabled="
            !age || !height || !weight || !selectedGoal || !selectedLevel
          "
          @click="onLaceUp"
          >Lace up!</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      age: null,
      height: null,
      weight: null,
      selectedGoal: null,
      selectedLevel: null,
      goals: [
        { text: "Please select an option", value: null },
        { text: "Maintain healthy lifestyle", value: "goal1" },
        { text: "Lose weight", value: "goal2" },
        { text: "Put on muscle mass", value: "goal3" },
      ],
      levels: [
        { text: "Please select an option", value: null },
        { text: "Beginner", value: "level1" },
        { text: "Advanced", value: "level2" },
        { text: "Intermediate", value: "level3" },
      ],
    };
  },
  methods: {
    onLaceUp() {
      const selectedLevel = this.selectedLevel;
      const selectedGoal = this.selectedGoal;

      if (selectedGoal === "goal1") {
        if (selectedLevel === "level1") {
          this.$router.push("/MBeginner");
        } else if (selectedLevel === "level2") {
          this.$router.push("/MAdvanced");
        } else if (selectedLevel === "level3") {
          this.$router.push("/MIntermediate");
        } else {
          console.error("No levels");
        }
      } else if (selectedGoal === "goal2") {
        if (selectedLevel === "level1") {
          this.$router.push("/LBeginner");
        } else if (selectedLevel === "level2") {
          this.$router.push("/LAdvanced");
        } else if (selectedLevel === "level3") {
          this.$router.push("/LIntermediate");
        } else {
          console.error("No levels");
        }
      } else if (selectedGoal === "goal3") {
        if (selectedLevel === "level1") {
          this.$router.push("/PBeginner");
        } else if (selectedLevel === "level2") {
          this.$router.push("/PAdvanced");
        } else if (selectedLevel === "level3") {
          this.$router.push("/PIntermediate");
        } else {
          console.error("No levels");
        }
      } else {
        console.error("No goals");
      }
    },
  },
};
</script>


