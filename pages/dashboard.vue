<script >
import GanttChart from './GanttChart.vue';
import { useRoute } from 'vue-router';
import { differenceInDays, differenceInMonths } from 'date-fns';
import Chat from "~/pages/chat.vue";

export default {
  components: {
    Chat,
    GanttChart
  },
  data() {
    const route = useRoute();
    return {
      showModal: false,
      project: {
        name: route.query.name || '',
        budget: route.query.budget || '',
        methodology: route.query.methodology || '',
        startDate: route.query.startDate || '',
        endDate: route.query.endDate || '',
        description: route.query.description || ''
      },
      formSubmitted: false,
      isPopupVisible: false,
      isMinimized: false,
      selected: null,
      menuItems: [
        {
          label: 'Dashboard', iconPath: 'M4.317 2H7.34491C8.60804 2 9.62033 3.15 9.62033 4.561V7.97C9.62033 9.39 8.60804 10.53 7.34491 10.53H4.317C3.06283 10.53 2.04158 9.39 2.04158 7.97V4.561C2.04158 3.15 3.06283 2 4.317 2ZM4.317 13.4697H7.34491C8.60804 13.4697 9.62033 14.6107 9.62033 16.0307V19.4397C9.62033 20.8497 8.60804 21.9997 7.34491 21.9997H4.317C3.06283 21.9997 2.04158 20.8497 2.04158 19.4397V16.0307C2.04158 14.6107 3.06283 13.4697 4.317 13.4697ZM17.6829 2H14.655C13.3919 2 12.3796 3.15 12.3796 4.561V7.97C12.3796 9.39 13.3919 10.53 14.655 10.53H17.6829C18.9371 10.53 19.9583 9.39 19.9583 7.97V4.561C19.9583 3.15 18.9371 2 17.6829 2ZM14.655 13.4697H17.6829C18.9371 13.4697 19.9583 14.6107 19.9583 16.0307V19.4397C19.9583 20.8497 18.9371 21.9997 17.6829 21.9997H14.655C13.3919 21.9997 12.3796 20.8497 12.3796 19.4397V16.0307C12.3796 14.6107 13.3919 13.4697 14.655 13.4697Z'
        },
        {
          label: 'Projects', iconPath: 'M6.81681 2.0004H15.183C18.2297 2.0004 19.9497 3.9294 19.9587 7.3304V16.6704C19.9587 20.0704 18.2297 22.0004 15.183 22.0004H6.81681C3.77009 22.0004 2.04202 20.0704 2.04202 16.6704V7.3304C2.04202 3.9294 3.77009 2.0004 6.81681 2.0004ZM11.0443 17.8604C11.4304 17.8604 11.752 17.5404 11.7878 17.1104V6.9204C11.8236 6.6104 11.6901 6.2994 11.4483 6.1304C11.1965 5.9604 10.892 5.9604 10.651 6.1304C10.4082 6.2994 10.2747 6.6104 10.3007 6.9204V17.1104C10.3464 17.5404 10.668 17.8604 11.0443 17.8604ZM15.166 17.8604C15.5422 17.8604 15.8638 17.5404 15.9095 17.1104V13.8304C15.9355 13.5094 15.802 13.2104 15.5593 13.0404C15.3183 12.8704 15.0137 12.8704 14.7629 13.0404C14.5201 13.2104 14.3866 13.5094 14.4224 13.8304V17.1104C14.4583 17.5404 14.7799 17.8604 15.166 17.8604ZM7.61321 17.1104C7.57738 17.5404 7.25577 17.8604 6.86967 17.8604C6.48446 17.8604 6.16196 17.5404 6.12702 17.1104V10.2004C6.10015 9.8894 6.23363 9.5804 6.4764 9.4104C6.71738 9.2404 7.02286 9.2404 7.26473 9.4104C7.50571 9.5804 7.64098 9.8894 7.61321 10.2004V17.1104Z'
        }
      ]
    };
  },
  computed: {
    estimatedDuration() {
      const { startDate, endDate } = this.project;

      if (!startDate || !endDate) {
        return 'N/A';
      }

      const start = new Date(startDate);
      const end = new Date(endDate);

      const totalMonths = differenceInMonths(end, start);
      const remainingDays = differenceInDays(end, new Date(start.getFullYear(), start.getMonth() + totalMonths, start.getDate()));

      return `${totalMonths} m ${remainingDays} d`;
    },
  },
  methods: {
    toggleSidebar() {
      this.isMinimized = !this.isMinimized;
    },
    toggleModal() {
      this.showModal = !this.showModal;
      this.formSubmitted = false;
    },
    validateForm() {
      this.formSubmitted = true;
      const { name, budget, methodology, startDate, endDate } = this.project;
      return name && budget && methodology && startDate && endDate;
    },
    handleMenuClick(index) {
      this.selected = index;
      if (this.isMinimized) {
        this.isMinimized = false;
      }
    },
    saveProject() {
      if (this.validateForm()) {
        console.log('Proyecto guardado', this.project);
        this.toggleModal();
      }
    }
  }
};
</script>

<template>
  <div class="font-nunito flex h-screen bg-white p-6 space-x-4 ">
    <aside :class="['bg-whitegray text-white rounded-[30px] transition-all duration-300', isMinimized ? 'w-20' : 'w-64']">
      <div class="p-4">
        <div :class="['flex items-center mb-6', isMinimized ? 'justify-center' : 'justify-start']">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g filter="url(#filter0_d_620_1426)">
          <rect x="4.64584" width="62.7083" height="64" fill="url(#pattern0_620_1426)" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_620_1426" x="0.645836" y="0" width="70.7083" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_620_1426"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_620_1426" result="shape"/>
          </filter>
          <pattern id="pattern0_620_1426" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_620_1426" transform="matrix(0.00127575 0 0 0.00125 -0.010299 0)"/>
          </pattern>
          <image id="image0_620_1426" width="800" height="800" xlink:href="https://i.postimg.cc/SQ8cYW9j/projectool.png"/>
          </defs>
          </svg>          

          
          <h1 v-if="!isMinimized" class="text-3xl font-bold mb-4 text-primary text-shadow-custom ">Projctool</h1>
        </div>
      
        <button @click="toggleSidebar" class="text-black focus:outline-none">
          <svg v-if="isMinimized" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      
        <nav class="mt-4">
          <ul>
            <li v-for="(item, index) in menuItems" :key="index" class="mb-2">
              <a 
                href="#" 
                @click="handleMenuClick(index)" 
                :class="[
                  'flex items-center py-2 px-4 rounded-[30px] transition-colors duration-300', 
                  selected === index ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
                ]"
              >
                <svg :class="['h-6 w-6', selected === index ? 'text-white' : 'text-gray-400']" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" :d="item.iconPath" />
                  <path fill="currentColor" :d="item.iconPath" />
                </svg>
                <span v-if="!isMinimized" :class="['ml-2', selected === index ? 'text-white' : 'text-gray-400']">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <div>
      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-[30px]">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
          <button @click="toggleModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h1 class="text-2xl font-bold mb-4">Update Project Details</h1>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Project Name</label>
              <input v-model="project.name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-[30px]" required/>
              <p v-if="!project.name && formSubmitted" class="text-red-500 text-sm">Project Name is required.</p>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Budget</label>
              <input v-model="project.budget" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-[30px]" required/>
              <p v-if="!project.budget && formSubmitted" class="text-red-500 text-sm">Budget is required.</p>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Methodology</label>
              <input v-model="project.methodology" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-[30px]" required/>
              <p v-if="!project.methodology && formSubmitted" class="text-red-500 text-sm">Methodology is required.</p>
            </div>

            <div class="flex justify-center space-x-5">
                <div class="mb-4 w-full">
                    <label class="block text-sm font-semibold mb-2">Start Date</label>
                    <input v-model="project.startDate" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-[30px]" required/>
                    <p v-if="!project.startDate && formSubmitted" class="text-red-500 text-sm">Start Date is required.</p>
                </div>
                <div class="mb-4 w-full">
                    <label class="block text-sm font-semibold mb-2" for="end-date">End Date</label>
                    <input v-model="project.endDate" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-[30px]" required/>
                    <p v-if="!project.endDate && formSubmitted" class="text-red-500 text-sm">End Date is required.</p>
                </div>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Description</label>
              <textarea v-model="project.description" class="w-full px-3 py-2 border border-gray-300 rounded-[20px]" rows="4"></textarea>
            </div>
            <!-- <p><strong>Estimated Duration:</strong> {{ estimatedDuration }}</p>  -->
            <!-- <GanttChart :startDate="project.startDate" :endDate="project.endDate" class="mt-6"/> --> 
            <div class="flex flex-col items-center">
                <button @click="saveProject" class="text-gray-700 py-2 px-8 rounded-[30px] border border-primary flex items-center hover:bg-primary hover:text-white active:bg-primary active:text-white">
                Save
                </button>
            </div>  
          </div>
        </div>
      </div>
     
      <button
          @click="toggleModal"
          class="fixed bottom-4 left-4 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 z-50"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1.5C5.702 1.5 1.5 5.702 1.5 12S5.702 22.5 12 22.5 22.5 18.298 22.5 12 18.298 1.5 12 1.5zM12 20.25a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5zm-1.5-12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm1.5 7.5c-1.305 0-2.418-.843-2.818-2h1.636a1.5 1.5 0 0 0 0-3h-1.636c.4-1.157 1.513-2 2.818-2 1.305 0 2.418.843 2.818 2h-1.636a1.5 1.5 0 0 0 0 3h1.636c-.4 1.157-1.513 2-2.818 2z"/>
        </svg>
      </button>
    </div>

    <main class="flex-1 max-w-full max-h-screen overflow-y-auto overflow-x-hidden p-6 bg-gray-100 rounded-[30px]">
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center space-x-4">
          <h1 class="text-2xl font-semibold">Dashboard</h1>
          <button class="text-gray-700 py-2 px-4 rounded-full border border-primary">
            <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          </button>
          <button class="text-gray-700 py-2 px-4 rounded-full border border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          </button >
        </div>
     

        

        <div class="flex items-center space-x-4">
          <button class="text-gray-700 py-2 px-4 rounded-[30px] border border-primary flex items-center">
          <svg class="w-4 h-4 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v12m0 0l-4-4m4 4l4-4m-4         4V4m0 16h8m-8 0H4"></path>
          </svg>
          Download
        </button>

          <div class="bg-whitegray text-gray-700 py-2 px-4 rounded-[30px] shadow">

            {{ project.startDate }}
          </div >
          <div class="bg-whitegray text-gray-700 py-2 px-4 rounded-[30px] shadow">

            {{ project.endDate }}
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div class="bg-whitegray p-5 rounded-[30px] shadow flex items-center">
          <div class="p-3 bg-orange bg-opacity-15 rounded-full">
            <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect x="0.506027" width="34.6713" height="30" fill="url(#pattern0_620_1349)"/>
              <defs>
              <pattern id="pattern0_620_1349" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_620_1349" transform="matrix(0.00961411 0 0 0.0111111 0.067365 0)"/>
              </pattern>
              <image id="image0_620_1349" width="90" height="90" xlink:href="https://i.postimg.cc/NjydVKVX/carpeta.png"/>
              </defs>
            </svg>
          </div>
          <div class="ml-4  ">
            <p class="text-sm font-light">Project's Name</p>
            <h2 class="text-xl font-extrabold text-gray-600">{{ project.name }}</h2>
          </div>
        </div>

        <div class="bg-hush p-5 rounded-[30px] shadow flex items-center">
          <div class="p-3 bg-orange bg-opacity-15 rounded-full">
            <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect x="0.28833" width="43.037" height="30" fill="url(#pattern0_635_369)"/>
              <defs>
              <pattern id="pattern0_635_369" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_635_369" transform="matrix(0.00774527 0 0 0.0111111 0.151463 0)"/>
              </pattern>
              <image id="image0_635_369" width="90" height="90" xlink:href="https://i.postimg.cc/9Fk4x0Zs/bolsda.png"/>
              </defs>
            </svg>
          </div>
          <div class="ml-4  ">
            <p class="text-sm font-light">Budget</p>
            <h2 class="text-xl font-extrabold text-gray-600">{{ project.budget }}</h2>
          </div>
        </div>

        <div class="bg-whitegray p-5 rounded-[30px] shadow flex items-center">
          <div class="p-3 bg-orange bg-opacity-15 rounded-full">
            <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect x="0.548828" width="34.0293" height="32" fill="url(#pattern0_635_361)"/>
              <defs>
              <pattern id="pattern0_635_361" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_635_361" transform="matrix(0.0104485 0 0 0.0111111 0.0298164 0)"/>
              </pattern>
              <image id="image0_635_361" width="90" height="90" xlink:href="https://i.postimg.cc/ThMzwnBZ/ima.png"/>
              </defs>
            </svg>
          </div>
          <div class="ml-4  ">
            <p class="text-sm font-light">Project Methodology</p>
            <h2 class="text-xl font-extrabold text-gray-600">{{ project.methodology }}</h2>
          </div>
        </div>

        <div class="bg-hush p-5 rounded-[30px] shadow flex items-center">
          <div class="p-3 bg-orange bg-opacity-15 rounded-full">
            <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect x="0.808105" width="38.0327" height="34" fill="url(#pattern0_635_393)"/>
              <defs>
              <pattern id="pattern0_635_393" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_635_393" transform="matrix(0.00993297 0 0 0.0111111 0.0530163 0)"/>
              </pattern>
              <image id="image0_635_393" width="90" height="90" xlink:href="https://i.postimg.cc/V6XThJJg/reloj.png"/>
              </defs>
            </svg>
          </div>
          <div class="ml-4  ">
            <p class="text-sm font-light">Estimated Duration</p>
            <h2 class="text-xl font-extrabold text-gray-600">{{ estimatedDuration }}</h2>
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        
        <div class="bg-whitegray p-5 rounded-[30px] shadow flex flex-col items-center">
          <h2 class="text-xl font-semibold mb-4">Tasks</h2>
          <div class="relative">
            <div class="flex flex-col justify-between items-center relative z-10 space-y-3">
            
              <div class="text-gray-700 py-2 px-4 rounded-full border border-primary">
                <span class="text-xs">1</span>
              </div >
              <div class="text-gray-700 py-2 px-4 rounded-full border border-primary">
                <span class="text-xs">2</span>
              </div >
              <div class="text-gray-700 py-2 px-4 rounded-full border border-primary">
                <span class="text-xs">3</span>
              </div >
              <div class="text-gray-700 py-2 px-4 rounded-full border border-primary">
                <span class="text-xs">4</span>
              </div >
              <div class="text-gray-700 py-2 px-4 rounded-full border border-primary">
                <span class="text-xs">5</span>
              </div >
              <div class="text-gray-700 py-2 px-4 rounded-full border border-primary">
                <span class="text-xs">6</span>
              </div >
            
            </div>
          </div>
        </div>

        <div class="bg-whitegray p-5 rounded-[30px] shadow flex items-center">
          <GanttChart />
        </div>


      <div class="bg-whitegray p-7 rounded-[30px] shadow">
        <h2 class="text-xl font-semibold mb-4">Chat IA</h2>
        <Chat />
      </div>


      </div>


      
    </main>
  </div>
</template>


<style scoped>

aside.w-20 .p-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

aside.w-20 nav ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>