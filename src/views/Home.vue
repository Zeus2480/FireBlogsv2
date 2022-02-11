<template>
   <div class="home">
      <Navbar :loggedIn="loggedIn"></Navbar>
      <div>
         <div class="tw-h-screen tw-w-screen background-image tw-bg-gray-200">
            <div class="tw-flex tw-items-center tw-h-full">
               <div class="tw-mx-auto tw-my-auto tw-w-1/2">
                  <div class="tw-h-max">
                     <h1
                        class="tw-text-center tw-text-4xl tw-font-bold tw-text-black"
                     >
                        Raise your words, not your voice. It is rain that grows
                        flowers, not thunder.
                     </h1>
                     <p class="tw-text-center tw-text-xl tw-mt-6">
                        Discover the platform that gives you the freedom to
                        express yourself.
                     </p>
                     <div class="tw-flex tw-justify-center tw-mt-6">
                        <v-btn dark color="primary" large
                           ><router-link to="/login"
                              >Get Started</router-link
                           ></v-btn
                        >
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div
            class="tw-w-screen tw-h-screen second-part tw-flex tw-bg-gray-500"
         >
            <div class="tw-h-full tw-w-1/2">
               <div class="tw-flex tw-justify-center tw-items-center tw-h-full">
                  <div class="">
                     <h1
                        class="tw-text-white tw-font-bold tw-text-5xl tw-text-center"
                     >
                        Hang onto your memories
                     </h1>
                     <div class="tw-w-2/3  tw-mx-auto">
                        <p
                           class="tw-text-white tw-text-center tw-mt-6 tw-text-xl"
                        >
                           Save the moments that matter. Nothing is ever really
                           lost to us as long as we remember it.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tw-h-full tw-w-1/2">
               <div class="tw-flex tw-h-full tw-justify-center tw-items-center">
                  <div>
                     <img src="../assets/images/Group 116.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div class="tw-h-screen tw-w-screen third-part">
            <div class="tw-flex tw-justify-center tw-items-center tw-h-full">
               <div class="tw-w-1/3">
                  <h1
                     class="tw-text-center tw-text-white tw-font-bold tw-text-4xl"
                  >
                     Join millions of others
                  </h1>
                  <p class="tw-text-center tw-text-white tw-mt-3 tw-text-lg">
                     Whether sharing your expertise, breaking news, or
                     whatever’s on your mind, you’re in good company on Blogger.
                     Sign up to discover why millions of people have published
                     their passions here.
                  </p>
               </div>
            </div>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>

<script>
import Navbar from "../common/Navbar.vue";
// @ is an alias to /src

export default {
   props: ["loggedIn"],
   name: "Home",
   components: { Navbar },
};
</script>
<style scoped>
.background-image {
   background: url("../assets/images/pexels-pixabay-265152 1 (1).png");
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
}
.second-part {
   background-color: #bc382e;
}
.third-part {
   background: url("../assets/images/Group 118.png");
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
}
</style>
