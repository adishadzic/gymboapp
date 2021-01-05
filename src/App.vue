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
        <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/choose" class="nav-link">Choose</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/parameters" class="nav-link">Parameters</router-link>
        </li>
      </ul>
    </div>
    
  </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
  height:100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url('./assets/background.jpg');
  background-size: cover;
}

.navbar{
  background-color:linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
}
.navbar-nav{
  justify-content: end;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
