<template>
  <div class="about">
    <h1>Registration</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input type="email" v-model="username" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input type="password" v-model="password" class="form-control" id="passwordField" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="confirmPasswordField">Confirm Password</label>
              <input type="password" v-model="passwordConfirm" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
            </div>
            <button type="button" @click="register" class="btn btn-primary mt-5">Proceed</button>
          </form>
        </div>
        <div class="col-sm">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from '@/firebase';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    register() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.username, this.password)
      .then(function() {
            console.log('Uspješna registracija');
        }).catch(function() {
          console.error('Došlo je do greške, error')
        });
      console.log('Nastavak');
    },
  },

}
</script>

<style>
h1{
  margin-top: 20px;
}
</style>