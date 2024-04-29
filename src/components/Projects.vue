<template>
  <div class="bg-orange-300 w-screen pb-10">
    <h3 class="text-2xl font-extrabold text-center  py-5 hover:underline">Projects</h3>
    <div class="w-3/4 mx-auto my-5 rounded-tl-[40px] rounded-br-[40px] h-fit bg-cyan-500 pb-3 px-2">
        <h3 class="text-xl font-extrabold text-center  py-5 hover:underline">Blogger</h3>
        <div class="sm:flex  mb-2 gap-2">
            <div class="sm:w-1/2 w-full">
                <img :src="blogImg" class="w-[]" alt="">
            </div>
            <div class="sm:w-1/2 w-full  text-center  text-sm font-mono flex justify-center place-items-center">
                This just a blog site that is educative,fun and for passing out any relavent information to the reader 
            </div>
        </div>

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const image = [
    {
        img:"/Images/read.png",
    },
    {
        img:"/Images/view.png",
    },
    {
        img:"/Images/post.png",
    }
]

let i = 1
let blogImg = ref(image[0].img)
setInterval(()=>{
    blogImg.value = image[i].img
    i++
    if(i == 3){
        i = 0
    }
},5000)

</script>

<style>

</style>