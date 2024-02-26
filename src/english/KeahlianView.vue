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
        <img src="../indonesia/image/grgr.png" class="bgg" alt="bg" />
        <img src="../indonesia/image/grgr.png" class="bggg" alt="bg" />
        <img src="../indonesia/image/grgr.png" class="bg" alt="bg" />
        <img src="../indonesia/image/skill.png" alt="bg" class="homanskill w-96" />
        <!-- --END BACKGHROUND-- -->

        
        <!-- <div class="monitorkeahlian">
            <img
            src="../indonesia/image/grad.gif"
            class="rounded-full border-double border-8 border-gray-500"
            />
        </div> -->

        <main>
          <MenuNav class="navkeahlian" />
        </main>

        <main>
          <FootbarNav />
        </main>

        <div class="jarak-keahlian grid grid-cols-1 gap-1 place-content-center h-8 m-1">
            
          <br><br>
          <div class="box-atas-keahlian rounded-t-lg border-sky-500">
            <p class="text2 hides">C:\Skills</p>
            <div class="icon grid grid-cols-3 gap-1 w-24">
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
            <div class="box-keahlian rounded-b-lg border-sky-500 h-32 mb-8">
            <div class="fonts pt-2 pb-2 pl-4 pr-4 font-bold text-white">
              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/php.png" alt="bg" class="pl-2 pr-2"/>
                <ul>
                  <li>Hypertext Preprocessor</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-11/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">90%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/python.png" alt="bg" class="w-12 pt-3 pl-4 "/>
                <ul>
                  <li>Python</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-9/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">75%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/codeigniter.png" alt="bg" class="w-12 pt-3 pl-4 "/>
                <ul>
                  <li>Codeigniter</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-11/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">90%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/laravel.png" alt="bg" class="w-12 pt-3 pl-4 "/>
                <ul>
                  <li>Laravel</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-9/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">75%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/vue.png" alt="bg" class="w-12 pt-3 pl-4 "/>
                <ul>
                  <li>Vue</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-4/5"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">80%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/css.png" alt="bg" class="w-12 pt-2 pl-4 "/>
                <ul>
                  <li>Cascading Style Sheets</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-11/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">90%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/tailwind.png" alt="bg" class="w-12 pt-4 pl-4 "/>
                <ul>
                  <li>Tailwind</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-5/6"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">85%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/html.png" alt="bg" class="w-14 pt-2 pl-3 pr-1 "/>
                <ul>
                  <li>Hypertext Markup Language</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-11/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">90%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/javascript.png" alt="bg" class="w-14 pt-2 pl-3 pr-1 "/>
                <ul>
                  <li>Javascript</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-9/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">75%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/vb.png" alt="bg" class="w-14 pt-2 pl-3 pr-1 "/>
                <ul>
                  <li>Microsoft Visual Basic</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-4/5"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">80%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/sql.png" alt="bg" class="w-14 pt-2 pl-3 pr-1 "/>
                <ul>
                  <li>Microsoft SQL Server</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-4/5"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">80%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/mysql.png" alt="bg" class="w-20 pr-3"/>
                <ul>
                  <li>MySQL</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-4/5"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">80%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/api.png" alt="bg" class="w-20 pr-3"/>
                <ul>
                  <li>Json API</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-4/5"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">80%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/git.png" alt="bg" class="w-20 pt-2 pr-4 pl-2"/>
                <ul>
                  <li>GIT</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-9/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">75%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/github.png" alt="bg" class="w-20 pt-2 pr-4 pl-2"/>
                <ul>
                  <li>Github</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-9/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">75%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/xampp.png" alt="bg" class="w-20 pt-1 pr-4 pl-2"/>
                <ul>
                  <li>XAMPP</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-11/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">90%</p>
              </div>

              <div class="grid grid-cols-3 gap-1 grid-cols-[70px_minmax(0px,_1fr)_40px]">
                <img src="../indonesia/image/apache.png" alt="bg" class="w-20 pt-1 pr-4 pl-2"/>
                <ul>
                  <li>Apache</li>
                  <li class="bg-gray-600 rounded-full w-full h-4"></li>
                  <li class="back bg-gray-300 rounded-full h-4 mb-5 w-6/12"></li>
                </ul>
                <p class="pl-2 pr-2 pt-5">50%</p>
              </div>
              
            </div>
            </div><br>
        </div>
</template>
<style>
.skill{width:100px;height:60px}.back{margin-top:-16px}.homanskill{position:fixed;bottom:-70px;right:0;-webkit-transform:matrix(-1,0,0,1,0,0);-moz-transform:matrix(-1,0,0,1,0,0);-o-transform:matrix(-1,0,0,1,0,0);transform:matrix(-1,0,0,1,0,0)}.fonts{font-family:monospace,monospace;font-size:18px}.navkeahlian{margin-top:-68px}.monitorkeahlian{z-index:0;position:relative;display:flex;place-items:center;display:block;margin-left:auto;margin-right:auto;top:-120px;width:250px;height:250px}.box-atas-keahlian{width:500px;height:45px;margin-top:550px;background-color:#343541}.box-keahlian{width:500px;height:auto;margin-top:-5px;background-color:#181818}.kampus{font-size:22px}@media (max-width: 912px){.awan,.kaca{visibility:hidden}}@media (max-height: 612px){.awan,.kaca{visibility:hidden}}@media (max-width: 612px){.navkeahlian{visibility:hidden}.box-keahlian{width:300px;height:auto;margin-top:-5px;background-color:#181818}.box-atas-keahlian{width:300px;height:40px;background-color:#343541;margin-top:650px}.homanskill{visibility:hidden}}@media (max-width: 378px){.navkeahlian{visibility:hidden}.box-keahlian{width:250px;height:auto;background-color:#181818}.box-atas-keahlian{width:250px;height:40px;background-color:#090909;margin-top:750px}.monitorkeahlian{position:relative;display:flex;place-items:center;display:block;margin-left:auto;margin-right:auto;width:250px;height:250px}.homanskill{visibility:hidden}}
</style>


