<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-w-full tw-mt-10 tw-px-24">
         <div class="tw-pt-8 tw-flex tw-justify-between">
            <h1 class="tw-text-3xl tw-font-semibold">Write your story.</h1>

            <v-btn @click="Update" color="#2A73C5" dark>Update</v-btn>
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
               v-model.trim="summary"
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
            <div>
               <div>
                  <div>
                     <v-row justify="center">
                        <v-dialog
                           v-model="dialog"
                           max-width="400"
                           max-height="1000"
                        >
                           <template v-slot:activator="{ on, attrs }">
                              <div class="tw-mr-2">
                                 <v-btn
                                    color="#5CBBF6"
                                    v-if="!preview"
                                    depressed
                                    disabled
                                    v-bind="attrs"
                                    v-on="on"
                                    class="tw-mr-2"
                                    >Preview</v-btn
                                 >
                                 <v-btn
                                    color="#5CBBF6"
                                    v-else
                                    v-bind="attrs"
                                    v-on="on"
                                    dark
                                    class="tw-mr-2"
                                    >Preview</v-btn
                                 >
                              </div>
                           </template>
                           <v-card>
                              <v-card-title class="tw-text-center text-h5">
                                 Preview
                              </v-card-title>
                              <v-img
                                 v-if="!userSelected"
                                 :src="imageUrl"
                                 contain
                                 transition="fade-transition"
                              ></v-img>
                              <v-img
                                 v-if="userSelected"
                                 :src="image"
                                 contain
                                 transition="fade-transition"
                              ></v-img>
                           </v-card>
                        </v-dialog>
                     </v-row>
                  </div>
               </div>
            </div>
         </div>
         <div class="editor tw-my-6 bg-white">
            <vue-editor v-model="body" />
         </div>
      </div>
   </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
   props: ["title", "summary", "body", "id", "img", "preview"],
   data() {
      return {
         excerpt: "",

         titleIsValid: true,
         summaryIsValid: true,
         formIsValid: true,
         selectedFile: null,
         userSelected: false,
         image: "",
      };
   },
   computed: {
      imageUrl() {
         return `http://localhost/fireblogs-api/public/images/${this.img}`;
      },
   },
   methods: {
      onFileSelected(event) {
         this.selectedFile = event.target.files[0];
         this.preview = true;
         console.log(event);
         this.image = URL.createObjectURL(this.selectedFile);
         this.userSelected = true;
      },
      validate() {
         this.titleIsValid = true;
         this.summaryIsValid = true;
         this.formIsValid = true;
         if (this.title === "") {
            this.titleIsValid = false;
            this.formIsValid = false;
         }
         if (this.summary === "") {
            this.summaryIsValid = false;
            this.formIsValid = false;
         }
      },
      Update() {
         this.validate();
         if (this.formIsValid) {
            const formData = new FormData();
            if (this.userSelected) {
               formData.append("image", this.selectedFile);
            }

            formData.append("name", this.title);
            formData.append("body", this.body);
            formData.append("excerpt", this.summary);
            formData.append("tags", "#test");
            axios
               .post(`/post/${this.id}/update`, formData, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then(() => {
                  this.$router.push("/blogs");
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
