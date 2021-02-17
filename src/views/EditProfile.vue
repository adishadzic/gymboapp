<template>
<div class="app">
  <br>
  <b-container fluid class="container mt-4">
    <b-row class="d-flex inline-flex justify-content-start">
      <b-col class="mr-4 ml-3 mt-3">
        <img :src="store.userPicture"  alt="profile pic" class="avatar">
        <h3 class="mt-3">{{ store.displayName }}</h3>
        <h5 class="mt-3 text-secondary">{{ store.currentUser }}</h5>
      </b-col>
      <b-col cols="7">
        <h1 class="mb-4">User information</h1>
        <div class="form-group row">
          <label for="statitName" class="col-sm-2 col-form-label">Full name</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control" id="staticName" :value="store.displayName">
          </div>
        </div>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control" id="staticEmail" :value="store.currentUser">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="row ml-3">
            <input readonly class="form-control" id="inputPassword" placeholder="Password" :value="store.password">
            <button type="button" @click="resetPw()" class="btn btn-danger mt-3 mr-4">Send password reset email</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>

</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";

export default {
    name: 'EditProfile',
    data() {
        return{
            store,
        }
    },
    methods: {
        resetPw(){
            const auth = firebase.auth();
            auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
                alert("Email sent. Check your inbox")
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script> 

<style scoped>
.container {
  margin-left: -150px;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>