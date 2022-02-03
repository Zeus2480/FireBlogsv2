<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-w-screen tw-px-14 tw-my-12">
         <div class="tw-pt-8 tw-flex">
            <img
               src="../assets/images/profilepicture.jpg"
               class="tw-h-28 tw-rounded-full"
               alt=""
            />
            <div class="tw-ml-8 tw-my-auto">
               <h1 class="tw-text-2xl tw-font-medium">Faizan Siddiqui</h1>
               <p class="tw-opacity-70">328 Followers</p>
               <v-btn 
                  @click="editprofile"
                  class="tw-mt-1"
                  dark
                  color="primary"
                  small
                  >Edit Profile</v-btn
               >
            </div>
         </div>
         <div class="tw-mt-8">
            <v-tabs color="blaack accent-4" left v-model="tab">
               <div class="tw-flex tw-justify-between tw-w-full">
                  <div class="tw-flex tw-border-b-2 tw-w-full tw-border-gray-300 tw-border-solid">
                     <v-tab href="#blogs" dark class="tw-text-black"
                        >Blogs</v-tab
                     >
                     <v-tab dark href="#followers">Followers</v-tab>
                     <v-tab dark href="#following">Following</v-tab>
                  </div>
                  <div class="search tw-absolute tw-right-0">
                     <!-- component -->
                     <!-- This is an example component -->
                  </div>
               </div>

               <v-tab-item value="blogs">
                  <div class="tw-grid tw-grid-cols-1  tw-my-4 tw-gap-10 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4  xl:tw-my-20">
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     <BaseCard ></BaseCard>
                     
                     
                  </div>
               </v-tab-item>
               <v-tab-item value="followers">
                  <div class="tw-mt-4">
                     <FollowTab></FollowTab>
                     <FollowTab></FollowTab>
                     <FollowTab></FollowTab>
                     <FollowTab></FollowTab>
                     <FollowTab></FollowTab>
                     <FollowTab></FollowTab>
                  </div>
               </v-tab-item>
               <v-tab-item value="following">
                  <div class="tw-mt-4">
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     <FollowTab :followingBoolean="true"></FollowTab>
                     
                  </div>
               </v-tab-item>
            </v-tabs>
         </div>
      </div>
   </div>
</template>
<script>
import BaseCard from "../components/BaseCard.vue";

import FollowTab from '../components/FollowTab.vue'
export default {
   
   methods: {
      editprofile() {
         this.$router.push("/editprofile");
      },
   },
   components: {
      BaseCard,
      FollowTab
   },
};
</script>
<style scoped>
.v-application p {
   margin-bottom: 0px !important;
}
</style>
