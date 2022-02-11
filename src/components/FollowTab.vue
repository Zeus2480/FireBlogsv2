<template>
   <div class=" ">
      <div
         class="tw-w-full tw-my-3 tw-py-3 tw-rounded-xl tw--border-2 tw-border-2 tw-border-white tw-cursor-pointer hover:tw-border-black tw-px-4 tw-bg-gray-200"
      >
         <div class="tw-flex tw-justify-between">
            <div class="tw-flex">
               <div class="tw-flex">
                  <img
                     :src="profilePictureCheck"
                     class="tw-h-9 tw-rounded-full"
                     alt=""
                  />
                  <div class="tw-w-52 tw-my-auto">
                     <h3
                        class="tw-text-black tw-my-auto tw-ml-6 tw-font-medium"
                     >
                        {{ userName }}
                     </h3>
                  </div>
               </div>
               <div class="tw-flex tw-mx-16">
                  <h2 class="tw-text-black tw-my-auto tw-mx-6 tw-font-medium">
                     Blogs {{ noOfBlogs }}
                  </h2>
                  <h2 class="tw-text-black tw-my-auto tw-mx-6 tw-font-medium">
                     Followers 466
                  </h2>
               </div>
            </div>
            <div v-if="followingBoolean">
               <v-btn dark color="red darken-4">Unfollow</v-btn>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   props: [
      "followingBoolean",
      "userName",
      "profilePicture",
      "noOfBlogs",
      "noOfFollowers",
   ],
   computed: {
      profilePictureCheck() {
         if (this.profilePicture) {
            return `http://localhost/fireblogs-api/public/images/${this.profilePicture}`;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
   },
   methods: {
      redirect() {
         this.$router.push({
            name: "Profile",
            params: { edit: false },
         });
      },
   },
};
</script>
