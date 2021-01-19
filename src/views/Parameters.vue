<template>
  <div>
    <b-modal v-model="show" title="Getting started" centered>
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col style="display: flex">Please fill out the following</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col class="ml-5">Age</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-age">Age</label>
              <b-form-input
                class="mr-4"
                id="inline-form-input-age"
                placeholder="Enter your age"
                v-model="age"
              ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col class="ml-5">Height</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-height"
                >Height</label
              >
              <b-form-input
                class="mr-4"
                id="inline-form-input-height"
                placeholder="Enter your height"
                v-model="height"
              ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="ml-5">Weight</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-weight"
                >Weight</label>
              <b-form-input
                class="mr-4"
                id="inline-form-input-weight"
                placeholder="Enter your weight"
                v-model="weight"
              ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="ml-5">Goal</b-col>
          <b-col class="mr-5">
            <b-form-select
              v-model="selectedGoal"
              :options="goals"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="ml-5">Level</b-col>
          <b-col class="mr-5">
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
        { text: "Select an option", value: null },
        { text: "Maintain healthy lifestyle", value: "goal1" },
        { text: "Lose weight", value: "goal2" },
        { text: "Put on muscle mass", value: "goal3" },
      ],
      levels: [
        { text: "Select an option", value: null },
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
          this.$router.push({
            name: "view",
            params: { level: "Beginer", goal: "Maintain healthy lifestyle" },
          });
        } else if (selectedLevel === "level2") {
          this.$router.push({
            name: "view",
            params: { level: "Advanced", goal: "Maintain healthy lifestyle" },
          });
        } else if (selectedLevel === "level3") {
          this.$router.push({
            name: "view",
            params: { level: "Intermediate", goal: "Maintain healthy lifestyle" },
          });
        } else {
          console.error("No levels");
        }
      } else if (selectedGoal === "goal2") {
        if (selectedLevel === "level1") {
          this.$router.push({
            name: "view",
            params: { level: "Beginer", goal: "Lose weight" },
          });
        } else if (selectedLevel === "level2") {
          this.$router.push({
            name: "view",
            params: { level: "Advanced", goal: "Lose weight" },
          });
        } else if (selectedLevel === "level3") {
          this.$router.push({
            name: "view",
            params: { level: "Intermediate", goal: "Lose weight" },
          });
        } else {
          console.error("No levels");
        }
      } else if (selectedGoal === "goal3") {
        if (selectedLevel === "level1") {
             this.$router.push({
            name: "view",
            params: { level: "Beginer", goal: "Put on muscle mass" },
          });
        } else if (selectedLevel === "level2") {
             this.$router.push({
            name: "view",
            params: { level: "Advanced", goal: "Put on muscle mass" },
          });
        } else if (selectedLevel === "level3") {
             this.$router.push({
            name: "view",
            params: { level: "Intermediate", goal: "Put on muscle mass" },
          });
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
