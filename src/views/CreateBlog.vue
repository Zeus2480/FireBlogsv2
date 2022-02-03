<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-w-full tw-mt-10 tw-px-24">
         <div class="tw-pt-8 tw-flex tw-justify-between">
            <h1 class="tw-text-3xl tw-font-semibold">Write your story.</h1>
            <v-btn @click="create" color="#2A73C5" dark>Create</v-btn>
         </div>
         <div class="tw-flex tw-flex-col tw-my-6">
            <div class="tw-flex">
               <label for="title" class="tw-mb-4 tw-text-xl tw-font-medium"
                  >Title</label
               >
               <p
                  v-if="!titleIsValid"
                  class="tw-text-red-500 tw-center tw-ml-4"
               >
                  Mandatory
               </p>
            </div>
            <input
               type="text"
               id="title"
               placeholder="Your Title..."
               class="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md"
               v-model.trim="title"
            />
         </div>
         <div class="tw-flex tw-flex-col tw-my-6">
            <div class="tw-flex">
               <label for="summary" class="tw-mb-4 tw-text-xl tw-font-medium"
                  >Summary</label
               >
               <p
                  v-if="!summaryIsValid"
                  class="tw-text-red-500 tw-center tw-ml-4"
               >
                  Mandatory
               </p>
            </div>
            <input
               type="text"
               id="summary"
               placeholder="Your Summary..."
               class="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md"
               v-model.trim="excerpt"
            />
         </div>
         <div class="tw-flex tw-justify-between tw-my-6">
            <div>
               <label
                  for="imageInput"
                  class="tw-mb-4 tw-mr-6 tw-text-xl tw-font-medium"
                  >Banner</label
               >
               <input
                  type="file"
                  @change="onFileSelected"
                  id="imageInput"
                  class=""
                  accept=".png, .jpg, .jpeg"
               />
            </div>
            <v-btn color="#5CBBF6" depressed disabled>Preview</v-btn>
         </div>
         <div class="editor tw-my-6 bg-white">
            <vue-editor v-model="body" />
         </div>
      </div>
   </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import axios from "axios"
export default {
   data() {
      return {
         title: "",
         excerpt: "",
         body: "",
         titleIsValid: true,
         summaryIsValid: true,
         formIsValid: true,
         selectedFile: null,
      };
   },
   methods: {
      onFileSelected(event) {
         this.selectedFile = event.target.files[0];
      },
      validate() {
         this.titleIsValid = true;
         this.summaryIsValid = true;
         this.formIsValid = true;
         if (this.title === "") {
            this.titleIsValid = false;
            this.formIsValid = false;
         }
         if (this.excerpt === "") {
            this.summaryIsValid = false;
            this.formIsValid = false;
         }
      },
      create() {
         this.validate();
         if (this.formIsValid) {
            const formData = new FormData();
            formData.append("image", this.selectedFile);
            formData.append("name", this.title);
            formData.append("body", this.body);
            formData.append("excerpt", this.excerpt);
            formData.append("tags", "#test");
            axios
               .post(`/post/create`, formData, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(res)
               })
               .catch((err) => console.log(err));
         }
      },
   },
   components: {
      VueEditor,
   },
};
</script>
