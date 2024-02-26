<script setup>
import MenuNav from "../components/Naveng.vue";
import FootbarNav from "../components/Footbar_e.vue";
import '@/assets/css/awan.css'
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
  <!-- --AWAN-- -->
  <div class="awan">
    <img src="../indonesia/image/awan.png" alt="bg" />
    <p class="isi-awan">Planning</p>
    <p class="isi-awan2">Analysis</p>
    <p class="isi-awan3">Design</p>
    <p class="isi-awan4">Implementation</p>
    <p class="isi-awan5">Maintenance</p>
  </div>
  <!-- --END AWAN-- -->

  <!-- --BACKGHROUND-- -->
  <img src="../indonesia/image/kaca.png" alt="bg" width="100" class="kaca" />
  <img src="../indonesia/image/grgr.png" alt="bg" class="bgg" />
  <img src="../indonesia/image/grgr.png" alt="bg" class="bggg" />
  <img src="../indonesia/image/grgr.png" alt="bg" class="bg" />
  <img src="../indonesia/image/testes.png" alt="bg" class="homan w-96" />
  <!-- --END BACKGHROUND-- -->

  <div class="main-show-profile">
    <div class="monitor">
      <img alt="bg"
        src="../indonesia/image/comp.gif"
        class="rounded-full border-double border-8 border-gray-500"
      />
    </div>
  </div>

  <main>
    <MenuNav />
  </main>

  <main>
    <FootbarNav />
  </main>

  <div class="grid grid-cols-1 gap-1 place-content-center h-8 m-1">
    <div class="box-atas rounded-t-lg border-sky-500">
      <p class="text2 hides">C:\Profile</p>
      <div class="icon hides grid grid-cols-3 gap-1 w-24">
        <Icon icon="mdi:minus" color="#fff" width="24" height="24" />
        <Icon
          icon="solar:minimize-square-3-outline"
          color="#fff"
          width="24"
          height="24"
        />
        <Icon
          icon="material-symbols:close-rounded"
          color="#fff"
          width="24"
          height="24"
        />
      </div>
    </div>
    <div class="box rounded-b-lg border-sky-500">
      <p class="text-nama">Hi, my name is Deni Achmad.</p>
      <p class="text">Advanced beginners programmer</p>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-1 place-content-center h-8 m-1">
    <a
      href="https://mail.google.com/mail/u/0/?fs=1&to=im.deniachmad@gmail.com&tf=cm"
      target="_blank"
    >
      <div
        class="email rounded-full hover:bg-gradient-to-r from-black to-gray-500"
      >
        <div class="isi-email hides grid grid-cols-2 gap-1 w-64">
          <Icon icon="mdi:email" color="#fff" width="24" height="24" />
          <p class="hides">Im.deniachmad@gmail.com</p>
        </div>
      </div>
    </a>
  </div>

  <div class="grid grid-cols-1 gap-1 place-content-center h-8 m-1">
    <a href="https://wa.me/+6285803619114" target="_blank">
      <div
        class="no_hp rounded-full hover:bg-gradient-to-r from-black to-gray-500"
      >
        <div class="isi-email hides grid grid-cols-2 gap-1 w-64">
          <Icon icon="mdi:telephone" color="#fff" width="24" height="24" />
          <p class="hides">+6285803619114</p>
        </div>
      </div>
    </a>
  </div>

  <div class="jarak-bawah grid grid-cols-1 gap-1 place-content-center h-8 m-1">
    <!-- <a href="https://github.com/deni1297" target="_blank"> -->
    <a href="https://github.com/imdeni" target="_blank">
      <div
        class="github rounded-full hover:bg-gradient-to-r from-black to-gray-500"
      >
        <div class="isi-email hides grid grid-cols-2 gap-1 w-64">
          <Icon icon="mdi:github" color="#fff" width="24" height="24" />
          <!-- <p>https://github.com/de***7</p> -->
          <p class="hides">imdeni</p>
        </div>
      </div>
    </a>
    <!-- </a> -->
  </div>

  <!-- </div> -->
</template>

