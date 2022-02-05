<template>
   <div>
      <Navbar></Navbar>

      <div
         class="bottom tw-w-screen tw-h-10 tw-flex tw-fixed tw-bottom-0 tw-z-10 tw-border-black tw-border-t-2"
      >
         <div class="tw-w-3/4 tw-h-full tw-bg-white tw-flex tw-items-center">
            <div class="tw-pl-16 tw-w-full tw-flex tw-justify-between">
               <div class="tw-flex">
                  <div class="tw-flex tw-mr-4">
                     <button v-if="!isLiked" @click="like">
                        <img
                           src="../assets/Logo/love.png"
                           class="tw-h-5 focus:tw-cursor-pointer"
                           alt=""
                        />
                     </button>
                     <button v-else @click="unLike">
                        <img
                           src="../assets/Logo/heart.png"
                           class="tw-h-5 focus:tw-cursor-pointer"
                           alt=""
                        />
                     </button>
                     <div class="tw-flex tw-items-center">
                        <p class="tw-ml-2 tw-w-3">{{ likeCount }}</p>
                     </div>
                  </div>
                  <div class="tw-flex">
                     <button @click.stop="drawer = !drawer">
                        <img
                           src="../assets/Logo/chat-bubble 1.png"
                           class="tw-h-5"
                           alt=""
                        />
                     </button>
                     <p class="tw-flex tw-items-center tw-ml-2">234</p>
                  </div>
               </div>
               <div class="tw-mr-4">
                  <button v-if="!isBookmarked" @click="bookmark">
                     <img
                        src="../assets/Logo/bookmark.png"
                        class="tw-h-5"
                        alt=""
                     />
                  </button>
                  <button v-else @click="unBookmark">
                     <img
                        src="../assets/Logo/bookmark (1).png"
                        class="tw-h-5"
                        alt=""
                     />
                  </button>
               </div>
            </div>
         </div>
         <div class="tw-w-1/4 tw-bg-white"></div>
      </div>
      <div class="tw-flex tw-w-screen tw-h-full">
         <div class="content tw-w-3/4 tw-h-full">
            <div class="tw-pl-14 tw-pt-10 tw-mt-10 tw-pr-4">
               <h1 class="tw-text-5xl tw-font-semibold">{{ title }}</h1>
               <div class="tw-flex">
                  <img
                     src="../assets/images/profilepicture.jpg"
                     class="tw-h-8 tw-rounded-full tw-my-4"
                     alt=""
                  />
                  <div class="tw-flex tw-items-center tw-mx-2">
                     <h1 class="tw-text-base">Faizan Siddiqui</h1>
                  </div>
                  <div class="tw-flex tw-items-center">
                     <h1 class="tw-text-sm tw-opacity-75">21 Jan 2021</h1>
                  </div>
               </div>
               <div class="tw-flex tw-mb-20">
                  <p class="tw-breal-all" v-html="body"></p>
               </div>
               <div></div>
            </div>
         </div>
         <div
            class="side tw-relative tw-pb-24 tw-w-1/4 tw-min-h-screen tw-border-l-2 tw-border-solid tw-pt-12 tw-border-black tw-right-0"
         >
            <div class="tw-relative">
               <div class="tw-absolute tw-z-50 tw-h-full tw-right-4">
                  <v-alert
                     v-if="followAlert"
                     class="tw-w-96"
                     transition="slide-x-reverse-transition"
                     type="success"
                  >
                     You Followed Olivia Fendrich Sucessfully!
                  </v-alert>
                  <v-alert
                     v-if="unFollowAlert"
                     class="tw-w-96"
                     transition="slide-x-reverse-transition"
                     type="success"
                  >
                     You Unfollowed Olivia Fendrich Sucessfully!
                  </v-alert>
               </div>
            </div>

            <div class="tw-p-4">
               <div>
                  <img
                     src="../assets/images/1_g8SH3hZJHhJVYy6UqFjv1Q.jpeg"
                     class="tw-h-28 tw-rounded-full"
                     alt=""
                  />
               </div>
               <div class="tw-flex tw-my-4">
                  <div>
                     <h1 class="tw-text-lg tw-text-black tw-font-medium">
                        Olivia Fendrich
                     </h1>
                     <p class="tw-text-sm tw-opacity-70 tw-text-black">
                        41 Followers
                     </p>
                  </div>
                  <div class="tw-my-auto tw-ml-14">
                     <v-btn
                        dark
                        @click.stop="followAlertFunction"
                        v-if="!follow"
                        color="primary"
                        small
                        >Follow</v-btn
                     >
                     <v-btn
                        dark
                        color="primary"
                        @click.stop="unFollowAlertFunction"
                        v-if="follow"
                        small
                        >Unfollow</v-btn
                     >
                  </div>
               </div>
               <div>
                  <p>In my mind i am seth Rogan.</p>
               </div>
               <div class="tw-my-4 tw-flex">
                  <a href=""
                     ><img
                        src="../assets/Logo/new-instagram-logo-glyph 1.png"
                        class="tw-h-5 tw-mr-2"
                        alt=""
                  /></a>
                  <a href=""
                     ><img
                        src="../assets/Logo/Vector (1).png"
                        alt=""
                        class="tw-h-5 tw-mr-2"
                  /></a>
                  <a href=""
                     ><img
                        src="../assets/Logo/icons8-twitter (2) 1.png"
                        alt=""
                        class="tw-h-5 tw-mr-2"
                  /></a>
               </div>
               <div class="more-from-user tw-mr-2">
                  <h1 class="tw-font-semibold tw-text-xl">
                     More From Olivia Fendrich
                  </h1>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <!-- <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser>
                  <MoreFromUser></MoreFromUser> -->
               </div>
            </div>
         </div>
      </div>
      <v-navigation-drawer
         v-model="drawer"
         fixed
         temporary
         right
         width="400px"
         class="tw-z-40"
      >
         <div class="tw-pt-4 tw-w-full tw-z-40 tw-mt-10 tw-px-4">
            <div>
               <h1 class="tw-text-xl tw-font-semibold">Responses ({{commentsArray.length}})</h1>
            </div>
            <div class="tw-my-4">
               <textarea
                  name=""
                  placeholder="What are your thoughts?"
                  class="tw-bg-gray-100 tw-py-1 tw-px-2 tw-mx-2 tw-rounded-lg tw-border-2 tw-border-gray-400 tw-border-solid"
                  id=""
                  cols="39"
                  rows="4"
                  v-model="commentBody"
               ></textarea>
               <div class="tw-flex tw-items-center">
                  <v-btn
                     @click="comment"
                     dark
                     color="#2A73C5"
                     block
                     class="tw-flex tw-items-center tw-ml-2"
                     >Comment</v-btn
                  >
               </div>
            </div>
            <div class="tw-mb-16">
               <Comment v-for="(comment,index) in commentsArray"
               :key="index"
               :body="comment.body"
               :userName="comment.user_name"
               :userId="comment.user_id"
               :loggedUserId="loggedInUserId"
               
               ></Comment>
               
            </div>
         </div>
      </v-navigation-drawer>
   </div>
</template>
<script>
import axios from "axios";
import Comment from "../components/Comments.vue";
import MoreFromUser from "../components/MoreFromUser.vue";
export default {
   props: ["id"],
   components: {
      Comment,
      MoreFromUser,
   },
   computed: {
      imageUrl() {
         return `http://localhost/fireblogs-api/public/images/${this.imgpath}`;
      },
   },
   data() {
      return {
         drawer: null,
         follow: false,
         followAlert: false,
         unFollowAlert: false,
         isBookmarked: null,
         isLiked: null,
         title: "",
         body: "",
         imgpath: "",
         likeCount: null,
         commentBody: "",
         commentsArray: [],
         loggedInUserId:null
      };
   },
   created() {
      this.getData();
      this.userLiked();
      this.userBookmarked();
      this.noOfLikes();
      this.getCommentsArray();
   },
   methods: {
      getUserID(){
         this.loggedInUserId=this.$store.getters.userId;
         console.log(this.loggedInUserId)
      },
      getCommentsArray() {
         this.getUserID()
         console.log(123);
         axios.get("/comments").then((res) => {
            this.commentsArray = res.data.filter(
               (data) => data.post_id == this.id
            );
            console.log(this.commentsArray);
         });
      },
      comment() {
         axios
            .post(
               `/post/${this.id}/comments`,
               {
                  body: this.commentBody,
               },
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then(() => {
               const data={
                  body:this.commentBody,
                  user_name:this.$store.getters.userName,
                  user_id:this.$store.getters.userId
               }
               this.commentsArray.push(data);

            });
      },
      noOfLikes() {
         axios.get(`/post/${this.id}/counts`).then((res) => {
            this.likeCount = res.data.like;
         });
      },
      userBookmarked() {
         axios
            .get(
               `/check/bookmark?post_id=${this.id}&Aut=${localStorage.getItem(
                  "token"
               )}`,
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then((res) => {
               this.isBookmarked = res.data.is_bookmark;
            });
      },
      userLiked() {
         axios
            .get(`/liked/${this.id}`, {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               this.isLiked = res.data.is_like;
            });
      },
      getData() {
         axios.get(`/post/${this.id}`).then((res) => {
            this.title = res.data.name;
            this.body = res.data.body;
            this.imgpath = res.data.image_path;
         });
      },
      like() {
         axios
            .post(
               `/post/${this.id}/likes`,
               {},
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then(() => {
               this.isLiked = !this.isLiked;
               this.likeCount++;
            });
      },
      unLike() {
         axios
            .post(
               `/post/${this.id}/likes`,
               {},
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then(() => {
               this.isLiked = !this.isLiked;
               this.likeCount--;
            });
      },
      bookmark() {
         axios
            .post(
               `/post/${this.id}/bookmark`,
               {},
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then(() => {
               this.isBookmarked = !this.isBookmarked;
            });
      },
      unBookmark() {
         this.bookmark();
      },
      // toggle() {
      //    this.follow = !this.follow;
      // },
      unFollowAlertFunction() {
         this.unFollowAlert = true;
         this.settimeUnFollow();
         this.follow = false;
      },
      followAlertFunction() {
         this.followAlert = true;
         this.settimeFollow();
         this.follow = true;
      },
      settimeFollow() {
         setTimeout(() => {
            this.followAlert = false;
            console.log(this.followAlert);
         }, 3000);
         console.log(this.followAlert);
      },
      settimeUnFollow() {
         setTimeout(() => {
            this.unFollowAlert = false;
            console.log(this.followAlert);
         }, 3000);
         console.log(this.followAlert);
      },
   },
};
</script>
<style scoped>
.v-application p {
   margin-bottom: 0px !important;
}
</style>
