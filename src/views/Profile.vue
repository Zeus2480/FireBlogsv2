<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-w-screen tw-px-14 tw-my-12">
         <div class="tw-pt-8 tw-flex">
            <img
               :src="profilePictureCheck"
               class="tw-h-28 tw-rounded-full"
               alt=""
            />
            <div class="tw-ml-8 tw-my-auto">
               <h1 class="tw-text-2xl tw-font-medium">{{ userName }}</h1>
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
            <v-tabs color="black accent-4" left>
               <div class="tw-flex tw-justify-between tw-w-full">
                  <div
                     class="tw-flex tw-border-b-2 tw-w-full tw-border-gray-300 tw-border-solid"
                  >
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
                  <div v-if="userBlogs.length==0" class="tw-w-full">
                     <div class="tw-flex tw-justify-center tw-mt-24 tw-mx-auto">
                        <div>
                           <h1 class="tw-text-xl">You dont have any blogs</h1>
                           <div class="tw-flex tw-justify-center tw-mt-6">
                              <router-link class="" to="/createblog"
                                 ><v-btn dark color="green darken-1"
                                    >Createblog</v-btn
                                 ></router-link
                              >
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     v-else
                     class="tw-grid tw-grid-cols-1 tw-my-4 tw-gap-10 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 xl:tw-my-20"
                  >
                     <BaseCard
                        @delete-post="deleteBlog"
                        v-for="(blog, index) in userBlogs"
                        :key="index"
                        :id="blog.id"
                        :body="blog.body"
                        :summary="blog.excerpt"
                        :title="blog.name"
                        :img="blog.image_path"
                     ></BaseCard>
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
import axios from "axios";
import FollowTab from "../components/FollowTab.vue";
export default {
   data() {
      return {
         blogsList: [],
         userBlogs: [],
         userId: "",
         userName: "",
      };
   },
   computed: {
      profilePictureCheck() {
         if (this.$store.getters.profilePicture != null) {
            return `http://localhost/fireblogs-api/public/images/${this.$store.getters.profilePicture}`;
         } else {
            return `https://i.ibb.co/TPmLQyP/user.png`;
         }
      },
   },
   created() {
      this.getMyBlogs();
   },
   methods: {
      editprofile() {
         this.$router.push("/editprofile");
      },
      deleteBlog(id) {
         this.userBlogs = this.userBlogs.filter((blog) => blog.id !== id);
      },
      getMyBlogs() {
         axios
            .post(
               "/profile",
               {},
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then((res) => {
               this.id = res.data.id;
               this.userName = res.data.name;
               axios
                  .get("/post/publish")
                  .then((res) => {
                     this.blogsList = res.data;
                     this.userBlogs = this.blogsList.filter(
                        (blog) => blog.user_id === this.id
                     );
                     console.log(this.userBlogs);
                  })
                  .catch((err) => {
                     console.log(err);
                  });
            })
            .catch((err) => {
               console.log(err);
            });
      },
   },
   components: {
      BaseCard,
      FollowTab,
   },
};
</script>
<style scoped>
.v-application p {
   margin-bottom: 0px !important;
}
</style>
