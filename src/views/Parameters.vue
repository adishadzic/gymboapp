<template>
  <div>
    <b-modal v-model="show" title="Getting started" centered>
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="12" class="mb-2">Please fill out the following</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col class="text-center">Age</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-age">Age</label>
              <b-form-input id="inline-form-input-age" placeholder="Enter your age" v-model="age" type="number" maxlenght="2"></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col class="text-center">Height</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-height">Height</label>
              <b-form-input id="inline-form-input-height" placeholder="Enter your height" v-model="height" type="number"></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="text-center">Weight</b-col>
          <b-col>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-weight">Weight</label>
              <b-form-input id="inline-form-input-weight" placeholder="Enter your weight" v-model="weight" type="number"></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="text-center">Goal</b-col>
          <b-col class="text-center">
            <b-form-select v-model="selectedGoal" :options="goals"></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="text-center">Level</b-col>
          <b-col class="text-center">
            <b-form-select v-model="selectedLevel" :options="levels"></b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <b-button pill variant="primary" size="sm" :disabled="
            !age || !height || !weight || !selectedGoal || !selectedLevel
          " @click="onLaceUp">Lace up!</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Parameters',
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
            name: "MyPlan",
            params: { level: "Beginner", goal: "Maintain healthy lifestyle" },
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
