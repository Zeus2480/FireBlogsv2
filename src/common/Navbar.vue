<template>
   <v-app>
      <div>
         <div>
            <v-navigation-drawer
               v-model="drawer"
               fixed
               temporary
               right
               width="350px"
            >
               <div
                  class="tw-bg-navy-blue tw-min-w-full tw-min-h-full tw-text-white"
               >
                  <div
                     class="tw-flex tw-flex-col tw-pt-12 tw-mx-auto tw-w-full"
                  >
                     <div class="image tw-mx-auto tw-my-4">
                        <img
                           src="../assets/images/profilepicture.jpg"
                           class="tw-rounded-full tw-h-24"
                           alt=""
                        />
                     </div>
                     <div class="name tw-mx-auto tw-mb-2">
                        <h1 class="tw-font-semibold tw-text-xl">Hey Faizan</h1>
                     </div>
                     <div class="tw-flex-col tw-flex tw-w-full tw-items-center">
                        <div
                           class="btn1 tw-flex tw-justify-center tw-my-2 tw-w-4/5"
                        >
                           <router-link
                              to="EditProfile"
                              class="tw-rounded-md tw-w-full tw-text-center tw-py-2 hover:tw-bg-nav-sec-hover tw-px-full tw-bg-nav-sec tw-text-base tw-font-medium"
                              >Edit Profile</router-link
                           >
                        </div>
                        <div
                           class="btn1 tw-flex tw-justify-center tw-my-2 tw-w-4/5"
                        >
                           <router-link
                              to="Createblog"
                              class="tw-rounded-md tw-w-full tw-text-center tw-py-2 hover:tw-bg-nav-sec-hover tw-px-full tw-bg-nav-sec tw-text-base tw-font-medium"
                              >Create Blog</router-link
                           >
                        </div>
                        <div
                           class="btn1 tw-flex tw-justify-center tw-my-2 tw-w-4/5"
                        >
                           <router-link
                              to="#"
                              class="tw-rounded-md tw-w-full tw-text-center tw-py-2 hover:tw-bg-nav-sec-hover tw-px-full tw-bg-nav-sec tw-text-base tw-font-medium"
                              >Statistics</router-link
                           >
                        </div>
                        <div
                           class="btn1 tw-flex tw-justify-center tw-my-2 tw-w-4/5"
                        >
                           <router-link
                              to="#"
                              class="tw-rounded-md tw-w-full tw-text-center tw-py-2 hover:tw-bg-nav-sec-hover tw-px-full tw-bg-nav-sec tw-text-base tw-font-medium"
                              >Reading List</router-link
                           >
                        </div>
                        <div
                           class="btn1 tw-flex tw-justify-center tw-my-2 tw-w-4/5"
                        >
                           <router-link
                              to="#"
                              class="tw-rounded-md tw-w-full tw-text-center tw-py-2 hover:tw-bg-nav-sec-hover tw-px-full tw-bg-nav-sec tw-text-base tw-font-medium"
                              >Following</router-link
                           >
                        </div>
                        <div
                           class="btn1 tw-flex tw-justify-center tw-my-2 tw-w-4/5"
                        >
                           <router-link
                              to="#"
                              class="tw-rounded-md tw-w-full tw-text-center tw-py-2 hover:tw-bg-red-500 tw-px-full tw-bg-red-600 tw-text-base tw-font-medium"
                              >Logout</router-link
                           >
                        </div>
                     </div>
                     <!-- <ul class="tw-flex tw-flex-col tw-items-center">
                     <li class="tw-my-2"><router-link class="tw-bg-nav-sec tw-px-24 tw-py-1 tw-rounded-md tw-font-semibold " to="/login">Edit profile</router-link></li>
                     <li class="tw-my-2"><router-link class="tw-bg-nav-sec tw-px-24 tw-py-1 tw-rounded-md tw-font-semibold " to="/login">Create Blog</router-link></li>
                     <li class="tw-my-2"><router-link class="tw-bg-nav-sec tw-px-24 tw-py-1 tw-rounded-md tw-font-semibold " to="/login">Statistics</router-link></li>
                     <li class="tw-my-2"><router-link class="tw-bg-nav-sec tw-px-24 tw-py-1 tw-rounded-md tw-font-semibold " to="/login">Reading List</router-link></li>
                     <li class="tw-my-2"><router-link class="tw-bg-nav-sec tw-px-24 tw-py-1 tw-rounded-md tw-font-semibold " to="/login">Folloowing</router-link></li>
                     <li class="tw-my-2"><router-link class="tw-bg-red-600 tw-px-24 tw-py-1 tw-rounded-md tw-font-semibold " to="/login">Logout</router-link></li>
                    
                  </ul> -->
                  </div>
               </div>
            </v-navigation-drawer>
         </div>
         <nav
            class="tw-flex tw-bg-navy-blue tw-justify-between tw-w-screen tw-z-50 tw-h-11 tw-fixed tw-top-0"
         >
            <div class="logo-image tw-mx-6 tw-py-1 tw-h-10">
               <img src="../assets/Logo/meteor.png" alt="" class="tw-h-full" />
            </div>
            <div class="nav-buttons tw-mr-2 tw-flex tw-items-center tw-pt-2">
               <ul class="tw-list-none tw-flex">
                  <li class="link-item">
                     <router-link
                        to="home"
                        class="tw-text-white tw-no-underline"
                        >Home</router-link
                     >
                  </li>
                  <li class="link-item">
                     <router-link
                        to="blogs"
                        class="tw-text-white t tw-no-underline"
                        >Blogs</router-link
                     >
                  </li>
                  <!-- <li class="link-item">
                  <router-link
                     to="login"
                     class="tw-text-white tw-no-underline d"
                     >Login</router-link
                  >
               </li> -->
                  <li class="link-item">
                     <button @click.stop="drawer = !drawer">
                        <img
                           src="../assets/images/profilepicture.jpg"
                           class="tw-h-8 tw-rounded-full"
                           alt=""
                        />
                     </button>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   </v-app>
</template>
<script>
export default {
   data() {
      return {
         drawer: null,
         items: [
            { title: "Home", icon: "mdi-view-dashboard" },
            { title: "About", icon: "mdi-forum" },
         ],
      };
   },
};
</script>
<style scoped>
.router-link-exact-active {
   background-color: #18a0fb;

   border-radius: 10px;
}
.link-item {
   margin: 1rem;
}
.link-item a {
   margin-top:2px;
   padding: 6px 8px 8px 8px;
   font-weight: 600;
}
.v-application a{
   color: #fff !important;
}
</style>
