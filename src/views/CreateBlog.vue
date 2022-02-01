<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-w-full tw-mt-10 tw-px-24">
         <div class="tw-pt-8 tw-flex tw-justify-between">
            <h1 class="tw-text-3xl tw-font-semibold">Write your story.</h1>
            <v-btn color="#2A73C5" dark>Create</v-btn>
         </div>
         <div class="tw-flex tw-flex-col tw-my-6">
            <label for="title" class="tw-mb-4 tw-text-xl tw-font-medium"
               >Title</label
            >
            <input
               type="text"
               id="title"
               placeholder="Your Title..."
               class="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md"
            />
         </div>
         <div class="tw-flex tw-flex-col tw-my-6">
            <label for="summary" class="tw-mb-4 tw-text-xl tw-font-medium"
               >Summary</label
            >
            <input
               type="text"
               id="summary"
               placeholder="Your Summary..."
               class="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md"
            />
         </div>
         <div class="tw-flex tw-justify-between tw-my-6">
            <div>
               <label
                  for="title"
                  class="tw-mb-4 tw-mr-6 tw-text-xl tw-font-medium"
                  >Banner</label
               >
               <input type="file" class="" accept=".png, .jpg, .jpeg" />
            </div>
            <v-btn color="#5CBBF6" depressed disabled>Preview</v-btn>
         </div>
         <div class="editor tw-my-6 bg-white">
            <vue-editor />
         </div>
      </div>
   </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
   components: {
      VueEditor,
   },
};
</script>
