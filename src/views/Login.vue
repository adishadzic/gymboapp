<template>
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
                     placeholder="Password" />
               <div v-if="password.lenght >1 && password.lenght <7 " class="text-danger">Password lenght should be grater than 6</div>
            </div>
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
      };
    },
    methods: {
      login() {
        console.log("login.." + this.username);

        firebase
            .auth()
            .signInWithEmailAndPassword(this.username, this.password)
            .then((result) => {
              console.log("uspjesna prijava", result);

              this.$router.replace({name: "Home" });
            })
            .catch(function(e) {
              console.error( "greska", e);
              alert("Korisnik ne postoji");
            });
      }
    }
}

</script>

<style>
h1{
  margin-top: 20px;
}
</style>