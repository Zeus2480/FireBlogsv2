<template>
   <div
      class="tw-px-3 tw-my-3 tw-border-solid tw-border-t-2 tw-border-gray-500"
   >
      <div class="tw-flex tw-justify-between tw-mt-2">
         <div class="tw-flex">
            <img
               src="../assets/images/profilepicture.jpg"
               class="tw-h-8 tw-my-auto tw-rounded-full"
               alt=""
            />
            <div class="tw-mx-2">
               <h1 class="tw-text-base">Faizan Siddiqui</h1>
               <p class="tw-text-xs tw-opacity-60">15 Days ago</p>
            </div>
         </div>
         <div class="tw-my-auto">
            <!-- <button @click.stop="!report"></button> -->
            
               <v-menu offset-y absolute="true">
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
                     <v-list-item >
                        <v-list-item-title><v-btn depressed color="#fff">
                        Report</v-btn></v-list-item-title>
                     </v-list-item>
                  </v-list>
                  
               </v-menu>
            
         </div>
      </div>
      <div class="tw-my-1">
         <p>
            That was so beautiful! I was engaged the whole time - no temptation
            to skim read and skip ahead. You fully caught my attention with your
            words and imagery!
         </p>
      </div>
   </div>
</template>
<script>
export default {
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
};
</script>
