<template>
    <div class="w-screen bg-green-200 py-[50px] sm:px-[150px] flex justify-center sm:justify-start">
        <div class="sm:flex justify-center">
            <p class="sm:hidden block mx-auto w-full text-center text-3xl font-bold">DENIS WANJOHI</p>
            <img src="/Images/me.jpg" class="w-[200px] rounded-full" alt="">
            <div class=" w-fit min-w-[200px] mx-2 flex-col place-content-center">
                <p class="hidden sm:block mx-auto w-full text-center text-3xl font-bold">DENIS WANJOHI</p>
                <p class="font-mono pt-3"> {{desc}}</p>
            
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const name = ref("FULL-STACK WEB DEVELOPER")
let nameArr = name.value.split('')
let desc = ref()
let namee = ref([])
let i = 0 ;
let myintv = setInterval(()=>{
    namee.value.push(nameArr[i])
    desc.value = namee.value.toString()
    desc.value = desc.value.replace(/,/gi,"")
    
    i++
    if(nameArr.length == i){
        clearInterval(myintv)

        // setTimeout(()=>{
        //     i = 0;
        // },5000)
        // nameArr = []
        
    }
},1000)


</script>

<style>

</style>