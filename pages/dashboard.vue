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

      // Calculate the number of full months and the remaining days
      const totalMonths = differenceInMonths(end, start);
      const remainingDays = differenceInDays(end, new Date(start.getFullYear(), start.getMonth() + totalMonths, start.getDate()));

      return `${totalMonths} months ${remainingDays} days`;
    },
  },
  methods: {
    toggleSidebar() {
      this.isMinimized = !this.isMinimized;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    handleMenuClick(index) {
      this.selected = index;
      if (this.isMinimized) {
        this.isMinimized = false;
      }
    }
  }
};
</script>

<template>
  <div class="font-nunito flex h-screen bg-white p-6 space-x-4">
    <aside :class="['bg-whitegray text-white rounded-[30px] transition-all duration-300', isMinimized ? 'w-20' : 'w-64']">
      <div class="p-4">
        <div :class="['flex items-center mb-6', isMinimized ? 'justify-center' : 'justify-center']">
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

          <svg v-if="!isMinimized" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_608_346)">
          <path d="M6.725 19.225C6.09167 19.225 5.60833 19.05 5.275 18.7C4.94167 18.35 4.775 17.8583 4.775 17.225V3.35C4.775 2.7 4.94167 2.20833 5.275 1.875C5.625 1.54167 6.11667 1.375 6.75 1.375H12.825C14.7917 1.375 16.3083 1.875 17.375 2.875C18.4417 3.85833 18.975 5.23333 18.975 7C18.975 8.76667 18.4417 10.15 17.375 11.15C16.3083 12.15 14.7917 12.65 12.825 12.65H8.65V17.225C8.65 17.8583 8.48333 18.35 8.15 18.7C7.83333 19.05 7.35833 19.225 6.725 19.225ZM8.65 9.65H12.175C13.175 9.65 13.9333 9.425 14.45 8.975C14.9833 8.525 15.25 7.86667 15.25 7C15.25 6.13333 14.9833 5.48333 14.45 5.05C13.9333 4.61667 13.175 4.4 12.175 4.4H8.65V9.65ZM23.0016 19.225C22.3682 19.225 21.8849 19.0583 21.5516 18.725C21.2182 18.3917 21.0516 17.9167 21.0516 17.3V8.425C21.0516 7.80833 21.2099 7.34167 21.5266 7.025C21.8599 6.69167 22.3182 6.525 22.9016 6.525C23.5016 6.525 23.9599 6.69167 24.2766 7.025C24.5932 7.34167 24.7516 7.80833 24.7516 8.425V9.725H24.5016C24.7016 8.725 25.1432 7.95 25.8266 7.4C26.5099 6.85 27.3932 6.54167 28.4766 6.475C28.8932 6.44167 29.2099 6.55 29.4266 6.8C29.6599 7.03333 29.7849 7.425 29.8016 7.975C29.8349 8.49167 29.7266 8.9 29.4766 9.2C29.2432 9.5 28.8432 9.68333 28.2766 9.75L27.7016 9.8C26.7516 9.88333 26.0432 10.1583 25.5766 10.625C25.1266 11.0917 24.9016 11.7667 24.9016 12.65V17.3C24.9016 17.9167 24.7349 18.3917 24.4016 18.725C24.0849 19.0583 23.6182 19.225 23.0016 19.225ZM37.2543 19.275C35.9376 19.275 34.7876 19.0167 33.8043 18.5C32.8376 17.9833 32.0876 17.2417 31.5543 16.275C31.021 15.3083 30.7543 14.1667 30.7543 12.85C30.7543 11.8667 30.9043 10.9833 31.2043 10.2C31.5043 9.41667 31.9376 8.75 32.5043 8.2C33.0876 7.63333 33.7793 7.20833 34.5793 6.925C35.3793 6.625 36.271 6.475 37.2543 6.475C38.571 6.475 39.7126 6.73333 40.6793 7.25C41.6626 7.76667 42.421 8.5 42.9543 9.45C43.5043 10.4 43.7793 11.5333 43.7793 12.85C43.7793 13.85 43.621 14.7417 43.3043 15.525C43.0043 16.3083 42.571 16.9833 42.0043 17.55C41.4376 18.1167 40.746 18.55 39.9293 18.85C39.1293 19.1333 38.2376 19.275 37.2543 19.275ZM37.2543 16.45C37.8043 16.45 38.2793 16.3167 38.6793 16.05C39.0793 15.7833 39.396 15.3917 39.6293 14.875C39.8626 14.3417 39.9793 13.6667 39.9793 12.85C39.9793 11.6333 39.7293 10.7417 39.2293 10.175C38.7293 9.59167 38.071 9.3 37.2543 9.3C36.721 9.3 36.246 9.425 35.8293 9.675C35.4293 9.925 35.1126 10.3167 34.8793 10.85C34.6626 11.3667 34.5543 12.0333 34.5543 12.85C34.5543 14.0667 34.8043 14.975 35.3043 15.575C35.8043 16.1583 36.4543 16.45 37.2543 16.45ZM44.976 23.7C44.526 23.7167 44.1676 23.6417 43.901 23.475C43.6343 23.3083 43.451 23.0917 43.351 22.825C43.251 22.575 43.226 22.3167 43.276 22.05C43.3093 21.7833 43.4176 21.55 43.601 21.35C43.7843 21.15 44.0343 21.0333 44.351 21C45.001 20.95 45.4676 20.7667 45.751 20.45C46.051 20.15 46.201 19.6833 46.201 19.05V8.425C46.201 7.80833 46.3676 7.34167 46.701 7.025C47.0343 6.69167 47.501 6.525 48.101 6.525C48.701 6.525 49.1593 6.69167 49.476 7.025C49.8093 7.34167 49.976 7.80833 49.976 8.425V18.7C49.976 19.8 49.7926 20.7083 49.426 21.425C49.076 22.1417 48.5343 22.6833 47.801 23.05C47.0676 23.4333 46.126 23.65 44.976 23.7ZM48.076 4.475C47.3926 4.475 46.8593 4.31667 46.476 4C46.1093 3.66667 45.926 3.2 45.926 2.6C45.926 1.98333 46.1093 1.51667 46.476 1.2C46.8593 0.866666 47.3926 0.699999 48.076 0.699999C48.776 0.699999 49.3093 0.866666 49.676 1.2C50.0426 1.51667 50.226 1.98333 50.226 2.6C50.226 3.2 50.0426 3.66667 49.676 4C49.3093 4.31667 48.776 4.475 48.076 4.475ZM58.8869 19.275C57.5536 19.275 56.3869 19.0167 55.3869 18.5C54.4036 17.9667 53.6452 17.2167 53.1119 16.25C52.5786 15.2833 52.3119 14.1417 52.3119 12.825C52.3119 11.8417 52.4619 10.9583 52.7619 10.175C53.0619 9.39167 53.4952 8.725 54.0619 8.175C54.6452 7.625 55.3452 7.20833 56.1619 6.925C56.9786 6.625 57.8869 6.475 58.8869 6.475C59.4036 6.475 59.9536 6.54167 60.5369 6.675C61.1202 6.79167 61.6952 7 62.2619 7.3C62.5952 7.45 62.8202 7.66667 62.9369 7.95C63.0702 8.21667 63.1202 8.5 63.0869 8.8C63.0536 9.08333 62.9452 9.34167 62.7619 9.575C62.5952 9.79167 62.3786 9.94167 62.1119 10.025C61.8452 10.0917 61.5452 10.0417 61.2119 9.875C60.8952 9.69167 60.5619 9.55833 60.2119 9.475C59.8786 9.39167 59.5619 9.35 59.2619 9.35C58.7619 9.35 58.3202 9.43333 57.9369 9.6C57.5536 9.75 57.2286 9.975 56.9619 10.275C56.7119 10.5583 56.5119 10.9167 56.3619 11.35C56.2286 11.7833 56.1619 12.2833 56.1619 12.85C56.1619 13.95 56.4286 14.8167 56.9619 15.45C57.5119 16.0667 58.2786 16.375 59.2619 16.375C59.5619 16.375 59.8786 16.3417 60.2119 16.275C60.5452 16.1917 60.8786 16.0583 61.2119 15.875C61.5452 15.7083 61.8452 15.6667 62.1119 15.75C62.3786 15.8333 62.5869 15.9917 62.7369 16.225C62.9036 16.4417 62.9952 16.7 63.0119 17C63.0452 17.2833 62.9952 17.5667 62.8619 17.85C62.7452 18.1167 62.5286 18.325 62.2119 18.475C61.6452 18.7583 61.0786 18.9583 60.5119 19.075C59.9452 19.2083 59.4036 19.275 58.8869 19.275ZM70.8754 19.275C69.7254 19.275 68.7587 19.0833 67.9754 18.7C67.2087 18.3167 66.6337 17.7583 66.2504 17.025C65.8837 16.2917 65.7004 15.3667 65.7004 14.25V9.55H64.6504C64.1837 9.55 63.8171 9.425 63.5504 9.175C63.3004 8.925 63.1754 8.58333 63.1754 8.15C63.1754 7.68333 63.3004 7.33333 63.5504 7.1C63.8171 6.85 64.1837 6.725 64.6504 6.725H65.7004V4.825C65.7004 4.19167 65.8671 3.71667 66.2004 3.4C66.5337 3.06667 67.0004 2.9 67.6004 2.9C68.2171 2.9 68.6837 3.06667 69.0004 3.4C69.3171 3.71667 69.4754 4.19167 69.4754 4.825V6.725H71.8504C72.3171 6.725 72.6754 6.85 72.9254 7.1C73.1754 7.33333 73.3004 7.68333 73.3004 8.15C73.3004 8.58333 73.1754 8.925 72.9254 9.175C72.6754 9.425 72.3171 9.55 71.8504 9.55H69.4754V14.1C69.4754 14.8 69.6337 15.325 69.9504 15.675C70.2837 16.025 70.8087 16.2 71.5254 16.2C71.7754 16.2 72.0087 16.175 72.2254 16.125C72.4421 16.075 72.6421 16.0417 72.8254 16.025C73.0587 16.0083 73.2504 16.0833 73.4004 16.25C73.5504 16.4 73.6254 16.7417 73.6254 17.275C73.6254 17.675 73.5587 18.025 73.4254 18.325C73.2921 18.625 73.0587 18.8417 72.7254 18.975C72.5087 19.0583 72.2087 19.125 71.8254 19.175C71.4587 19.2417 71.1421 19.275 70.8754 19.275ZM80.8578 19.275C79.5411 19.275 78.3911 19.0167 77.4078 18.5C76.4411 17.9833 75.6911 17.2417 75.1578 16.275C74.6245 15.3083 74.3578 14.1667 74.3578 12.85C74.3578 11.8667 74.5078 10.9833 74.8078 10.2C75.1078 9.41667 75.5411 8.75 76.1078 8.2C76.6911 7.63333 77.3828 7.20833 78.1828 6.925C78.9828 6.625 79.8745 6.475 80.8578 6.475C82.1745 6.475 83.3161 6.73333 84.2828 7.25C85.2661 7.76667 86.0245 8.5 86.5578 9.45C87.1078 10.4 87.3828 11.5333 87.3828 12.85C87.3828 13.85 87.2245 14.7417 86.9078 15.525C86.6078 16.3083 86.1745 16.9833 85.6078 17.55C85.0411 18.1167 84.3495 18.55 83.5328 18.85C82.7328 19.1333 81.8411 19.275 80.8578 19.275ZM80.8578 16.45C81.4078 16.45 81.8828 16.3167 82.2828 16.05C82.6828 15.7833 82.9995 15.3917 83.2328 14.875C83.4661 14.3417 83.5828 13.6667 83.5828 12.85C83.5828 11.6333 83.3328 10.7417 82.8328 10.175C82.3328 9.59167 81.6745 9.3 80.8578 9.3C80.3245 9.3 79.8495 9.425 79.4328 9.675C79.0328 9.925 78.7161 10.3167 78.4828 10.85C78.2661 11.3667 78.1578 12.0333 78.1578 12.85C78.1578 14.0667 78.4078 14.975 78.9078 15.575C79.4078 16.1583 80.0578 16.45 80.8578 16.45ZM95.5795 19.275C94.2628 19.275 93.1128 19.0167 92.1295 18.5C91.1628 17.9833 90.4128 17.2417 89.8795 16.275C89.3462 15.3083 89.0795 14.1667 89.0795 12.85C89.0795 11.8667 89.2295 10.9833 89.5295 10.2C89.8295 9.41667 90.2628 8.75 90.8295 8.2C91.4128 7.63333 92.1045 7.20833 92.9045 6.925C93.7045 6.625 94.5962 6.475 95.5795 6.475C96.8962 6.475 98.0378 6.73333 99.0045 7.25C99.9878 7.76667 100.746 8.5 101.279 9.45C101.829 10.4 102.104 11.5333 102.104 12.85C102.104 13.85 101.946 14.7417 101.629 15.525C101.329 16.3083 100.896 16.9833 100.329 17.55C99.7628 18.1167 99.0712 18.55 98.2545 18.85C97.4545 19.1333 96.5628 19.275 95.5795 19.275ZM95.5795 16.45C96.1295 16.45 96.6045 16.3167 97.0045 16.05C97.4045 15.7833 97.7212 15.3917 97.9545 14.875C98.1878 14.3417 98.3045 13.6667 98.3045 12.85C98.3045 11.6333 98.0545 10.7417 97.5545 10.175C97.0545 9.59167 96.3962 9.3 95.5795 9.3C95.0462 9.3 94.5712 9.425 94.1545 9.675C93.7545 9.925 93.4378 10.3167 93.2045 10.85C92.9878 11.3667 92.8795 12.0333 92.8795 12.85C92.8795 14.0667 93.1295 14.975 93.6295 15.575C94.1295 16.1583 94.7795 16.45 95.5795 16.45ZM108.826 19.275C107.343 19.275 106.235 18.8667 105.501 18.05C104.768 17.2167 104.401 15.9833 104.401 14.35V3.075C104.401 2.44167 104.56 1.96667 104.876 1.65C105.21 1.31667 105.685 1.15 106.301 1.15C106.901 1.15 107.36 1.31667 107.676 1.65C108.01 1.96667 108.176 2.44167 108.176 3.075V14.2C108.176 14.8833 108.318 15.3917 108.601 15.725C108.901 16.0417 109.293 16.2 109.776 16.2C109.91 16.2 110.035 16.1917 110.151 16.175C110.268 16.1583 110.393 16.15 110.526 16.15C110.793 16.1167 110.976 16.2 111.076 16.4C111.193 16.5833 111.251 16.9583 111.251 17.525C111.251 18.025 111.151 18.4083 110.951 18.675C110.751 18.925 110.443 19.0917 110.026 19.175C109.86 19.1917 109.668 19.2083 109.451 19.225C109.235 19.2583 109.026 19.275 108.826 19.275Z" fill="#1B4E6E"/>
          </g>
          <defs>
          <filter id="filter0_d_608_346" x="0.775024" y="0.699951" width="114.476" height="31.0251" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_608_346"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_608_346" result="shape"/>
          </filter>
          </defs>
          </svg>
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
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
          <button @click="toggleModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h1 class="text-2xl font-bold mb-4">Project Details</h1>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Project Name</label>
              <input v-model="project.name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" required/>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Budget</label>
              <input v-model="project.budget" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" required/>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Methodology</label>
              <input v-model="project.methodology" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" required/>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Start Date</label>
              <input v-model="project.startDate" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md" required/>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">End Date</label>
              <input v-model="project.endDate" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md" required/>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold mb-2">Description</label>
              <textarea v-model="project.description" class="w-full px-3 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
            </div>
            <p><strong>Estimated Duration:</strong> {{ estimatedDuration }}</p>
            <!-- <GanttChart :startDate="project.startDate" :endDate="project.endDate" class="mt-6"/> -->
          </div>
        </div>
      </div>
      <!-- Show Modal Button -->
      <button
          @click="toggleModal"
          class="fixed bottom-4 left-4 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 z-50"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1.5C5.702 1.5 1.5 5.702 1.5 12S5.702 22.5 12 22.5 22.5 18.298 22.5 12 18.298 1.5 12 1.5zM12 20.25a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5zm-1.5-12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm1.5 7.5c-1.305 0-2.418-.843-2.818-2h1.636a1.5 1.5 0 0 0 0-3h-1.636c.4-1.157 1.513-2 2.818-2 1.305 0 2.418.843 2.818 2h-1.636a1.5 1.5 0 0 0 0 3h1.636c-.4 1.157-1.513 2-2.818 2z"/>
        </svg>
      </button>
    </div>

    <main class="flex-1 p-6 bg-gray-100 rounded-[30px]">
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