<script setup>
import '@/assets/css/indo.css'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
     <RouterView />
</template>

<style>
.loading{position:fixed;top:0;left:0;right:0;bottom:0;animation:load 6s forwards}.loads{margin-right:auto;margin-left:auto;top:35%;animation:loads 4s forwards}.loads2{position:absolute;margin:auto;left:0;right:0;top:35%;color:#181818;font-size:64px;padding-left:75px;padding-top:44px;animation:loads2 4s forwards}@keyframes load{0%{}100%{background-color:transparent}}@keyframes loads{40%{opacity:100%}100%{opacity:0}}@keyframes loads2{40%{opacity:100%}100%{opacity:0}}.hide{animation:vis 7s forwards}@keyframes vis{0%{opacity:0}50%{opacity:0}100%{opacity:100%}}@media (max-height: 415px) and (max-width: 916px){.loads,.loads2{top:25%}}
</style>



