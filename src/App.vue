<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/gymbo_logo.png" height="50" class="d-inline-block align-top" alt="" loading="lazy" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li v-if="store.currentUser" class="nav-item">
          <router-link to="/dashboard" class="nav-link text-light">dash</router-link>
        </li>
        <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/login" class="nav-link text-light">Login</router-link>
          </li>
        <li v-if="!store.currentUser" class="nav-item">
          <router-link to="/register" class="nav-link text-light">Register</router-link>
        </li>
        <li v-if="store.currentUser" class="nav-item">
          <img src="https://img.icons8.com/material/24/ffffff/bell.png" width="35" height="35"/>
        </li>
        <li v-if="store.currentUser" class="nav-item">
          <router-link to="/choose" class="nav-link text-light">Choose</router-link>
        </li>
         <li v-if="store.currentUser" class="nav-item">
          <router-link to="/parameters" class="nav-link text-light">Parameters</router-link>
        </li>
        <li v-if="store.currentUser" class="nav-item">
          <router-link to="/chooseworkout" class="nav-link text-light">ČUZZZZZZZ</router-link>
        </li>
        <li v-if="store.currentUser" class="nav-item">
          <a href="https://gymbofipu.wordpress.com/" target="_blank" class="nav-link text-light">Web shop</a>
        </li>
        <li class="mt-2">
          <p>({{store.currentUser}})</p>
        </li>
         <li v-if="store.currentUser" class="nav-item">
          <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
    
  </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";
import router from "@/router";

/* firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;

  console.log('Provjera stanja logina!');
  if (user) {
    // User is signed in.
    console.log(user.email);
    store.currentUser = user.email;

    if(!currentRoute.meta.needsUser) {
      router.push({ name: "Home" })
    }
  } else {
    // User is not signed in.
    console.log('No user');
    store.currentUser = null;


    if(currentRoute.meta.needsUser) {
      router.push({ name: "Login" })
    }
   if(router.name !== 'login'){
    router.push({ name: "Login" })
    } 
  }
});  */

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },

  mounted(){
    this.created();
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },

    created(){
      const self = this;
      firebase.auth().onAuthStateChanged((user) => {
        const currentRoute = router.currentRoute;
        
        console.log("Login checking");

        if (user){
          self.authenticated = true
          console.log("Current user - ", user.email)
          store.currentUser = user.email;
          db.collection("Users")
            .doc(self.store.currentUser)
            .get()
            .then(doc => {
              if (doc.exists){
                console.log("Document data: ", doc.data());
                store.displayName = doc.data().name;
                store.currentUser = doc.data().email;
                store.password = doc.data().password;
              }
              else{
                console.log("Document undefined");
              }
            });
        }else{
          console.log("User unknown");
          store.currentUser = null;
        }
      });
    },
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
  height: 140vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url('./assets/background.jpg');
  background-size: cover;
}

.navbar-nav{
  justify-content: end;
}
#nav {
  padding: 30px;
}


</style>
