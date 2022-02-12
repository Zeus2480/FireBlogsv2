<template>
    <div  @click="router" class="tw-w-full tw-cursor-pointer tw-flex tw-my-2  hover:tw-border-black tw-border-2 tw-border-solid  ">
        <div class="image tw-w-1/6"><img :src="imageUrl" style="height:50px; width:60px" class="" alt=""></div>
        <div class="title tw-w-5/6  tw-my-auto tw-ml-2 " >
            <h5 class="tw-text-base tw-truncate">{{title}}</h5>
        </div>
    </div>
</template>
<script>
export default {
    props:['title','image' ,"id"],
    computed:{
        imageUrl() {
         return `http://localhost/fireblogs-api/public/images/${this.image}`;
      },
    },
    methods:{
        router(){
            this.$router.push(`/viewpost/${this.id}`)
            this.$router.go();
        }
    }
}
</script>