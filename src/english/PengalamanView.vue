<script setup>
import MenuNav from '../components/Naveng.vue'
import FootbarNav from '../components/Footbar_e.vue'
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
        <img src="../indonesia/image/grgr.png" alt="bg" class="bgg" />
        <img src="../indonesia/image/grgr.png" alt="bg" class="bggg" />
        <img src="../indonesia/image/grgr.png" alt="bg" class="bg" />
        <img src="../indonesia/image/experience.png" alt="bg" class="homan w-96" />
        <!-- --END BACKGHROUND-- -->

        <div class="main-show">
        <div class="monitorpengalaman">
            <img alt="bg"
            src="../indonesia/image/xx.png"
            class="rounded-full border-double border-8 border-gray-500"
            />
        </div>
      </div>

        <main>
          <MenuNav class="navpengalaman" />
        </main>

        <main>
          <FootbarNav />
        </main>

        <div class="grid grid-rows-2 gap-1 place-content-center h-8 m-1">
          <div class="atas">
            <div class="box-atas-pengalaman rounded-t-lg border-sky-500">
            <p class="text2 font-bold hides">C:\Experience 1</p>
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
            <div class="box-pengalaman rounded-b-lg border-sky-500 h-32">
            <div class="fonts hides pt-2 pb-2 pl-4 font-bold text-white">
                <p class="text-base lg:text-xl font-bold italic">Freelancer</p>
                <p class="text-xs lg:text-base">February 2021 - Now</p>
                <p class="text-sm lg:text-lg pl-4 pr-4">• Website creation, maintenance & design</p>
                <p class="text-sm lg:text-lg pl-4 pr-4">• Application creation, maintenance & design</p>
                <p class="text-sm lg:text-lg pl-4 pr-4">• Graphic design creation</p>
            </div>
            </div>
          </div>

          <div class="pb-64 bawah">
            <div class="box-atas-pengalaman rounded-t-lg border-sky-500">
            <p class="text2 hides font-bold">C:\Experience 2</p>
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
            <div class="box-pengalaman2 rounded-b-lg border-sky-500 h-32">
            <div class="fonts hides pt-2 pb-2 pl-4 font-bold text-white">
              <p class="text-base lg:text-2xl font-bold underline">PT Macananjaya Cemerlang</p>
                <p class="text-base lg:text-xl font-bold italic">IT Programmer</p>
                <p class="text-xs lg:text-base">March 2022 - Now</p>
                <p class="text-sm lg:text-lg pl-4 pr-4">• Website creation, development & design</p>
                <p class="text-sm lg:text-lg pl-4 pr-4">• Desktop application creation, development & design</p>
                <p class="text-sm lg:text-lg pl-4 pr-4">• Managing and repairing data</p>
              </div>
            </div>
          </div>

          
        </div> 

</template>

<style>

.fonts{
  font-family: monospace, monospace;
  font-size: 18px;
}
.navpengalaman{
    margin-top:-193px ;
}
.monitorpengalaman{
  z-index: 0;
  position: relative;
  display: flex;
  place-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: -140px; 
  /* 40 */
  width: 250px;
  height: 250px;
}
.box-atas-pengalaman {
  width: 500px;
  height: 45px;
  /* margin-top: -40px; */
  background-color: #343541;
}
.box-pengalaman {
  width: 500px;
  /* height: 160px; */
  height: auto;
  /* margin-top: -149px; */
  background-color: #181818;
}
.box-pengalaman2 {
  width: 500px;
  /* height: 185px; */
  height: auto;
  background-color: #181818;
}
.atas{
  margin-top: -196px;
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
    .navpengalaman{
        visibility: hidden;
    }
  .box-pengalaman {
    width: 300px;
    /* height: 170px; */
    margin-top: -5px;
    background-color: #181818;
    /* margin-top: -115px; */
  }
  .box-pengalaman2 {
    width: 300px;
  /* height: 185px; */
  background-color: #181818;
}
  .box-atas-pengalaman {
    width: 300px;
    height: 40px;
    background-color: #343541;
    /* margin-top: -150px; */
  }
  .homan {
    visibility: hidden;
  }
}
@media (max-width: 378px) {
  
  .navpengalaman{
    visibility: hidden;
  }
  .box-pengalaman {
    width: 250px;
    /* height: 160px; */
    margin-top: -50px;
    background-color: #181818;
    margin-top: 0px;
  }
  .box-pengalaman2 {
    width: 250px;
  /* height: 185px; */
  background-color: #181818;
}
  .box-atas-pengalaman {
    width: 250px;
    height: 40px;
    background-color: hsl(235, 11%, 23%);
    /* margin-top: -140px; */
  }
  .monitorpengalaman {
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


