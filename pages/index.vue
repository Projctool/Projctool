<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const projectName = ref('');
    const budget = ref('');
    const methodology = ref('');
    const startDate = ref('');
    const endDate = ref('');
    const description = ref('');
    const formSubmitted = ref(false);

    const createProject = (event) => {
      event.preventDefault();
      formSubmitted.value = true;

      if (projectName.value && budget.value && methodology.value && startDate.value && endDate.value && description.value) {
        // Convert description to JSON and parse it
        let parsedDescription;
        try {
          parsedDescription = JSON.parse(description.value);

          // Validate the parsed JSON structure
          if (typeof parsedDescription !== 'object' || !parsedDescription.tasks || !Array.isArray(parsedDescription.tasks)) {
            throw new Error('Invalid JSON structure');
          }

        } catch (error) {
          console.error('Invalid JSON format in description:', error.message);
          return;
        }

        router.push({
          path: '/dashboard',
          query: {
            name: projectName.value,
            budget: budget.value,
            methodology: methodology.value,
            startDate: startDate.value,
            endDate: endDate.value,
            description: JSON.stringify(parsedDescription),
          }
        });
      } else {
        console.log('Form is incomplete');
      }
    };


    return {
      projectName,
      budget,
      methodology,
      startDate,
      endDate,
      description,
      formSubmitted,
      createProject
    };
  }
};
</script>

<template> 
    <div class="flex min-h-screen items-center justify-center bg-white p-6 font-nunito">
      <div class="max-w-7xl w-full bg-white rounded-lg  flex gap-20">
        <div class="w-1/2 p-4">
          <div class="flex flex-col items-center mb-12">
            <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d_612_9401)">
                <rect x="4" width="160" height="160" fill="url(#pattern0_612_9401)" shape-rendering="crispEdges"/>
                </g>
                <defs>
                <filter id="filter0_d_612_9401" x="0" y="0" width="168" height="168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_612_9401"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_612_9401" result="shape"/>
                </filter>
                <pattern id="pattern0_612_9401" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_612_9401" transform="scale(0.00125)"/>
                </pattern>
                <image id="image0_612_9401" width="800" height="800" xlink:href="https://i.postimg.cc/SQ8cYW9j/projectool.png"/>
                </defs>
            </svg>
            
            <h1 class="text-7xl font-bold mb-4 text-primary text-shadow-custom">Projctool</h1>

          </div>
          <p class="text-gray-700 text-xl mb-4">
            Welcome to Projctool, the ultimate tool to take your project from concept to reality with ease and accuracy!
          </p>
          <p class="text-gray-700 text-xl mb-4">
            We understand that managing a project can be a challenge. That's why we've designed an intuitive platform that simplifies planning and management, so you can focus on what really matters: making your project a success!
          </p>
          <p class="text-gray-700 text-xl mb-4">
            Don't waste any more time! Get started now and let Projctool guide you every step of the way to success. Complete the form below and see your project come to life with our expert help. <br> Please configure own API key in your project :D
          </p>
        </div>
        
        <div class="w-1/2 bg-gray-50 shadow-lg rounded-[30px] p-8">
          <h2 class="text-xl font-bold mb-6">Project Information</h2>
          <form @submit.prevent="createProject">
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="project-name">Project Name</label>
              <input v-model="projectName" type="text" id="project-name" class="w-full p-2 border border-gray-300 rounded-[30px]" placeholder="Starfish" required />
              <p v-if="!projectName && formSubmitted" class="text-red-500 text-sm">Project Name is required.</p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="budget">Budget</label>
              <input v-model="budget" type="text" id="budget" class="w-full p-2 border border-gray-300 rounded-[30px]" placeholder="$20 000" required />
              <p v-if="!budget && formSubmitted" class="text-red-500 text-sm">Budget is required.</p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="methodology">Project Methodology</label>
              <input v-model="methodology" type="text" id="methodology" class="w-full p-2 border border-gray-300 rounded-[30px]" placeholder="Agile" required />
              <p v-if="!methodology && formSubmitted" class="text-red-500 text-sm">Project Methodology is required.</p>
            </div>
            <div class="flex justify-center space-x-5">
              <div class="mb-4 w-full">
                <label class="block text-gray-700 mb-2" for="start-date">Start Date</label>
                <input v-model="startDate" type="date" id="start-date" class="w-full p-2 border border-gray-300 rounded-[30px]" required />
                <p v-if="!startDate && formSubmitted" class="text-red-500 text-sm">Start Date is required.</p>
              </div>
              <div class="mb-4 w-full">
                <label class="block text-gray-700 mb-2" for="end-date">End Date</label>
                <input v-model="endDate" type="date" id="end-date" class="w-full p-2 border border-gray-300 rounded-[30px]" required />
                <p v-if="!endDate && formSubmitted" class="text-red-500 text-sm">End Date is required.</p>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="description">Description</label>
              <textarea v-model="description" id="description" class="w-full p-2 border border-gray-300 rounded-[20px]" rows="4" placeholder="" required></textarea>
              <p v-if="!description && formSubmitted" class="text-red-500 text-sm">Description is required.</p>
            </div>
            <div class="flex flex-col items-center">
              <button type="submit" class="text-gray-700 py-2 px-8 rounded-[30px] border border-primary flex items-center hover:bg-primary hover:text-white active:bg-primary active:text-white">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
  
    
<style scoped>

</style>
  
