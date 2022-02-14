<template>
<v-app>
      <router-view></router-view>

</v-app>

    

   
</template>

<style>

.v-application--wrap {
  min-height: unset !important;
}
.v-application a{
  color: unset !important;
}
.v-application p {
   margin-bottom: unset !important;
}
#app{
  text-align: unset !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
