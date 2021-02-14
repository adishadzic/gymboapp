<template>
  <div class="about">
    <h1>Registration</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            
            <div class="form-group">
              <label form="fullName">Full name</label>
              <input type="text" v-model="name" class="form-control basic-input" id="name" name="name" placeholder="e.g. John Doe"/>
            </div>
            <div class="form-group">
              <label for="emailField">Email</label>
              <input type="email" v-model="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="e.g. johndoe@gmail.com">
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" required>
              <div v-if="password.length <7 " class="text-danger"> Password must contain at least 7 characters </div>
            </div>
            <div class="form-group">
              <label for="passwordField">Confirm Password</label>
              <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" placeholder="Confirm password" required>
              <div v-if="confirmPassword != password" class="text-danger">Passwords must match</div>
            </div>
            <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="TermsCheck"
              id="TermsCheck"
              v-model="TermsCheck.accept"
            >
            <label for="terms"> I have read and accept the terms and conditions </label>
          </div>
            <button type="button" @click="register()" class="btn btn-primary mt-5">Proceed</button>
            
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
import { db } from '@/firebase';
import store from '@/store';

export default {
  name: 'Register',
  data() {
    return {   
      name: "",  
      email: '',
      password: '',
      confirmPassword: "",
      passwordCheck:true,  
      TermsCheck:{
        accept: false,
      },    
    };
  },
  methods: {
    register() {
      let id = this.email;
      if(this.TermsCheck.accept){
      let that = this;
      if(this.password == this.confirmPassword ){
        
      firebase
      .auth()
      .createUserWithEmailAndPassword(that.email, that.password) 
      .then(function()   {
          db.collection("Users").doc(id).set({
            name: that.name, 
            email: that.email,
            password: that.password
          })
          .then((doc) => {
            console.log("Saved", doc)
          })
          .catch(function(error){
            console.error("An error occured", error)
          });

          store.displayName = that.name;
          store.currentUser = that.email;
          store.password = that.password;
              //alert('Uspješna registracija');
              that.$router.replace({name: "Parameters" });  
        })
        .catch(function(error){
          console.error("An error occured", error)
        })

      /* .then((user) => {
        firebase 
          .auth()
          .currentUser.updateProfile({ displayName: this.fullName });
        this.verifyEmail();
      }) */
      /* .then(() => {
        this.fullName = "";
        this.email = "";
        this.password = "";
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert("Potrebno je verificirati e-mail prije korištenja aplikacije pomoću poslanog linka.")
            this.$router.push({ name: "Login" });
          });
      }) */
       /*  .catch(function() {
          alert('Korisnik već postoji');/-
        }); */
      /* console.log('Nastavak');
      } */
    }
    else {
      this.passwordCheck=false;
      alert("Passwords don't match");
      
      }
    }
      else {
        this.TermsCheck.accept == false;
        alert("You have to accept Terms of service!");
      }
    },
    /* verifyEmail() {
      firebase  
        .auth()
        .currentUser.sendEmailVerification()
        .then(function () {
          //verification email sent
          console.log("Verification email sent");
        })
        .catch(function (error) {
          //Error occured. Inspect error.code.
          console.error("verifyError " + error);
        });
    } */
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