<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-mt-20">
         <div class="tw-px tw-w-screen tw-px-20">
            <div class="">
               <h1 class="tw-font-semibold tw-text-4xl">Admin Panel</h1>
            </div>
            <div class="tw-my-6">
               <v-tabs color="blaack accent-4" left>
                  <div class="tw-flex tw-justify-between tw-w-full">
                     <div
                        class="tw-flex tw-border-b-2 tw-w-full tw-border-gray-300 tw-border-solid"
                     >
                        <v-tab href="#publish" dark class="tw-text-black"
                           ><v-badge color="green" :content="allBlogs.length"
                              >Publish</v-badge
                           ></v-tab
                        >
                        <v-tab dark href="#report"
                           ><v-badge color="green" :content="allReports.length"
                              >Reports</v-badge
                           ></v-tab
                        >
                        <v-tab dark href="#users"
                           ><v-badge color="green" :content="allUsers.length"
                              >Users</v-badge
                           ></v-tab
                        >
                     </div>
                  </div>

                  <v-tab-item value="users">
                     <div class="tw-w-full tw-my-8 tw-mb-10">
                        <FollowTab
                           v-for="(user, index) in allUsers"
                           :key="index"
                           :userName="user.name"
                           :profilePicture="user.image_path"
                           :noOfBlogs="user.posts_count"
                        ></FollowTab>
                     </div>
                  </v-tab-item>
                  <v-tab-item value="publish">
                     <div class="tw-mt-4">
                        <PublishBar
                           v-for="(blog, index) in allBlogs"
                           :key="index"
                           :id="blog.id"
                           :title="blog.name"
                           :status="blog.status"
                           :userName="blog.users.name"
                           :profilePicture="blog.users.image_path"
                        ></PublishBar>
                     </div>
                  </v-tab-item>
                  <v-tab-item value="report">
                     <div class="tw-mt-4 tw-w-full">
                        <ReportBar
                           @blocked-status-change="blockedStatusChange"
                           v-for="(report, index) in allReports"
                           :key="index"
                           :comment="report.comments.body"
                           :commentedBy="report.comments.user_name"
                           :reportId="report.id"
                           :postTitle="report.posts.name"
                           :postId="report.posts.id"
                           :commentedByProfilePicture="
                              report.comments.users.image_path
                           "
                           :isBlocked="report.comments.users.status"
                        ></ReportBar>
                     </div>
                  </v-tab-item>
               </v-tabs>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import FollowTab from "../components/FollowTab.vue";
import PublishBar from "../components/PublishBar.vue";
import ReportBar from "../components/ReportBar.vue";
import axios from "axios";
export default {
   data() {
      return {
         allBlogs: [],
         allReports: [],
         allUsers: [],
      };
   },
   created() {
      this.getPublishBlogs();
      this.getReportedComments();
      this.getAllUsers();
   },
   methods: {
      getAllUsers() {
         axios
            .get("/ttt", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               this.allUsers = res.data;
            });
      },
      blockedStatusChange(){
         this.getReportedComments();
      },
      getReportedComments() {
         axios
            .get("/reported", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               // console.log(res.data[0])
               this.allReports = res.data;
            });
      },
      getPublishBlogs() {
         axios
            .get("/post", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               this.allBlogs = res.data;
               // console.log(this.allBlogs);
            })
            .catch((err) => {
               console.log(err);
            });
      },
   },
   components: {
      FollowTab,
      PublishBar,
      ReportBar,
   },
};
</script>
