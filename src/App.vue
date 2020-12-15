<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/gymbo_logo.jpeg" height="50" class="d-inline-block align-top" alt="" loading="lazy" />
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
          <router-link to="/signup" class="nav-link">Signup</router-link>
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
}

.navbar{
  background-color: black;
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
