<template>
   <div @click="open" class="tw-flex tw-w-full tw-items-center tw-border-2 tw-border-white tw-mb-4 tw-cursor-pointer hover:tw-border-black " style="height:140px">
      <div class="content tw-flex-1 tw-px-4 tw-py-2 tw-flex-col">
         <div class="username tw-flex tw-mt-4">
            <img
               src="../assets/images/1_g8SH3hZJHhJVYy6UqFjv1Q.jpeg"
               class="tw-rounded-full tw-h-6 "
               alt=""
            />
            <h6 class="tw-ml-2 tw-text-xs tw-pt-1 tw-font-medium">
               Olivia Fendrich
            </h6>
         </div>
         <div class="title ">
            <h2 class="tw-font-bold tw-text-xl">
               Let’s Hope Bitcoin Crashes to $100 (Again)
            </h2>
         </div>
         <div class="summary ">
            <p class="tw-opacity-75">
               Lots of people are getting stupidly rich right now. This is the
               greatest investment opportunity I’ve ever seen.
            </p>
         </div>
         <div class="date tw-flex tw-items-baseline tw-py-2">
            <p class="tw-opacity-75 tw-text-sm">1 Jan 2022</p>
         </div>
      </div>
      <div class="image tw-flex-5">
         <img
            src="../assets/images/1_Q3FGudlNTnW-OaA2kUECRg.jpeg"
            style="height: 133px; width: 200px"
            class="tw-h-horizontal-img tw-w-horizontal-img"
            alt=""
         />
      </div>
   </div>
</template>
<script>
export default {
   methods:{
      open(){
         this.$router.push('/viewpost/id')
      }
   }
}
</script>
