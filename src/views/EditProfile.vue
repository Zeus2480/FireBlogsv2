<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-mx-32 tw-mt-14">
         <div class="tw-px-24">
            <h1 class="tw-text-2xl tw-font-semibold">
               Welcome Faizan Siddiqui
            </h1>
            <div class="tw-my-6 tw-flex">
               <img
                  :src="profilePictureCheck"
                  class="tw-h-24 tw-w-24 tw-rounded-full"
                  alt=""
               />
               <div class="tw-flex tw-items-center">
                  <v-row justify="center">
                     <v-dialog max-width="400" max-height="1000">
                        <template v-slot:activator="{ on, attrs }">
                           <div class="tw-mr-2">
                              <v-btn
                                 dark
                                 small
                                 color="#2A73C5"
                                 v-bind="attrs"
                                 v-on="on"
                                 class="tw-flex tw-items-center tw-ml-6"
                                 >Edit Profile Picture</v-btn
                              >
                           </div>
                        </template>
                        <v-card>
                           <v-card-title class="tw-text-center text-h5">
                              Edit Profile Picture
                           </v-card-title>
                           <div class="tw-px-4 tw-w-full">
                              <v-img
                                 v-if="userSelected"
                                 :src="imageUrl"
                                 transition="fade-transition"
                                 class="tw-h-24 tw-w-24 tw-mx-auto tw-rounded-full"
                              ></v-img>
                           </div>
                           <div class="tw-p-4">
                              <input
                                 type="file"
                                 @change="onFileSelected"
                                 id="imageInput"
                                 class=""
                                 accept=".png, .jpg, .jpeg"
                              />
                           </div>
                           <div
                              class="tw-flex tw-flex-row-reverse tw-p-4 tw-pt-0"
                           >
                              <v-btn
                                 @click="uploadImage"
                                 right
                                 color="primary"
                                 :loading="uploadLoading"
                                 :disabled="!userSelected"
                                 >Upload</v-btn
                              >
                           </div>
                        </v-card>
                     </v-dialog>
                  </v-row>
               </div>
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
               <label for="Name" class="tw-mb-4 tw-text-xl tw-font-medium"
                  >Name</label
               >
               <input
                  type="text"
                  v-model="userName"
                  id="Name"
                  placeholder=""
                  class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md"
               />
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
               <label for="Bio" class="tw-mb-4 tw-text-xl tw-font-medium"
                  >Bio</label
               >
               <textarea
                  name=""
                  id="Bio"
                  class="tw-bg-gray-100 tw-px-2 tw-py-1 tw-border-2 tw-border-solid tw-border-gray-300 tw-rounded-md"
                  placeholder="Type your bio here..."
                  rows="4"
                  v-model="bio"
               ></textarea>
            </div>
            <label class="tw-mb-4 tw-text-xl tw-font-medium">Socials</label>
            <div class="tw-flex tw-flex-col tw-my-4">
               <label for="insta" class="tw-mb-4 tw-text-xl tw-font-medium"
                  >Instagram</label
               >
               <input
                  v-model="instagram"
                  type="text"
                  id="insta"
                  placeholder="Paste your instagram link here..."
                  class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md"
               />
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
               <label for="facebook" class="tw-mb-4 tw-text-xl tw-font-medium"
                  >Facebook</label
               >
               <input
                  v-model="facebook"
                  type="text"
                  id="facebook"
                  placeholder="Paste your facebook link here..."
                  class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md"
               />
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
               <label for="twitter" class="tw-mb-4 tw-text-xl tw-font-medium"
                  >Twitter</label
               >
               <input
                  v-model="twitter"
                  type="text"
                  id="twitter"
                  placeholder="Paste your twitter link here..."
                  class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md"
               />
            </div>
            <div class="tw-flex tw-flex-col tw-my-4 tw-mb-10">
               <v-btn
                  dark
                  color="#2A73C5"
                  :loading="uploadLoading"
                  class="tw-flex tw-items-center"
                  @click="upload"
                  >Update</v-btn
               >
            </div>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>
<script>
import axios from "axios";
export default {
   data() {
      return {
         selectedFile: "",
         imageUrl: "",
         userSelected: null,
         uploadLoading: false,
         userName: "",
         bio: "",
         instagram: "",
         twitter: "",
         facebook: "",
      };
   },
   created() {
      this.getProfile();
   },
   computed: {
      profilePictureCheck() {
         if (this.$store.getters.profilePicture != null) {
            return `http://localhost/fireblogs-api/public/images/${this.$store.getters.profilePicture}`;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
   },
   methods: {
      upload() {
         const formData = new FormData();
         formData.append("name", this.userName);
         if (this.bio) {
            formData.append("bio", this.bio);
         }
         if (this.instagram) {
            // console.log(this.instagram)
            formData.append("instagram", this.instagram);
         }
         if (this.facebook !== "") {
            formData.append("facebook", this.facebook);
         }
         if (this.twitter !== "") {
            formData.append("youtube", this.twitter);
         }
         // let formData = {
         //    name: this.userName,
         //    bio: this.bio,
         //    "social_links.instagram": this.instagram,
         //    "social_links[facebook]": this.facebook,
         //    "social_links[twitter]": this.twitter,
         // };
         console.log(formData);
         axios
            .post("/upload", formData, {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               console.log(res);
            });
      },
      getProfile() {
         axios
            .get("/profile", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               // console.log(res.data);
               this.userName = res.data.name;
               this.bio = res.data.bio;
               this.instagram = res.data.instagram;

               this.twitter = res.data.youtube;
               
               if (!res.data.facebook) {
                  this.facebook = "";
               } else {
                  this.facebook = res.data.facebook;
               }
               if (!res.data.instagram) {
                  this.instagram = "";
               } else {
                  this.instagram = res.data.instagram;
               }
               if (!res.data.youtube) {
                  this.twitter = "";
               } else {
                  this.twitter = res.data.youtube;
               }
            });
      },
      uploadImage() {
         this.uploadLoading = true;
         // console.log(this.selectedFile);
         if (this.selectedFile != "") {
            const formData = new FormData();
            formData.append("image", this.selectedFile);
            formData.append("name", this.$store.getters.userName);
            axios
               .post("/upload", formData, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  this.userSelected = null;
                  this.$store.dispatch("setProfilePicture", {
                     profilePicture: res.data.image_path,
                  });
               })
               .finally(() => {
                  (this.uploadLoading = false), (this.userSelected = null);
               });
         }
      },
      onFileSelected(e) {
         this.selectedFile = e.target.files[0];

         this.imageUrl = URL.createObjectURL(this.selectedFile);
         this.userSelected = true;
      },
   },
};
</script>
