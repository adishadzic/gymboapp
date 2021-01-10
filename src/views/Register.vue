<template>
  <div class="about">
    <h1>Registration</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            
            
            <div class="form-group">
              <label for="emailField">Username</label>
              <input type="username" v-model="username" class="form-control" id="usernameField" aria-describedby="usernameHelp" placeholder="e.g. anyNicknameInTheWorld" required>
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" required>
              <div v-if="password.lenght >1 && password.lenght <7 " class="text-danger"> Password lenght should be grater than 6 </div>
            </div>
            <div class="form-group">
              <label for="passwordField">Confrim Password</label>
              <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" placeholder="Password" required>
              
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
      email: '',
      password: '',      
    };
  },
  methods: {
    register() {
      let that = this;
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.username, this.password) //pokusaj nac neki uvjet prijave da koristi sve nase podatke
      .then(function()   {
              //alert('Uspješna registracija');
              that.$router.replace({name: "Home" });  
        })
        .catch(function() {
          alert('Korisnik već postoji');
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