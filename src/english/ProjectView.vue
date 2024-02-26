<script setup>
import MenuNav from "../components/Naveng.vue";
import FootbarNav from "../components/Footbar_e.vue";
import { Icon } from "@iconify/vue";
</script>
<script>
export default {
  components: {
    Icon,
  },
  name: "PopupModal",

  data: () => ({
    isMAIGA: false,
    isAPOTEK: false,
    isSPK: false,
    isTOKO:false,
    isPERPUS:false,
    isMOTOR:false,
    isKOPERASI:false,
    isPDAM:false,
    isKOSONG:false,
  }),

  methods: {
    openMAIGA() {
      this.isMAIGA = true;
    },

    closeMAIGA() {
      this.isMAIGA = false;
    },

    openAPOTEK() {
      this.isAPOTEK = true;
    },

    closeAPOTEK() {
      this.isAPOTEK = false;
    },

    openSPK() {
      this.isSPK = true;
    },

    closeSPK() {
      this.isSPK = false;
    },

    open() {
      this.isKOSONG = true;
    },

    close() {
      this.isKOSONG = false;
    },
  },
};
</script>

<template>
  <!-- --BACKGHROUND-- -->
  <img src="../indonesia/image/grgr.png" alt="bg" class="bgg" />
  <img src="../indonesia/image/grgr.png" alt="bg" class="bggg" />
  <img src="../indonesia/image/grgr.png" alt="bg" class="bg" />
  <!-- <img src="../indonesia/image/project.png" alt="bg" class="homan w-96" /> -->
  <!-- --END BACKGHROUND-- -->

  <div class="main-show">
    <div class="monitorproject">
      <img
        alt="bg"
        src="../indonesia/image/pj.png"
        class="rounded-full border-double border-8 border-gray-500"
      />
    </div>
  </div>

  <main>
    <MenuNav class="navproject" />
  </main>

  <main>
    <FootbarNav />
  </main>

  <div class=" grid grid-rows-8 gap-4 place-content-center h-8 m-1">
    <div class="pjj">
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 1</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div
          class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white text-center"
        >
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">SI MAIGA</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="openMAIGA()"
            >
              Detail
            </button>
            <a href="https://deniachmad.com/project-portofolio/maiga/" target="_blank" 
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              >
              <button class="w-full">Show</button>
          </a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 2</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white">
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">SI APOTEK</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="openAPOTEK()"
            >
              Detail
            </button>
            <a href="https://deniachmad.com/project-portofolio/apotek/" target="_blank" 
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              >
              <button class="w-full">Show</button>
          </a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 3</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white">
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">SI SPK</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="openSPK()"
            >
              Detail
            </button>
            <a href="https://deniachmad.com/project-portofolio/spk/" target="_blank" 
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              >
              <button class="w-full">Show</button>
          </a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 4</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white">
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">SI TOKO</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="open()"
            >
              Detail
            </button>
            <button
              Class="flex justify-center rounded-lg border-2 border-gray-500"
            >
              <Icon icon="ic:baseline-disabled-visible" color="#fff" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 5</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white">
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">SI PERPUS</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="open()"
            >
              Detail
            </button>
            <button
              Class="flex justify-center rounded-lg border-2 border-gray-500"
            >
              <Icon icon="ic:baseline-disabled-visible" color="#fff" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 6</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white">
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">SI MOTOR</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="open()"
            >
              Detail
            </button>
            <button
              Class="flex justify-center rounded-lg border-2 border-gray-500"
            >
              <Icon icon="ic:baseline-disabled-visible" color="#fff" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 7</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white">
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">
              SI KOPERASI
            </p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="open()"
            >
              Detail
            </button>
            <button
              Class="flex justify-center rounded-lg border-2 border-gray-500"
            >
              <Icon icon="ic:baseline-disabled-visible" color="#fff" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-16">
      <div class="box-atas-project rounded-t-lg border-sky-500">
        <p class="text2 font-bold hides">C:\Project 8</p>
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
      <div class="box-project rounded-b-lg border-sky-500">
        <div class="fonts hides pt-2 pb-2 pl-4 pr-4 font-bold text-white">
          <div class="grid grid-cols-1">
            <p class="text-base lg:text-xl font-bold text-center pb-2 underline">SI PDAM</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              Class="rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              v-on:click="open()"
            >
              Detail
            </button>
            <button
              Class="flex justify-center rounded-lg border-2 border-gray-500"
            >
              <Icon icon="ic:baseline-disabled-visible" color="#fff" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- popups -->
  <transition name="fade">
    <div class="popup-modal" v-if="isMAIGA">
      <div class="window rounded-xl w-fit">
        <div class="grid grid-rows-8 gap-2">
          <div class="grid text-center text-lg text-black">
            <p class="font-bold underline">Project Detail</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Name</p>
            <p class="font-bold">:</p>
            <p class="font-bold">SI MAIGA</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Description</p>
            <p class="font-bold">:</p>
            <p class="text-justify font-bold">
              SI MAIGA is an information system used for
                 monitoring and determine student achievement,
                 based on the average value of students which is calculated automatically by the system
            </p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Client</p>
            <p class="font-bold">:</p>
            <p class="font-bold">Nisa</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Dev Tools / Language</p>
            <p class="font-bold">:</p>
            <p class="font-bold">
              PHP, CodeIgniter, CSS, JS, MySQL(XAMPP), Apache(XAMPP), Visual
              Studio Code
            </p>
          </div>

          <button
            v-on:click="closeMAIGA()"
            class="text-black font-bold border-2 border-black rounded-xl hover:bg-black hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>

  <!-- popups -->
  <transition name="fade">
    <div class="popup-modal" v-if="isAPOTEK">
      <div class="window rounded-xl w-fit">
        <div class="grid grid-rows-8 gap-2">
          <div class="grid text-center text-lg text-black pb-2">
            <p class="font-bold underline">Project Detail</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Name</p>
            <p class="font-bold">:</p>
            <p class="font-bold">SI APOTEK</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Description</p>
            <p class="font-bold">:</p>
            <p class="text-justify font-bold">
              SI APOTEK is an information system that is used for
               monitoring pharmacy data. System is also equipped with daily and periodical report features.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Client</p>
            <p class="font-bold">:</p>
            <p class="font-bold">Novia</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Dev Tools / Language</p>
            <p class="font-bold">:</p>
            <p class="font-bold">
              PHP, CodeIgniter, CSS, JS, MySQL(XAMPP), Apache(XAMPP), Visual
              Studio Code
            </p>
          </div>

          <button
            v-on:click="closeAPOTEK()"
            class="text-black font-bold border-2 border-black rounded-xl hover:bg-black hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>


  <!-- popups -->
  <transition name="fade">
    <div class="popup-modal" v-if="isSPK">
      <div class="window rounded-xl w-fit">
        <div class="grid grid-rows-8 gap-2">
          <div class="grid text-center text-lg text-black pb-2">
            <p class="font-bold underline">Project Detail</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Name</p>
            <p class="font-bold">:</p>
            <p class="font-bold">SI SPK</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Description</p>
            <p class="font-bold">:</p>
            <p class="text-justify font-bold">
              SI SPK is a decision support system that is used to determine prospective recipients of the Family Hope Program (PKH) 
              automatically by a system based on the SMART algorithm (Simple Multi Attribute Ratting Technique).
            </p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Client</p>
            <p class="font-bold">:</p>
            <p class="font-bold">Widya</p>
          </div>

          <div class="grid grid-cols-3 gap-2 sm:grid-cols-[125px_minmax(0px,_1fr)_300px] grid-cols-[50px_minmax(0px,_5px)_175px] text-xs sm:text-sm md:text-base text-black">
            <p class="font-bold">Dev Tools / Language</p>
            <p class="font-bold">:</p>
            <p class="font-bold">
              PHP, CodeIgniter, CSS, JS, MySQL(XAMPP), Apache(XAMPP), Visual
              Studio Code
            </p>
          </div>

          <button
            v-on:click="closeSPK()"
            class="text-black font-bold border-2 border-black rounded-xl hover:bg-black hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>

  <!-- popups -->
  <transition name="fade">
    <div class="popup-modal" v-if="isKOSONG">
      <div class="window rounded-xl w-fit">
        <div class="grid grid-rows-8 gap-2">
          <div class="grid text-center text-lg text-black pb-2">
            <p class="font-bold underline">No data yet.. In the proccess of uploading data...</p>
          </div>

          <button
            v-on:click="close()"
            class="text-black font-bold border-2 border-black rounded-xl hover:bg-black hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.pjj{
  margin-top: 765px;
}
.fonts {
  font-family: monospace, monospace;
  font-size: 18px;
}
.navproject {
  margin-top: -193px;
}
.monitorproject {
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
.box-atas-project {
  width: 500px;
  height: 45px;
  /* margin-top: -40px; */
  background-color: #343541;
}
.box-project {
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
.atas {
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
  .navproject {
    visibility: hidden;
  }
  .box-project {
    width: 300px;
    /* height: 170px; */
    margin-top: -5px;
    background-color: #181818;
    /* margin-top: -115px; */
  }
  .box-project2 {
    width: 300px;
    /* height: 185px; */
    background-color: #181818;
  }
  .box-atas-project {
    width: 300px;
    height: 40px;
    background-color: #343541;
    /* margin-top: -150px; */
  }
  .homan {
    visibility: hidden;
  }
  .window {
    width: 275px;
  }
}
@media (max-width: 378px) {
  .navproject {
    visibility: hidden;
  }
  .box-project {
    width: 250px;
    /* height: 160px; */
    margin-top: -50px;
    background-color: #181818;
    margin-top: 0px;
  }
  .box-project2 {
    width: 250px;
    /* height: 185px; */
    background-color: #181818;
  }
  .box-atas-project {
    width: 250px;
    height: 40px;
    background-color: hsl(235, 11%, 23%);
    /* margin-top: -140px; */
  }
  .monitorproject {
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
  .dialog {
    max-width: 300px;
  }
  .window {
    width: 275px;
  }
}

/* css class for the transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.popup-modal {
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  z-index: 1;
}

.window {
  background: #c2c2c4;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>
