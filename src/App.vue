<template>
<div id="app">
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/gymbo_logo.png" height="50" class="d-inline-block align-top" alt="" loading="lazy" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        <li v-if="!store.currentUser" class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/choose" class="nav-link">Choose</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/parameters" class="nav-link">Parameters</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/legsbeginner" class="nav-link">Legs B</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/chooseworkout" class="nav-link">ČUZ</router-link>
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
import router from "@/router";

firebase.auth().onAuthStateChanged((user) =>  {
  const currentRoute = router.currentRoute;

  if (user) {
    // User is signed in.
    console.log("****", user.email);
    store.currentUser = user.email;
  } else {
    // User is not signed in.
    console.log("***", "no user");
    store.currentUser = null;

    //if ( currentRoute.meta.needsUser) {
    //  router.push( { name: "login" }); }  //ovaj if je za home i korisnika
    
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
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
