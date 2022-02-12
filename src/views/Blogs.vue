<template>
   <div>
      <Navbar></Navbar>
      <div class="slider">
         <v-app>
            <div class="tw-mx-6">
               <v-carousel
                  class="tw-mt-10"
                  cycle
                  height="250"
                  width="50%"
                  hide-delimiter-background
                  show-arrows-on-hover
                  hide-delimiters
                  :show-arrows="false"
               >
                  <div v-if="sliderOne.length == 2">
                     <v-carousel-item >
                        <div class="tw-h-full">
                           <Slider :data="sliderOne"></Slider>
                        </div>
                     </v-carousel-item>
                  </div>

                  <div v-if="sliderTwo.length == 2">
                     <v-carousel-item>
                        <div class="tw-h-full tw-w-full">
                           <Slider :data="sliderTwo"></Slider>
                        </div>
                     </v-carousel-item>
                  </div>

                  <div v-if="sliderThree.length == 2">
                     <v-carousel-item>
                        <div class="tw-h-full">
                           <Slider :data="sliderThree"></Slider>
                        </div>
                     </v-carousel-item>
                  </div>

                  <!-- <v-carousel-item >
                  <div class="">
                  <base-card body="hello fsj fsda fsda" :summary="summary" :title="title"></base-card>

                  </div>
                  
               </v-carousel-item>
               <v-carousel-item >
                  <v-sheet color="red" height="100%">
                     <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2">{{ slide }} Slide</div>
                     </v-row>
                  </v-sheet>
                  
               </v-carousel-item> -->
               </v-carousel>
            </div>
         </v-app>
      </div>
      <div>
         <div class="tab tw-mx-10">
            <v-tabs color="blaack accent-4" right v-model="tab">
               <div class="tw-flex tw-justify-between">
                  <div class="tw-flex">
                     <v-tab href="#recommended" dark class="tw-text-black"
                        >Recommended For You</v-tab
                     >
                     <v-tab dark href="#following">Following</v-tab>
                  </div>
                  <div class="search tw-absolute tw-right-0">
                     <!-- component -->
                     <!-- This is an example component -->
                     <div
                        class="tw-pt-2 tw-relative tw-mx-auto tw-text-gray-600"
                     >
                        <input
                           class="tw-border-2 tw-border-solid tw-border-gray-400 tw-bg-gray-00 tw-h-10 tw-px-5 tw-pr-16 tw-rounded-lg tw-text-sm tw-focus:outline-none"
                           type="search"
                           name="search"
                           placeholder="Search"
                           v-model.trim="query"
                           @keyup.enter="search"
                        />
                        <button
                           type="submit"
                           @click="search"
                           class="tw-absolute tw-right-0 tw-top-0 tw-mt-5 tw-mr-4"
                        >
                           <svg
                              class="tw-text-gray-600 tw-h-4 tw-w-4 tw-fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Capa_1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 56.966 56.966"
                              style="enable-background: new 0 0 56.966 56.966"
                              xml:space="preserve"
                              width="512px"
                              height="512px"
                           >
                              <path
                                 d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                              />
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>

               <v-tab-item value="following">
                  <div
                     v-if="followingBLogs.length == 0"
                     class="tw-w-full heightmin tw-my-8 tw-mb-10"
                  >
                     <div class="tw-flex tw-justify-center">
                        <h2 class="">
                           Stories from the writers you follow will appear here.
                        </h2>
                     </div>
                     <div
                        v-if="followingBLogs.length == 0"
                        class="tw-flex tw-justify-center tw-mt-8"
                     >
                        <v-btn @click="changeTab" dark color="#048400"
                           >Browse recommended stories.</v-btn
                        >
                     </div>
                  </div>
                  <div v-else class="tw-w-full heightmin tw-my-8 tw-mb-10">
                     <horizontal-blog-card
                        v-for="(blog, index) in followingBLogs"
                        :key="index"
                        :id="blog.id"
                        :title="blog.name"
                        :summary="blog.excerpt"
                        :image="blog.image_path"
                        :userName="blog.users.name"
                        :date="blog.created_at"
                        :profilePicture="blog.users.image_path"
                     ></horizontal-blog-card>
                  </div>
               </v-tab-item>
               <v-tab-item value="recommended">
                  <div class="tw-mt-4 heightmin ">
                     <horizontal-blog-card
                        v-for="(blog, index) in publishedBlogs"
                        :key="index"
                        :id="blog.id"
                        :title="blog.name"
                        :summary="blog.excerpt"
                        :image="blog.image_path"
                        :userName="blog.users.name"
                        :date="blog.created_at"
                        :profilePicture="blog.users.image_path"
                     ></horizontal-blog-card>
                  </div>
               </v-tab-item>
            </v-tabs>
            <!-- <div id="app">
            <v-tabs v-model="tab" color="cyan" dark slider-color="yellow">
               <v-tab ripple href="#tab-1"> Item 1 </v-tab>
               <v-tab ripple href="#tab-2"> Item 2 </v-tab>
               <v-tab-item value="tab-1">
                  <v-card flat>
                     <v-btn @click="changeTab()">Go to item2</v-btn>
                  </v-card>
               </v-tab-item>
               <v-tab-item value="tab-2">
                  <v-card flat>
                     <v-card-text>Contents for Item 2 go here</v-card-text>
                  </v-card>
               </v-tab-item>
            </v-tabs>
         </div> -->
         </div>
      </div>

      <Footer></Footer>
   </div>
</template>
<script>
import HorizontalBlogCard from "../components/HorizontalBlogCard.vue";
// import BaseCard from "../components/BaseCard.vue"
import axios from "axios";
import Slider from "../components/Slider.vue";
export default {
   components: {
      "horizontal-blog-card": HorizontalBlogCard,
      // "base-card":BaseCard,
      Slider,
   },
   data() {
      return {
         slides: ["First", "Second", "Third", "Fourth", "Fifth"],
         title: "THis is the title",
         summary: "this is the summary",
         colors: [
            "indigo",
            "warning",
            "pink darken-2",
            "red lighten-1",
            "deep-purple accent-4",
         ],
         tab: "tab-1",
         query: "",
         publishedBlogs: [],
         followingBLogs: [],
         sliderOne: [],
         sliderTwo: [],
         sliderThree: [],
      };
   },

   created() {
      this.getPublishBlogs();
      this.getFollowingBlogs();
   },
   methods: {
      getFollowingBlogs() {
         axios
            .get("/tt", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               if (res.data) {
                  this.followingBLogs = res.data;
               }
            });
      },
      getPublishBlogs() {
         axios.get("/post/publish").then((res) => {
            if (res.data != "no post is published") {
               this.publishedBlogs = res.data;
               this.slider();
            }
         });
      },
      slider() {
         let length = this.publishedBlogs.length;

         if (length >= 2 && length < 4) {
            this.sliderOne[0] = this.publishedBlogs[0];
            this.sliderOne[1] = this.publishedBlogs[1];
         } else if (length >= 4 && length < 6) {
            this.sliderOne[0] = this.publishedBlogs[0];
            this.sliderOne[1] = this.publishedBlogs[1];
            this.sliderTwo[0] = this.publishedBlogs[2];
            this.sliderTwo[1] = this.publishedBlogs[3];
         } else if (length >= 6) {
            this.sliderOne[0] = this.publishedBlogs[0];
            this.sliderOne[1] = this.publishedBlogs[1];
            this.sliderTwo[0] = this.publishedBlogs[2];
            this.sliderTwo[1] = this.publishedBlogs[3];
            this.sliderThree[0] = this.publishedBlogs[4];
            this.sliderThree[1] = this.publishedBlogs[5];
         }
         console.log(this.sliderOne);
         console.log(this.sliderTwo);
         console.log(this.sliderThree);
      },
      changeTab() {
         this.tab = "recommended";
      },
      search() {
         console.log(this.query);
         if (this.query != "") {
            this.$router.push({
               name: "search",
               params: { query: this.query },
            });
         }
      },
   },
};
</script>
<style scoped>
.heightmin {
   min-height: 40vh;
}
.v-application--wrap {
   min-height: unset !important;
}
.v-btn {
   text-transform: unset !important;
}
.v-btn__content {
   color: #fff !important;
   text-transform: unset !important;
}
.v-slide-group__content {
   justify-content: space-between !important;
}
.v-application-a {
   color: black !important;
}
.v-application .deep-purple--text .deep-purple--text {
   color: black !important;
   caret-color: black !important;
}
</style>
