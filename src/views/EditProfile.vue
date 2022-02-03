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
                  src="../assets/images/profilepicture.jpg"
                  class="tw-h-24 tw-rounded-full"
                  alt=""
               />
               <div class="tw-flex tw-items-center">
                  <v-btn
                     dark
                     small
                     color="#2A73C5"
                     class="tw-flex tw-items-center tw-ml-6"
                     >Edit Profile Picture</v-btn
                  >
               </div>
               
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
                <label for="Name" class="tw-mb-4 tw-text-xl tw-font-medium">Name</label>
                <input type="text" id="Name" placeholder="" class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md">
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
                <label for="Bio" class="tw-mb-4 tw-text-xl tw-font-medium">Bio</label>
                <textarea name="" id="" class="tw-bg-gray-100 tw-px-2 tw-py-1 tw-border-2 tw-border-solid tw-border-gray-300 tw-rounded-md" placeholder="Type your bio here..."  rows="4"></textarea>
            </div>
            <label  class="tw-mb-4 tw-text-xl tw-font-medium">Socials</label>
            <div class="tw-flex tw-flex-col tw-my-4">
                <label for="insta" class="tw-mb-4 tw-text-xl tw-font-medium">Instagram</label>
                <input type="text" id="insta" placeholder="Paste your instagram link here..." class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md">
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
                <label for="facebook" class="tw-mb-4 tw-text-xl tw-font-medium">Facebook</label>
                <input type="text" id="facebook" placeholder="Paste your facebook link here..." class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md">
            </div>
            <div class="tw-flex tw-flex-col tw-my-4">
                <label for="twitter" class="tw-mb-4 tw-text-xl tw-font-medium">Twitter</label>
                <input type="text" id="twitter" placeholder="Paste your twitter link here..." class="tw-bg-gray-100 tw-border-2 tw-border-solid tw-border-gray-300 tw-px-2 tw-py-1 tw-rounded-md">
            </div>
            <div class="tw-flex tw-flex-col tw-my-4 tw-mb-10">
               <v-btn
                     dark
                     color="#2A73C5"
                     class="tw-flex tw-items-center"
                     >Update</v-btn
                  >
            </div>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>
