<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-mt-20">
         <div class="tw-px-24">
            <div>
               <h2 class="tw-text-4xl tw-mx-4 tw-font-semibold">
                  Search Results
               </h2>
            </div>
            <div class="tw-my-8">
               <div v-if="resultNotFound">
                  <div
                     class="div tw-flex tw-flex-col tw-content-center tw-justify-center"
                  >
                     <h2
                        class="tw-my-50 tw-text tw-mt-10 tw-font-semibold tw-text-2xl"
                     >
                        No Results Found....
                     </h2>
                  </div>
               </div>
               <div v-if="!resultNotFound">
                  <HorizontalBlogCard
                     v-for="(blog, index) in searchResult"
                     :key="index"
                     :id="blog.id"
                     :title="blog.name"
                     :summary="blog.excerpt"
                     :image="blog.image_path"
                  ></HorizontalBlogCard>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import HorizontalBlogCard from "../components/HorizontalBlogCard.vue";
import axios from "axios";
export default {
   data() {
      return {
         resultNotFound: false,
         searchResult: [],
      };
   },
   created() {
      this.search();
   },
   methods: {
      search() {
         axios
            .post("/search", {
               query: this.query,
            })
            .then((res) => {
               if (res.data) {
                  this.searchResult = res.data;
                  if ((this.searchResult.length===0)) {
                     this.resultNotFound = true;
                  }
               }
            });
      },
   },
   props: ["query"],
   components: {
      HorizontalBlogCard,
   },
};
</script>
