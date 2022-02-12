<template>
   <div>
      <Navbar></Navbar>
      <div class="">
         <div class="tw-relative">
            <div class="tw-fixed tw-z-50 tw-top-10 tw-h-full tw-right-4">
               <v-alert :type="alertType" v-if="showAlert" class="tw-w-96">
                  {{ alertMessage }}
               </v-alert>
            </div>
         </div>
         <v-row justify="center">
            <v-dialog v-model="dialog" max-width="400" max-height="1000">
               <v-card>
                  <v-card-title class="tw-text-center text-h5">
                     You are not Logged In
                  </v-card-title>
                  <div class="tw-p-4 tw-flex tw-flex-row-reverse">
                     <v-btn right color="primary" @click="login">Login</v-btn>
                  </div>
               </v-card>
            </v-dialog>
         </v-row>
      </div>
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
                     <p class="tw-flex tw-items-center tw-ml-2">
                        {{ commentsArray.length }}
                     </p>
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
                     :src="profilePictureCheck"
                     class="tw-h-8 tw-rounded-full tw-my-4"
                     alt=""
                  />
                  <div class="tw-flex tw-items-center tw-mx-2">
                     <h1 class="tw-text-base">{{ writerName }}</h1>
                  </div>
                  <div class="tw-flex tw-items-center">
                     <h1 class="tw-text-sm tw-opacity-75">{{ dateFormat }}</h1>
                  </div>
               </div>
               <div class="tw-flex tw-mb-20">
                  <p class="tw-breal-all tw-overflow-hidden" v-html="body"></p>
               </div>
               <div></div>
            </div>
         </div>
         <div
            class="side tw-relative tw-pb-24 tw-w-1/4 tw-min-h-screen tw-border-l-2 tw-border-solid tw-pt-12 tw-border-black tw-right-0"
         >
            <div class="tw-p-4 tw-mt-6">
               <div>
                  <img
                     :src="profilePictureCheck"
                     class="tw-h-28 tw-rounded-full"
                     alt=""
                  />
               </div>
               <div class="tw-flex tw-my-4">
                  <div>
                     <h1 class="tw-text-lg tw-text-black tw-font-medium">
                        {{ writerName }}
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
                        :loading="loading"
                        >Follow</v-btn
                     >
                     <v-btn
                        dark
                        color="primary"
                        @click.stop="unFollowAlertFunction"
                        v-if="follow"
                        small
                        :loading="loading"
                        >Unfollow</v-btn
                     >
                  </div>
               </div>
               <div>
                  <p>{{ writerBio }}</p>
               </div>
               <div class="tw-my-4 tw-flex">
                  <a :href="writerInstagram" v-if="writerInstagram"
                     ><img
                        src="../assets/Logo/new-instagram-logo-glyph 1.png"
                        class="tw-h-5 tw-mr-2"
                        alt=""
                  /></a>
                  <a :href="writerFacebook" v-if="writerFacebook"
                     ><img
                        src="../assets/Logo/Vector (1).png"
                        alt=""
                        class="tw-h-5 tw-mr-2"
                  /></a>
                  <a :href="writerTwitter" v-if="writerTwitter"
                     ><img
                        src="../assets/Logo/icons8-twitter (2) 1.png"
                        alt=""
                        class="tw-h-5 tw-mr-2"
                  /></a>
               </div>
               <div class="more-from-user tw-mr-2" v-if="moreFromUser.length">
                  <h1 class="tw-font-semibold tw-text-xl">
                     More From {{writerName}}
                  </h1>
                  <MoreFromUser
                     v-for="(blog, index) in moreFromUser"
                     :key="index"
                     :title="blog.name"
                     :image="blog.image_path"
                     :id="blog.id"
                  ></MoreFromUser>

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
               <h1 class="tw-text-xl tw-font-semibold">
                  Responses ({{ commentsArray.length }})
               </h1>
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
                  @keyup.13.stop="comment"
               ></textarea>
               <div class="tw-flex tw-items-center">
                  <v-btn
                     @click="comment"
                     @keyup.enter="comment"
                     dark
                     color="#2A73C5"
                     block
                     :loading="loading"
                     class="loading tw-flex tw-items-center tw-ml-2"
                     >Comment</v-btn
                  >
               </div>
            </div>
            <div class="tw-mb-16">
               <Comment
                  v-for="(comment, index) in commentsArray"
                  :key="index"
                  :body="comment.body"
                  :userName="comment.user_name"
                  :userId="comment.user_id"
                  :loggedUserId="loggedInUserId"
                  :date="comment.created_at"
                  :commentId="comment.id"
                  :profilePicture="comment.users.image_path"
                  @delete-comment="deleteComment"
                  @report="showReportAlert"
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
import moment from "moment";
export default {
   props: ["id"],
   components: {
      Comment,
      MoreFromUser,
   },
   watch:{
      id(change){
         this.id=change;
         
      }
   },
   computed: {

      profilePictureCheck() {
         if (this.writerImage) {
            return `http://localhost/fireblogs-api/public/images/${this.writerImage}`;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
      imageUrl() {
         return `http://localhost/fireblogs-api/public/images/${this.imgpath}`;
      },
      dateFormat() {
         return moment(this.date).calendar(new Date(), {
            sameDay: "[Today]",
            nextDay: "[Tomorrow]",
            nextWeek: "dddd",
            lastDay: "[Yesterday]",
            lastWeek: "[Last] dddd",
            sameElse: "DD/MM/YYYY",
         });
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
         loggedInUserId: null,
         loading: false,
         dialog: false,
         date: null,
         writerImage: "",
         writerName: "",
         writerBio: "",
         writerInstagram: "",
         writerFacebook: "",
         writerTwitter: "",
         following: null,
         showAlert: null,
         alertMessage: "",
         alertType: "",
         moreFromUser: [],
         writerId: "",
      };
   },
   created() {
      this.getData();
      this.userLiked();
      this.userBookmarked();
      this.noOfLikes();
      this.getCommentsArray();
      this.userFollowing();
   },
   methods: {
      moreFromUserMethod() {
         axios.get(`/all/${this.writerId}`).then((res) => {
            if (res.data.length != 0) {
               this.moreFromUser = res.data.filter(
                  (listabc) => listabc.id != this.id
               );
            }
         });
      },
      showReportAlert() {
         this.alertMessage = "Reported Successfully";
         this.alertType = "success";
         this.showAlert = true;
         this.alertTimeOut();
      },
      userFollowing() {
         if (this.$store.getters.userName != "") {
            axios
               .get(`/check/${this.id}`, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  this.follow = res.data;
               });
         }
      },
      deleteComment(commentId) {
         this.commentsArray = this.commentsArray.filter(
            (comment) => comment.id !== commentId
         );
         // console.log(this.commentsArray);
      },
      getUserID() {
         this.loggedInUserId = this.$store.getters.userId;
         // console.log(this.loggedInUserId);
      },
      getCommentsArray() {
         this.getUserID();
         // console.log(123);
         axios.get("/comments").then((res) => {
            this.commentsArray = res.data.filter(
               (data) => data.post_id == this.id
            );
            this.commentsArray = this.commentsArray.reverse();
         });
      },
      comment() {
         this.loading = true;
         if (this.$store.getters.userName !== "") {
            axios
               .post(
                  `/post/${this.id}/comments`,
                  {
                     body: this.commentBody,
                  },
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then((res) => {
                  if (res.data == "You are blocked") {
                     this.showAlert = true;
                     this.alertMessage = "You are blocked";
                     this.alertType = "warning";
                     this.alertTimeOut();

                     console.log("blocked");
                  } else {
                     this.commentBody = "";
                     this.commentsArray.unshift(res.data);
                  }
               })
               .finally(() => {
                  this.loading = false;
                  this.commentBody = "";
               });
         } else {
            this.dialog = true;
         }
      },
      alertTimeOut() {
         setTimeout(() => {
            this.showAlert = false;
         }, 1000);
      },
      noOfLikes() {
         axios.get(`/post/${this.id}/counts`).then((res) => {
            this.likeCount = res.data.like;
         });
      },
      userBookmarked() {
         if (this.$store.getters.userName !== "") {
            axios
               .get(
                  `/check/bookmark?post_id=${
                     this.id
                  }&Aut=${localStorage.getItem("token")}`,
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then((res) => {
                  this.isBookmarked = res.data.is_bookmark;
               });
         }
      },
      userLiked() {
         if (this.$store.getters.userName !== "") {
            axios
               .get(`/liked/${this.id}`, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  this.isLiked = res.data.is_like;
               });
         }
      },
      getData() {
         axios.get(`/post/${this.id}`).then((res) => {
            // console.log(res)
            this.title = res.data.post.name;
            this.body = res.data.post.body;
            this.imgpath = res.data.post.image_path;
            this.date = res.data.post.created_at;
            this.writerId = res.data.post.user_id;
            this.moreFromUserMethod();
            // console.log(this.date);
            // console.log(res.data.user[0].name);
            if (res.data.user[0].bio) {
               this.writerBio = res.data.user[0].bio;
            }
            if (res.data.user[0].name) {
               this.writerName = res.data.user[0].name;
            }
            if (res.data.user[0].image_path) {
               this.writerImage = res.data.user[0].image_path;
            }
            if (res.data.user[0].instagram) {
               this.writerInstagram = res.data.user[0].instagram;
            }
            if (res.data.user[0].facebook) {
               this.writerFacebook = res.data.user[0].facebook;
            }
            if (res.data.user[0].youtube) {
               this.writerTwitter = res.data.user[0].youtube;
            }
            // console.log(this.writerInstagram);
         });
      },
      login() {
         this.$router.push("/login");
      },
      like() {
         if (this.$store.getters.userName !== "") {
            axios
               .post(
                  `/post/${this.id}/likes`,
                  {},
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then(() => {
                  this.isLiked = !this.isLiked;
                  this.likeCount++;
               });
         } else {
            this.dialog = true;
         }
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
         if (this.$store.getters.userName !== "") {
            axios
               .post(
                  `/post/${this.id}/bookmark`,
                  {},
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then(() => {
                  if (!this.isBookmarked) {
                     this.alertMessage = "Added to your bookmark list.";
                     this.alertType = "success";
                     this.showAlert = true;
                     this.alertTimeOut();
                  } else {
                     this.alertMessage = "Removed from your bookmark list.";
                     this.alertType = "success";
                     this.showAlert = true;
                     this.alertTimeOut();
                  }
                  this.isBookmarked = !this.isBookmarked;
               });
         } else {
            this.dialog = true;
         }
      },
      unBookmark() {
         this.bookmark();
      },
      // toggle() {
      //    this.follow = !this.follow;
      // },
      unFollowAlertFunction() {
         if (this.$store.getters.userName !== "") {
            this.loading = true;
            axios
               .post(
                  `/follow/${this.id}`,
                  {},
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then(() => {
                  this.alertMessage = `You followed ${this.writerName} Sucessfully`;
                  this.alertType = "success";
                  this.showAlert = true;
                  this.alertTimeOut();
                  this.follow = false;
               })
               .finally(() => {
                  this.loading = false;
               });
         } else {
            this.dialog = true;
         }
      },
      followAlertFunction() {
         if (this.$store.getters.userName !== "") {
            this.loading = true;
            axios
               .post(
                  `/follow/${this.id}`,
                  {},
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then(() => {
                  this.alertMessage = `You followed ${this.writerName} Sucessfully`;
                  this.alertType = "success";
                  this.showAlert = true;
                  this.follow = true;
                  this.alertTimeOut();
               })
               .finally(() => (this.loading = false));
         } else {
            this.dialog = true;
         }
      },
   },
};
</script>
<style scoped>
.v-application p {
   margin-bottom: 0px !important;
}
</style>
