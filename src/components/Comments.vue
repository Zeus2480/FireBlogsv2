<template>
   <div
      class="tw-px-3 tw-my-3 tw-border-solid tw-border-t-2 tw-border-gray-500"
   >
      <div class="tw-flex tw-justify-between tw-mt-2">
         <div class="tw-flex">
            <img
               :src="profilePictureCheck"
               class="tw-h-8 tw-my-auto tw-rounded-full"
               alt=""
            />
            <div class="tw-mx-2">
               <h1 class="tw-text-base">{{ userName }}</h1>
               <p class="tw-text-xs tw-opacity-60">{{ dateFormat }}</p>
            </div>
         </div>
         <div class="tw-my-auto">
            <!-- <button @click.stop="!report"></button> -->

            <v-menu offset-y absolute>
               <template v-slot:activator="{ on, attrs }">
                  <v-btn depressed color="#fff" v-bind="attrs" v-on="on">
                     <img
                        src="../assets/Logo/3-horizontal-dots.png"
                        class="tw-h-1"
                        alt=""
                     />
                  </v-btn>
               </template>
               <v-list>
                  <v-list-item v-if="!deleteButtonBoolean">
                     <v-list-item-title
                        ><v-btn depressed color="#fff" @click="reportComment">
                           Report this response</v-btn
                        ></v-list-item-title
                     >
                  </v-list-item>
                  <v-list-item v-if="deleteButtonBoolean">
                     <v-list-item-title
                        ><v-btn
                           color="red darken-4"
                           dark
                           block
                           depressed
                           @click="deleteComment"
                        >
                           Delete Comment</v-btn
                        ></v-list-item-title
                     >
                  </v-list-item>
               </v-list>
            </v-menu>
         </div>
      </div>
      <div class="tw-my-1">
         <p v-html="body"></p>
      </div>
   </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
export default {
   props: ["body", "userName", "userId", "loggedUserId", "date", "commentId","profilePicture"],
   data() {
      return {
         report: null,
         items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
         ],
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
      deleteButtonBoolean() {
         return this.userId == this.$store.getters.userId ? true : false;
      },
      dateFormat() {
         return moment(this.date).calendar(new Date(), {
            sameDay: "[Today]",
            nextDay: "[Tomorrow]",
            nextWeek: "dddd",
            lastDay: "[Yesterday]",
            lastWeek: "[Last] dddd",
            sameElse: "DD/MM/YYYY",
         });
      },
   },
   methods: {
      reportComment(){
         axios.post(`/reported/${this.commentId}`,{},{
            headers:{
               Authorization: "Bearer "+localStorage.getItem("token")
            }
         }).then((res)=>{
            console.log(res);
            this.$emit('report')
         })
      },

      deleteComment() {
         axios
            .delete(`/comments/${this.commentId}/delete`, {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then(() => {
               this.$emit("delete-comment", this.commentId);
            });
      },
   },
};
</script>
