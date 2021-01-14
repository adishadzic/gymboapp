<template>
    <div class="intro">
      <h1>Legs beginner</h1>
    <div class="container">
      <div class="row">
    <div class="col">
      <h5>Workout video</h5>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2m89AUgTxFk" allowfullscreen></iframe>
      </div>
    </div>
    
<div class="col">
      <h5 class="title">Exercise agenda</h5>
      <br>
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        class="check"
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-3a"
        stacked
      >
        {{ option.text }} 
      </b-form-checkbox>
    </b-form-group>
    <b-button pill variant="primary" class="mt-3">Finish workout</b-button>
    <br>
    </div>
    </div>
  </div>
  <b-container class="mt-4">
      <b-row align-h="center">
        <b-col cols="12" md="6">
          <b-row style="border: 1px solid;" no-gutters>
            <b-col>
              an image/thumbnail
            </b-col>
            <b-col>
              Pull ups
            </b-col>
            <b-col>
              Workout:
              <br>
              8 reps
              <br>
              3 sets
            </b-col>
            <b-col>
              check
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
</div>

</template>

<script>
  export default {
    data() {
      return {
        status: [],
         options: [
          { text: 'Squats 20x3', value: 'not_done' },
          { text: 'Walking lunges 15x4', value: 'not_done' },
          { text: 'Split squat 12x4', value: 'not_done' },
          { text: 'Lateral walk 30secx4', value: 'not_done' },
          { text: 'Step-up 15x4', value: 'not_done' },
          { text: 'Calf raise 20x3 ', value: 'not_done' },
          { text: 'FINISHER: ', value:'not_done'}
        ]       
      }
    }
  }
</script>

<style>
  .check{
    text-align: left;
    right: 65%;
    left: 35%;
  }
</style>