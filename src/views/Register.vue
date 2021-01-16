<template>
  <div class="about">
    <h1>Registration</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            
            
            <div class="form-group">
              <label for="emailField">Email</label>
              <input type="username" v-model="username" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter your email here...">
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" required>
              <div v-if="password.length <7 " class="text-danger"> Password must contain at least 7 characters </div>
            </div>
            <div class="form-group">
              <label for="passwordField">Confirm Password</label>
              <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" placeholder="Password" required>
              <div v-if="confirmPassword != password" class="text-danger">Passwords must don't match</div>
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
      confirmPassword: "",
      passwordCheck:true,      
    };
  },
  methods: {
    register() {
      let that = this;
      if(this.password == this.confirmPassword){
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.username, this.password) 
      .then(function()   {
              //alert('Uspješna registracija');
              that.$router.replace({name: "Home" });  
        })
        .catch(function() {
          alert('Korisnik već postoji');
        });
      console.log('Nastavak');
    }
    else{
      this.passwordCheck=false;
      alert("Passwords don't match");
      }
    },
  },
}
</script>

<style>
.h1{
  margin-top: 20px;
}
.text-danger{
  margin-top:8px;
  font-size: 13px;
}
</style>