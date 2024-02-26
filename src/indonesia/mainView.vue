<script setup>
import MenuNav from '../components/Nav.vue'
import Footbar_iNav from '../components/Footbar.vue'
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
            <img src="./image/awan.png"  alt="awan"/>
             <p class="isi-awan">Planning</p>
            <p class="isi-awan2">Analysis</p>
            <p class="isi-awan3">Design</p>
            <p class="isi-awan4">Implementation</p>
            <p class="isi-awan5">Maintenance</p> 
        </div>
        <!-- --END AWAN-- -->
        
        <!-- --BACKGHROUND-- -->
        <img src="./image/kaca.png" alt="kaca" width="100" class="kaca" />
        <img src="./image/grgr.png" alt="gr" class="bgg" />
        <img src="./image/grgr.png" alt="gr" class="bggg" />
        <img src="./image/grgr.png" alt="gr" class="bg" />
        <!-- <img src="./image/grgr.png" class="bgggg" /> -->
        <img src="./image/testes.png" alt="bg" class="homan w-96" />
        <!-- --END BACKGHROUND-- -->

        <div class="main-show-profile">
          <div class="monitor">
              <img
              alt="gif"
              src="./image/comp.gif"
              class="rounded-full border-double border-8 border-gray-500"
              />
          </div>
        </div>

        <main>
          <MenuNav />
        </main>

        <main>
          <Footbar_iNav />
        </main>

        <div class="grid grid-cols-1 gap-1 place-content-center h-8 m-1">
            
          <div class="box-atas rounded-t-lg border-sky-500">
            <p class="text2 hides">C:\Profil</p>
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
            <p class="text-nama">Hi, nama saya Deni Achmad.</p>
            <p class="text">Programmer tingkat lanjut</p>
            </div>
        </div>

        <div class=" grid grid-cols-1 gap-1 place-content-center h-8 m-1">
            <a
            href="https://mail.google.com/mail/u/1/#inbox/FMfcgzGsmWsLpsZhqMHxMDWjSwtvvQrP?compose=CllgCKCGDWVBSwxhFSnrVlrgcHTrdpvXMzsKWwbPqFsPQfkdvMBXxnTrpPvGGvQqdwcRXfzzKLB"
            target="_blank"
            >
            <div class="email rounded-full hover:bg-gradient-to-r from-black to-gray-500">
                <div class="isi-email hides grid grid-cols-2 gap-1 w-64">
                <Icon icon="mdi:email" color="#fff" width="24" height="24" />
                <p class="hides">Im.deniachmad@gmail.com</p>
                </div>
            </div>
            </a>
        </div>

        <div class=" grid grid-cols-1 gap-1 place-content-center h-8 m-1">
            <a href="https://wa.me/+6285600163725" target="_blank">
            <div class="no_hp-i rounded-full hover:bg-gradient-to-r from-black to-gray-500">
                <div class="isi-email hides grid grid-cols-2 gap-1 w-64">
                <Icon icon="mdi:telephone" color="#fff" width="24" height="24" />
                <p>+6285600163725</p>
                </div>
            </div>
            </a>
        </div>

        <div class="jarak-bawah grid grid-cols-1 gap-1 place-content-center h-8 m-1">
            <!-- <a href="https://github.com/deni1297" target="_blank"> -->
              <a href="">
            <div class="github rounded-full hover:bg-gradient-to-r from-black to-gray-500">
                <div class="isi-email hides grid grid-cols-2 gap-1 w-64">
                <Icon icon="mdi:github" color="#fff" width="24" height="24" />
                <!-- <p>https://github.com/de***7</p> -->
                <p class="hides">Sedang&nbspdalam&nbspperbaikan...</p>
                </div>
            </div>
          </a>
            <!-- </a> -->
        </div>
        
</template>

<style>
.no_hp-i {
  position: absolute;
  width: 500px;
  height: 45px;
  margin-top: -20px;
  padding-left: 20px;
  background-color: #181818;
}
.kecil{visibility:hidden}
  .besar{visibility:visible}
@media (max-width: 612px) {
  .no_hp-i {
    width: 300px;
    /* margin-top: -20px; */
  }
}
@media (max-width: 378px) {
  .no_hp-i {
    width: 250px;
    /* margin-top: -20px; */
  }
}
  /* @media (max-height: 415px) and (max-width: 916px) {
    .main-show{
        padding-top: 100px;
    }
    .jarak-bawah{
        margin-top: 20px;
        padding-bottom: 100px;
    }
 } */

</style>


