<script setup>
import { Icon } from "@iconify/vue";
</script>
<script>
export default {
  components: {
    Icon,
  },
};
</script>

<template>
  <div class="footbar grid grid-cols-5 gap-2 pr-1 pl-1 pt-1 pb-1 text-black">
    <RouterLink
      to="/profile_i"
      class="rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pl-1"
    >
      <Icon icon="material-symbols:home" color="black" width="45" height="45" />
    </RouterLink>
    <RouterLink
      to="/pendidikan_i"
      class="rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pl-1"
    >
      <Icon icon="cil:education" color="black" width="45" height="45" />
    </RouterLink>
    <RouterLink
      to="/pengalaman_i"
      class="rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pl-1"
    >
      <Icon
        icon="game-icons:achievement"
        color="black"
        width="45"
        height="45"
      />
    </RouterLink>
    <RouterLink
      to="/keahlian_i"
      class="rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pl-1"
    >
      <Icon icon="game-icons:skills" color="black" width="45" height="45" />
    </RouterLink>
    <RouterLink
      to="/project_i"
      class="rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pl-1"
    >
      <Icon
        icon="arcticons:zoho-projects"
        color="black"
        width="45"
        height="45"
      />
    </RouterLink>
  </div>
</template>

<style>
.footbar{position:fixed;bottom:0;right:0;left:0;height:50px;background-color:#fff;visibility:hidden;z-index:1}@media (max-width: 612px){.footbar{visibility:visible}}@media (max-width: 378px){.footbar{visibility:visible}.tom{font-size:11px}}@media (max-height: 415px) and (max-width: 916px){.nav{visibility:hidden}.footbar{visibility:visible}}
</style>
