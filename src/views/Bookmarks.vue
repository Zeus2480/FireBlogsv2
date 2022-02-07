<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-mt-20">
         <div class="tw-px-24">
            <div>
               <h2 class="tw-text-4xl tw-mx-4 tw-font-semibold">Bookmarks</h2>
            </div>
            <div class="tw-my-8">
               <HorizontalBlogCard
                  v-for="(blog, index) in bookmarkedList"
                  :key="index"
                  :id="blog.id"
                  :title="blog.name"
                  :summary="blog.excerpt"
                  :image="blog.image_path"
                  :userName="blog.users.name"
                  
               ></HorizontalBlogCard>
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
         bookmarkedList: [],
         allPost: [],
      };
   },
   components: {
      HorizontalBlogCard,
   },
   created() {
      this.getBookmarks();
   },
   methods: {
      getBookmarks() {
         axios.get("/post/publish").then((res) => {
            this.allPost = res.data;
            //   console.log(this.allPost)
            axios
               .get("/bookmark", {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  //   console.log( res.data);
                  for (var i = 0; i < res.data.length; i++) {
                     //   console.log(res.data[i].postid)
                     this.bookmarkedList.push(
                        ...this.allPost.filter(
                           (val) => val.id === res.data[i].post_id
                        )
                     );
                  }
                  //   console.log(this.bookmarkedList)
               });
         });
      },
   },
};
</script>
