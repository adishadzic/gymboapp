zz<template>
  <div class="about">
    <h1>Login</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputUsername">Email</label>
              <input type="email"
                     v-model="username" 
                     class="form-control"
                     id="exampleInputUsername" 
                     aria-describedby="emailHelp"
                     required 
                     placeholder="Enter your email" />
            </div>
            <div  class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password"
                     v-model="password" 
                     class="form-control"
                     id="exampleInputPassword1"
                     required 
                     placeholder="Password">
            </div>
            <div v-if="passwordCheck==false" class="text-danger">The password is invalid</div>
            <button type="button" @click="login()" class="btn btn-primary fb-send">Login</button>
            <br>
            <div class="mt-5">
              
							<button type="button"	@click="logInWithGoogle()"	class="btn btn-dark">
               <img src="@/assets/google.png" class="google-logo" height="22">
								Sign in with Google
							</button>
						</div><br>
						<p class="forgot-password">
							You don't have an account?
							<router-link :to=" {name: 'Register' }">Register</router-link>
						</p>
						<div v-show="errorMessage" class="alert alert-danger" role="alert">
							{{ errorMessage }}
						</div>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from '@/firebase';

export default {
    name: "login",
    data() {
      return {
        username: "",
        password: "",
        passwordCheck:true,
        errorMessage: "",
        
      };
    },
    methods: {
      login() {
        var check=this;
        console.log("login.." + this.username);
       
        firebase
            .auth()
            .signInWithEmailAndPassword(this.username, this.password)
            .then((result) => {
              console.log("uspjesna prijava", result);
              check.passwordCheck=true;
              this.$router.replace({name: "Home" });
            })
            
             
            .catch(function(e) {
              console.error( "greska", e);
              //alert("Korisnik ne postoji");
              check.passwordCheck=false;
              
            });
      },
      logInWithGoogle() {
        var check=this;
        console.log("Login with Google");
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase     
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                      store.currentUser = result.additionalUserInfo.profile.email;
                      this.$router.replace ({ name: "Home" });
                      store.token = result.credential.accessToken;
                })
                .catch(function(e) {
              console.error( "greska", e);
				});
    },
    }
     
}

</script>

<style>
h1{
  margin-top: 20px;
}
.text-danger{
  margin-top: 0px;
  margin-bottom:20px;
  font-size: 13px;
}

</style>