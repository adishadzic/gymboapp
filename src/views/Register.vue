<template>
  <div class="about">
    <h1>Registration</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="emailField">Full name</label>
              <input type="fullName" v-model="fullName" class="form-control" id="fullNameField" aria-describedby="fullNameHelp" placeholder="e.g. Name Surname">
            </div>
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input type="email" v-model="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="emailField">Username</label>
              <input type="username" v-model="username" class="form-control" id="usernameField" aria-describedby="usernameHelp" placeholder="e.g. anyNicknameInTheWorld">
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input type="password" v-model="password" class="form-control" id="passwordField" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="confirmPasswordField">Confirm Password</label>
              <input type="password" v-model="passwordConfirm" class="form-control" 
              id="confirmPasswordField" placeholder="Confirm password">
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
      fullName: '',
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    register() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.username, this.password) //pokusaj nac neki uvjet prijave da koristi sve nase podatke
      .then(function() {
            alert('Uspješna registracija');
        }).catch(function() {
          alert('Došlo je do greške, error');
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