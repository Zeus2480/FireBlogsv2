<template>
   <div>
      <div
         class="tw-rounded-xl tw-relative"
         style="width: 310px; height: 300px; background-color: #1c1f26"
      >
         <div class="tw-px-4 tw-pt-2">
            <div class="title tw-h-16 tw-mx-auto">
               <h2 class="tw-text-white tw-pt-3 tw-truncate tw-mx-auto">
                  {{ title }}
               </h2>
            </div>
            <img
               :src="imageUrl"
               class=""
               style="height: 160px; width: 302px"
               alt=""
            />
         </div>
         <!-- <div v-if="!edit" class="tw-px-6 tw-pt-4 tw-flex tw-justify-between">
            <div>
               <button v-if="isLiked" @click="liked">
                  <img class="liked" src="../assets/Logo/heart 1.png" alt="" />
               </button>
               <button v-if="!isLiked" @click="liked">
                  <img
                     class="not-liked"
                     src="../assets/Logo/heart 1.png"
                     alt=""
                  />
               </button>
            </div>
            <div>
               <button v-if="isBookmarked" @click="bookmarked">
                  <img
                     class="bookmarked"
                     src="../assets/Logo/Vector (2).png"
                     alt=""
                  />
               </button>
               <button v-if="!isBookmarked" @click="bookmarked">
                  <img
                     class="not-bookmarked"
                     src="../assets/Logo/Vector (2).png"
                     alt=""
                  />
               </button>
            </div>
         </div> -->
         <div class="tw-absolute tw-bottom-6 tw-right-8">
            <div>
               <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="290">
                     <template v-slot:activator="{ on, attrs }">
                        <router-link
                           :to="{
                              name: 'editblog',
                              params: {
                                 title: title,
                                 body: body,
                                 summary: summary,
                                 id: id,
                                 img: img,
                                 preview:true
                              },
                           }"
                        >
                           <v-btn
                              dark
                              small
                              color="primary"
                              class="tw-static tw-mx-2"
                              >Edit</v-btn
                           >
                        </router-link>
                        <v-btn
                           color="red darken-4"
                           small
                           dark
                           v-bind="attrs"
                           v-on="on"
                        >
                           Delete
                        </v-btn>
                     </template>
                     <v-card>
                        <v-card-title class="text-h5">
                           Are you sure?
                        </v-card-title>
                        <v-card-text
                           >Do you really want to delete your Blog? This process
                           cannot be undone</v-card-text
                        >
                        <v-card-actions>
                           <v-spacer></v-spacer>
                           <v-btn
                              color="green darken-1"
                              dark
                              small
                              @click="dialog = false"
                           >
                              Cancel
                           </v-btn>
                           <v-btn
                              color="red darken-4"
                              dark
                              small
                              @click="deleteBlog"
                           >
                              Delete
                           </v-btn>
                        </v-card-actions>
                     </v-card>
                  </v-dialog>
               </v-row>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import axios from 'axios';
export default {
   // props:{
   //     edit:{
   //         default:true
   //     }
   // },
   props: ["title", "summary", "body", "id", "img"],
   data() {
      return {
         dialog: false,
         isLiked: false,
         isBookmarked: false,
      };
   },
   computed: {
      imageUrl() {
         return `http://localhost/fireblogs-api/public/images/${this.img}`;
      },
   },
   methods: {
      deleteBlog(){
         this.dialog=false;
         axios.delete(`/post/${this.id}/delete`).then(()=>{
            this.$emit("delete-post", this.id);
         })
      }
      //    liked(){
      //        this.isLiked=!this.isLiked;
      //    },
      //    bookmarked(){
      //        this.isBookmarked=!this.isBookmarked;
      //        console.log(this.isBookmarked)
      //    }
   },
};
</script>
<style scoped>
.liked {
   border-radius: 8px;
   background: rgba(215, 68, 62, 0.35);
   padding: 5px;
}
.not-liked {
   padding: 5px;
}
.bookmarked {
   border-radius: 8px;
   background: rgba(255, 142, 59, 0.35);
   padding: 5px;
}
.not-bookmarked {
   padding: 5px;
}
</style>
