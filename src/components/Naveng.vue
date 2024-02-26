<script setup>
import { Icon } from "@iconify/vue";
import '@/assets/css/nav.css'
</script>
<script>
export default {
  components: {
    Icon,
  },
};
</script>


<template>
    <div class="nav rounded-lg place-content-center">
            <div class="nav-text">
              <RouterLink to="/profile_e" class="font-bold">
                <button class="btn rounded-full bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white">Profile</button>
              </RouterLink>
              <RouterLink to="/pendidikan_e" class="font-bold">
                <button class="btn rounded-full bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white">Education</button>
              </RouterLink>
              <RouterLink to="/pengalaman_e" class="font-bold">
                <button class="btn rounded-full bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white">Experience</button>
              </RouterLink>
              <RouterLink to="/keahlian_e" class="font-bold">
                <button class="btn rounded-full bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white">Skills</button>
              </RouterLink>
              <RouterLink to="/project_e" class="font-bold">
                <!-- <RouterLink to="" class="font-bold"> -->
                <button class="btn rounded-full bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white">Project</button>
              </RouterLink>
              <br><br><br>
              <div class="grid grid-cols-3 gap-2">
                <RouterLink to="/profile_i" class="rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pr-4 pl-4 pt-2 pb-2">
                  <div class="kiri grid grid-cols-2">
                    <Icon icon="emojione:flag-for-indonesia" color="#fff" width="26" height="26" />
                    <button class="font-bold">IND</button>
                  </div>
                </RouterLink>
                <RouterLink to="/" class="rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pr-4 pl-4 pt-2 pb-2">
                  <div class="kiri grid grid-cols-1 gap-1 pr-4 pl-4">
                    <Icon icon="zondicons:reload" color="#fff" width="26" height="26" />
                  </div>
                </RouterLink>
                <RouterLink to="/profile_e" class=" rounded-full font-bold bg-gray-400 mb-2 hover:bg-gradient-to-r from-black hover:text-white pr-4 pl-4 pt-2 pb-2">
                  <div class="kiri grid grid-cols-2">
                    <Icon icon="emojione:flag-for-united-kingdom" color="#fff" width="26" height="26" />
                    <button class="font-bold">ENG</button>
                  </div>
                </RouterLink>
              </div>
              </div>
        </div>

        
</template>

