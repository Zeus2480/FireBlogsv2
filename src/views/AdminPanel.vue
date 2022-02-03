<template>
   <div>
      <Navbar></Navbar>
      <div class="tw-mt-20">
         <div class="tw-px tw-w-screen tw-px-20">
            <div class="">
               <h1 class="tw-font-semibold tw-text-4xl">Admin Panel</h1>
            </div>
            <div class="tw-my-6">
               <v-tabs color="blaack accent-4" grow right v-model="tab">
                  <div class="tw-flex tw-justify-between">
                     <div class="tw-flex">
                        <v-tab href="#publish" dark class="tw-text-black"
                           ><v-badge color="green" content="6"
                              >Publish</v-badge
                           ></v-tab
                        >
                        <v-tab dark href="#report"
                           ><v-badge color="green" content="6"
                              >Reports</v-badge
                           ></v-tab
                        >
                        <v-tab dark href="#users"
                           ><v-badge color="green" content="6"
                              >Users</v-badge
                           ></v-tab
                        >
                     </div>
                  </div>

                  <v-tab-item value="users">
                     <div class="tw-w-full tw-my-8 tw-mb-10">
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                        <FollowTab></FollowTab>
                     </div>
                  </v-tab-item>
                  <v-tab-item value="publish">
                     <div class="tw-mt-4">
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                        <PublishBar></PublishBar>
                     </div>
                  </v-tab-item>
                  <v-tab-item value="report">
                     <div class="tw-mt-4">
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
                        <ReportBar></ReportBar>
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
export default {
   components: {
      FollowTab,
      PublishBar,
      ReportBar,
   },
};
</script>
