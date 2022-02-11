<template>
   <div
      @click="open"
      class="tw-flex tw-w-full tw-items-center tw-border-2 tw-border-white tw-mb-4 tw-cursor-pointer hover:tw-border-black"
      style="height: 140px"
   >
      <div class="content tw-flex-1 tw-w-3/4 tw-px-4 tw-py-2 tw-flex-col">
         <div class="username tw-flex tw-mt-4">
            <img
               :src="profilePictureCheck"
               class="tw-rounded-full tw-h-6"
               alt=""
            />
            <h6 class="tw-ml-2 tw-text-xs tw-pt-1 tw-font-medium">
               {{ userName }}
            </h6>
         </div>
         <div class="title">
            <h2 class="tw-font-bold tw-text-xl tw-truncate">
               {{ title }}
            </h2>
         </div>
         <div class="summary tw-w-full">
            <p class="tw-opacity-75 tw-truncate">
               {{ summary }}
            </p>
         </div>
         <div class="date tw-flex tw-items-baseline tw-py-2">
            <p class="tw-opacity-75 tw-text-sm">{{ dateFormat }}</p>
         </div>
      </div>
      <div class="image tw-flex-5">
         <img
            :src="imageUrl"
            style="height: 133px; width: 200px"
            class="tw-h-horizontal-img tw-w-horizontal-img"
            alt=""
         />
      </div>
   </div>
</template>
<script>
import moment from "moment";
export default {
   props: [
      "id",
      "title",
      "summary",
      "image",
      "userName",
      "date",
      "profilePicture",
   ],
   computed: {
      imageUrl() {
         return `http://localhost/fireblogs-api/public/images/${this.image}`;
      },
      profilePictureCheck() {
         if (this.profilePicture) {
            return `http://localhost/fireblogs-api/public/images/${this.profilePicture}`;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
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
   methods: {
      open() {
         this.$router.push(`/viewpost/${this.id}`);
      },
   },
};
</script>
