<template>
  <div>
    <b-button @click="show=true" variant="primary">Show Modal</b-button>
    <b-modal v-model="show" title="Getting started">

      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col>Please fill out the following to continue with your journey</b-col>
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
                 ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row class="mb-1">
        <b-col cols="3">Height</b-col>
         <b-col>
            <b-form inline>
            <label class="sr-only" for="inline-form-input-height">Height</label>
                 <b-form-input
                  id="inline-form-input-height"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Enter your height"
                 ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Weight</b-col>
           <b-col>
            <b-form inline>
            <label class="sr-only" for="inline-form-input-weight">Weight</label>
                 <b-form-input
                  id="inline-form-input-weight"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Enter your weight"
                 ></b-form-input>
            </b-form>
          </b-col>
        </b-row>

         <b-row>
          <b-col cols="3">Goal</b-col>
          <b-col>
            <b-form-select
              :options="goals"
            ></b-form-select>
          </b-col>
        </b-row>

         <b-row>
          <b-col cols="3">Level</b-col>
          <b-col>
            <b-form-select
              :options="levels"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Lace up!
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        goals: ['Maintain healthy lifestyle', 'Lose weight', 'Put on muscle mass'],
        levels: ['Beginner', 'Advanced', 'Intermediate'],
      }
    }
  }
</script>
