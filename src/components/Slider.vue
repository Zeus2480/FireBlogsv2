<template>
   <div class="tw-h-full">
      <div class="tw-w-full tw-flex tw-h-full">
         <div class="tw-w-1/2  tw-py-4 tw-h-full">
            <div class="tw-w-full tw-h-full tw-cursor-pointer"  @click="router1" >
               <div
                  class="tw-bg-navy-blue tw-rounded-lg tw-h-full tw-flex tw-w-11/12 tw-mx-auto"
               >
                  <div class="tw-w-3/5 tw-pl-6 tw-p-3">
                     <div class="title tw-h-2/6 tw-w-full">
                        <h1
                           class="tw-truncate tw-whitespace-normal tw-text-lg tw-text-ellipsis tw-h-full tw-text-white tw-font-semibold tw-h-2/5"
                        >
                          {{blog1.name}}
                        </h1>
                     </div>
                     <div class="title tw-h-3/6 tw-w-full">
                        <p
                           class="tw-text-base tw-whitespace-normal tw-truncate tw-text-ellipsis tw-text-white tw-h-full"
                        >
                          {{blog1.excerpt}}
                        </p>
                     </div>
                  </div>
                  <div class="tw-w-2/5 tw-p-2">
                     <img
                        :src="imageUrl1"
                        class="tw-object-cover tw-rounded-lg tw-h-full tw-w-full"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
         <div class="tw-w-1/2  tw-py-4 tw-h-full">
            <div class="tw-w-full tw-h-full tw-cursor-pointer" @click="router2">
               <div
                  class="tw-bg-navy-blue tw-rounded-lg tw-h-full tw-flex tw-w-11/12 tw-mx-auto"
               >
                  <div class="tw-w-3/5 tw-pl-6 tw-p-3">
                     <div class="title tw-h-2/6 tw-w-full">
                        <h1
                           class="tw-truncate tw-whitespace-normal tw-text-lg tw-text-ellipsis tw-h-full tw-text-white tw-font-semibold tw-h-2/5"
                        >
                           {{blog2.name}}
                        </h1>
                     </div>
                     <div class="title tw-h-3/6 tw-w-full">
                        <p
                           class="tw-text-base tw-whitespace-normal tw-truncate tw-text-ellipsis tw-text-white tw-h-full"
                        >
                           {{blog2.excerpt}}
                        </p>
                     </div>
                  </div>
                  <div class="tw-w-2/5 tw-p-2">
                     <img
                        :src="imageUrl2"
                        class="tw-h-full tw-w-full"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
// import SliderContent from "./SliderContent.vue"
export default {
   data(){
      return{
         blog1:null,
         blog2:null,
      }
   },
   computed:{
       imageUrl1() {
         return `http://localhost/fireblogs-api/public/images/${this.blog1.image_path}`;
      },
      imageUrl2(){
          return `http://localhost/fireblogs-api/public/images/${this.blog2.image_path}`;
      }
   },
   props:['data'],
   components:{
      // SliderContent,
   },
   created(){
      this.blog1=this.data[0]
      this.blog2=this.data[1]
   },
   methods:{
      router2(){
         this.$router.push(`/viewpost/${this.blog2.id}`)
      },
      router1(){
         this.$router.push(`/viewpost/${this.blog1.id}`)
      }
   }
   
}
</script>
