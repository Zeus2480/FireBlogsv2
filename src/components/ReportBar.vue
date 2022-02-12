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
                       {{commentedBy}}
                     </h3>
                  </div>
               </div>
               <div class="tw-flex tw-mx-2 set-width">
                  <h3
                     class="tw-text-black tw-truncate tw-my-auto tw-bg-red tw-mx-6 tw-font-medium"
                  ><router-link :to="bloglink" class="hover:tw-bg-red" >{{postTitle}}</router-link>
                    
                  </h3>
               </div>
            </div>
            <div class="tw-flex">
               <div class="tw-mr-6">
                  <div class="tw-h-full">
                     <v-row justify="center" class="tw-my-auto">
                        <v-dialog v-model="dialog" max-width="290">
                           <template v-slot:activator="{ on, attrs }">
                              <div class="tw-mt-4">
                                 <v-btn
                                    color="blue lighten-1"
                                    small
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    class=""
                                 >
                                    View Comment
                                 </v-btn>
                              </div>
                           </template>
                           <v-card>
                              <v-card-title
                                 >Comment by {{ commentedBy }}</v-card-title
                              >
                              <v-card-text>{{ comment }}</v-card-text>
                              <v-card-actions>
                                 <v-spacer></v-spacer>
                                 <v-btn
                                    color="green darken-1"
                                    dark
                                    small
                                    @click="dialog = false"
                                 >
                                    Close
                                 </v-btn>
                              </v-card-actions>
                           </v-card>
                        </v-dialog>
                     </v-row>
                  </div>
               </div>
               <div>
                 
                  <v-btn
                    
                     :disabled="!disabled"
                     :dark="disabled"
                     @click="block"
                     color="primary"
                     :loading="isLoading"
                     >Block</v-btn
                  >
                  <v-btn
                    :loading="isLoading"
                    :disabled="disabled"
                    :dark="!disabled"
                     @click="block"
                     color="primary"
                     class="tw-ml-1"
                     >Unblock</v-btn
                  >
                  
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import axios from "axios"
export default {
   props: ["comment", "commentedBy", "reportId", "commentedByProfilePicture","postTitle","postId","isBlocked"],
   data() {
      return {
         
         isLoading:false,
         dialog: null,
      };
   },
   computed: {
      disabled(){
         if(this.isBlocked){
            return true;
         }
         else{
            return false
         }
      },
      bloglink(){
         return `/viewpost/${this.postId}`
      },
      profilePictureCheck() {
         if (this.commentedByProfilePicture) {
            return `http://localhost/fireblogs-api/public/images/${this.commentedByProfilePicture}`;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
   },
   methods: {
      block(){
         this.isLoading=true;
         axios.post(`/block/${this.reportId}`,{},{
            headers:{
               Authorization:"Bearer "+localStorage.getItem("token")
            }
         }).then((res)=>{
            this.isBlocked=!this.isBlocked;
            this.$emit('blocked-status-change');
            console.log(res)
         }).finally(()=>{
            this.isLoading=false
         })
      },
      
   },
};
</script>
<style scoped>
.set-width {
   max-width: 35vw;
}
</style>
