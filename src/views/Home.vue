<template>
   <div class="home">
      <Navbar :loggedIn="loggedIn"></Navbar>
   
   </div>
</template>

<script>
import Navbar from '../common/Navbar.vue';
// @ is an alias to /src

export default {
   props:['loggedIn'],
   name: "Home",
   components: {Navbar},
};
</script>
