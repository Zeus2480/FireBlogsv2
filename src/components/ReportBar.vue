<template>
   <div>
      <div
         class="tw-w-full tw-my-3 tw-py-3 tw-rounded-xl tw--border-2 tw-border-2 tw-border-white tw-cursor-pointer tw-px-4 tw-bg-gray-200"
      >
         <div class="tw-flex tw-justify-between">
            <div class="tw-flex">
               <div class="tw-flex">
                  <img
                     src="../assets/images/1_g8SH3hZJHhJVYy6UqFjv1Q.jpeg"
                     class="tw-h-9 tw-rounded-full"
                     alt=""
                  />
                  <h3 class="tw-text-black tw-my-auto tw-ml-6 tw-font-medium">
                     Olivia Rodrigo
                  </h3>
               </div>
               <div class="tw-flex tw-mx-2 set-width">
                  <h3
                     class="tw-text-black tw-truncate tw-my-auto tw-mx-6 tw-font-medium"
                  >
                     This the titleee shgj hjasg hsf sfdhj gsfhg ffhsg yshd dsf
                     fsdj fdhjk hfdsj gfhj gfsshg dfshgdfh jskdhgfsajd fhsajk
                     fkHFJDSFHSAJ FHSJK AFHHSDAGF GJSKH AJKHSAJFAN BCXN BDSN
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
                              <v-card-title>Comment</v-card-title>
                              <v-card-text
                                 >this is the commentads dsa dsa dass ds dsad s
                                 s asdasd sd s fsd fs sduys gdhf ghfsdgy sfdghs
                                 sdgssfdhgfhjsfdghjg hjsg shj gsdhjg hjsg jhsfd
                                 ghjg sfhd gsfdhjg shjs fghjsf gshg fhjf ghjsfd
                                 ghj ghs d dsfh gdshg fdhg fhd hjsghsfd gh
                                 jgsfdhj ghjgjh gfhjsg fjsdg fsdg jhfdsgj hfgdh
                                 gfdhj gfshg fsg fgasj fgsdhj gfsdjhg fjshg
                                 fhsjg hfsghj ggsfhd jhsfgdhj sgdh
                                 ghfsdgh</v-card-text
                              >
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
                  <v-btn v-if="!isBlocked" dark @click="publish" color="primary"
                     >Block</v-btn
                  >
                  <v-btn
                     v-if="isBlocked"
                     disabled
                     @click="publish"
                     color="primary"
                     >Block</v-btn
                  >
                  <v-btn
                     dark
                     v-if="isBlocked"
                     @click="unPublish"
                     color="primary"
                     class="tw-ml-1"
                     >Unblock</v-btn
                  >
                  <v-btn
                     disabled
                     v-if="!isBlocked"
                     @click="unPublish"
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
export default {
   data() {
      return {
         isBlocked: false,
         dialog: null,
      };
   },
   methods: {
      publish() {
         this.isBlocked = !this.isBlocked;
      },
      unPublish() {
         this.isBlocked = !this.isBlocked;
      },
   },
};
</script>
<style scoped>
.set-width {
   max-width: 35vw;
}
</style>
