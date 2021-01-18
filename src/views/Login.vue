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
                     placeholder="Enter username" />
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
            <button type="button" @click="login()" class="btn btn-primary">Get ripped</button>
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
      }
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