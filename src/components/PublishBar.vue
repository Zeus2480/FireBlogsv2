<template>
   <div>
      <div
         class="tw-w-full tw-my-3 tw-py-3 tw-rounded-xl tw--border-2 tw-border-2 tw-border-white tw-cursor-pointer tw-px-4 tw-bg-gray-200"
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
                        {{userName  }}
                     </h3>
                  </div>
               </div>
               <div class="tw-flex tw-mx-8 set-width">
                  <h3
                     class="tw-text-black tw-truncate tw-my-auto tw-mx-6 tw-font-medium"
                  >
                     {{ title }}
                  </h3>
               </div>
            </div>
            <div>
               <v-btn v-if="!status" dark @click="publish" color="primary"
                  >Publish</v-btn
               >
               <v-btn v-if="status" disabled @click="publish" color="primary"
                  >Publish</v-btn
               >
               <v-btn
                  dark
                  v-if="status"
                  @click="unpublish"
                  color="primary"
                  class="tw-ml-1"
                  >Unpublish</v-btn
               >
               <v-btn
                  disabled
                  v-if="!status"
                  @click="unpublish"
                  color="primary"
                  class="tw-ml-1"
                  >Unpublish</v-btn
               >
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import axios from "axios";
export default {
   props: ["id", "title", "status", "userName", "profilePicture"],
   data() {
      return {
         isPublished: false,
         
      };
   },
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
      unpublish() {
         axios
            .post(
               `/post/${this.id}/unpublish`,
               {},
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then((res) => {
               console.log(res);
               this.status = !this.status;
            })
            .catch((err) => {
               console.log(err);
            });
      },
      publish() {
         axios
            .post(
               `/post/${this.id}/publish`,
               {},
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then((res) => {
               console.log(res);
               this.status = !this.status;
            })
            .catch((err) => {
               console.log(err);
            });
      },
   },
};
</script>
<style scoped>
.set-width {
   max-width: 40vw;
}
</style>
