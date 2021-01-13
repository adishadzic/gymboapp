<template>
    <div class="intro">
      <h1>Legs beginner</h1>
    <div class="container">
      <div class="row">
    <div class="col">
      <h5>Workout video</h5>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=N5PN7G06pKg" allowfullscreen></iframe>
      </div>
    </div>
    
<div class="col">
      <h5>Exercise agenda</h5>
      <br>
      <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="done"
      unchecked-value="Not done"
    >
      Squats 20x3 ( State: <strong>{{ status }}</strong> )
    </b-form-checkbox>
    <br>
     <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="done"
      unchecked-value="Not done"
    >
      Walking lunges 15x4 ( State: <strong>{{ status }}</strong> )
    </b-form-checkbox>
    <br>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="done"
      unchecked-value="Not done"
    >
      Split squat 12x4 ( State: <strong>{{ status }}</strong> )
    </b-form-checkbox>
    <br>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="done"
      unchecked-value="Not done"
    >
      Lateral walk 30secx4 ( State: <strong>{{ status }}</strong> )
    </b-form-checkbox>
    <br>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="done"
      unchecked-value="Not done"
    >
      Step-up 15x4 ( State: <strong>{{ status }}</strong> )
    </b-form-checkbox>
    <br>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="done"
      unchecked-value="Not done"
    >
      Calf raise 20x3 ( State: <strong>{{ status }}</strong> )
    </b-form-checkbox>
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
        status: 'Not done'
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