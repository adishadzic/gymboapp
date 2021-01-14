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
      <h5>Exercise agenda</h5>
      <br>
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-3a"
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>
    <br>
    </div>
    </div>
  </div>
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
          { text: 'Calf raise 20x3 ', value: 'not_done' }
        ]       
      }
    }
  }
</script>

<style>
  .col{
    margin-top: 20px;
  }
  .cta{
    margin-top: 30px;
  }
</style>