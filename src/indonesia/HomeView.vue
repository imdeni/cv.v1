<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
     <div class="loading">
        <img src="./image/load.gif" alt="load-awal" class="loads rounded-full" width="190" height="190" Cache-Control: max-age=31536000>
        <p class="loads2 w-48 h-48 opacity-100">D</p>
     </div>

     <div class="hide">
          <div class="grid grid-cols-1 gap-4 text-center rounded-lg font-bold text-white border-2 border-white">
          <h1 class="font-bold pt-2">Language :</h1>
          <hr>
               <div class="grid grid-cols-2 gap-2 pb-4 pl-8 pr-8">
                    <RouterLink to="/profile_i" class="rounded-full font-bold text-white hover:text-gray-600 border-2 border-white   hover:bg-white pr-4 pl-4 pt-2 pb-2">Indonesia</RouterLink>
                    <RouterLink to="/profile_e" class="rounded-full font-bold text-white hover:text-gray-600 border-2 border-white   hover:bg-white pr-4 pl-4 pt-2 pb-2">English</RouterLink>
               </div>
          </div>
     </div>
     <RouterView />

</template>
