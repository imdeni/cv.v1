<script setup>
import MenuNav from '../components/Nav.vue'
import Footbar_iNav from '../components/Footbar.vue'
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
        
        <!-- --BACKGHROUND-- -->
        <img src="./image/grgr.png" class="bgg" alt="bg" />
        <img src="./image/grgr.png" class="bggg" alt="bg" />
        <img src="./image/grgr.png" class="bg" alt="bg" />
        <img src="./image/student.png" alt="bg" class="homan w-96" />
        <!-- --END BACKGHROUND-- -->

        <div class="main-show">
        <div class="monitorpendidikan">
            <img
            alt="gif"
            src="./image/grad.gif"
            class="rounded-full border-double border-8 border-gray-500"
            />
        </div>
      </div>

        <main>
          <MenuNav class="navpendidikan" />
        </main>
        
        <main>
          <Footbar_iNav />
        </main>

        <div class="grid grid-cols-1 gap-1 place-content-center h-8 m-1">
            <div class="box-atas-pendidikan rounded-t-lg border-sky-500">
            <p class="text2 hides">C:\Pendidikan</p>
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
            <div class="box-pendidikan rounded-b-lg border-sky-500 h-32">
            <!-- <p class="text-nama">Hi, nama saya Den* A***</p>
            <p class="text">Saya seorang programmer</p> -->
            <div class="fonts hides pt-2 pb-2 pl-4 font-bold text-white">
              <p class="text-base lg:text-2xl font-bold underline">Universitas PGRI Semarang</p>
                <p class="text-xs lg:text-base">Agustus 2016 - Dec 2020</p>
                <!-- <p class="kampus">Universitas PGRI Semarang</p> -->
                <!-- <p class="text-base lg:text-2xl font-bold underline">Universitas PGRI Semarang</p> -->
                <p class="text-sm lg:text-lg pl-4 pr-4">• Sarjana Komputer</p>
                <p class="text-sm lg:text-lg pl-4 pr-4">• IPK 3.29 / 4</p>
            </div>
            </div>
        </div>

        <div class="jawak-bawah grid grid-cols-1 gap-1 place-content-center h-8 m-1">
            <a href="https://upgris.ac.id" target="_blank">
            <div class="no_hp-pendidikan rounded-full hover:bg-gradient-to-r from-black to-gray-500">
                <div class="isi-email hides grid grid-cols-2 gap-1 w-64">
                <Icon icon="mdi:school" color="#fff" width="24" height="24" />
                <p class="hides">Universitas&nbspPGRI&nbspSemarang</p>
                </div>
            </div>
            </a>
        </div>

</template>

<style>
.no_hp-pendidikan {
  position: absolute;
  width: 500px;
  height: 45px;
  margin-top: -20px;
  padding-left: 20px;
  background-color: #181818;
}
.fonts{
  font-family: monospace, monospace;
  font-size: 18px;
}
.navpendidikan{
    margin-top:-173px ;
}
.monitorpendidikan{
  z-index: 0;
  position: relative;
  display: flex;
  place-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: -120px; 
  /* 40 */
  width: 250px;
  height: 250px;
}
.box-atas-pendidikan {
  width: 500px;
  height: 45px;
  margin-top: -190px;
  background-color: #343541;
}
.box-pendidikan {
  width: 500px;
  height: 140px;
  margin-top: -149px;
  background-color: #181818;
}
.kampus{
    font-size: 22px;
}

@media (max-width: 912px) {
  .awan,
  .kaca {
    visibility: hidden;
  }
}
@media (max-height: 612px) {
  .awan,
  .kaca {
    visibility: hidden;
  }
}
/* -----------------------------------------------    */
@media (max-width: 612px) {
    .navpendidikan{
        visibility: hidden;
    }
  .no_hp-pendidikan {
    width: 300px;
    margin-top: 5px;
  }
  .box-pendidikan {
    width: 300px;
    height: 140px;
    margin-top: -5px;
    background-color: #181818;
    margin-top: -115px;
  }
  .box-atas-pendidikan {
    width: 300px;
    height: 40px;
    background-color: #343541;
    margin-top: -150px;
  }
  .isi-no_hp {
    font-size: 16px;
  }
  .homan {
    visibility: hidden;
  }
}
@media (max-width: 378px) {
    .navpendidikan{
        visibility: hidden;
    }
    

  .no_hp-pendidikan {
    width: 250px;
    margin-top: 2px;
  }
  .box-pendidikan {
    width: 250px;
    height: 130px;
    margin-top: -50px;
    background-color: #181818;
    margin-top: -105px;
  }
  .box-atas-pendidikan {
    width: 250px;
    height: 40px;
    background-color: #343541;
    margin-top: -140px;
  }
  .monitorpendidikan {
    position: relative;
    display: flex;
    place-items: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 250px;
  }
  .homan {
    visibility: hidden;
  }
}
</style>


