<template>
    <nav class="navbar">
      <div class="container">
    <router-link class="custom-link" to="/">Mobile Store</router-link>
   

  
   </div>
   
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
      border-bottom: 1px solid #5c5b5b;
      padding: 30px;
      margin-bottom: 2rem;
    }

 .custom-link {
      margin-right: 2rem;
    }

    .custom-link:hover {
      text-decoration: underline;
    }

nav {
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
