<template>
  <div 
    :class="isDarkMode ? 'bg-darkModeColorLight' : 'bg-white'"
    class="flex flex-col justify-between items-center w-full radius-12 p-5 gap-6 h-50 overflow-hidden"
  >
    <div class="flex justify-between items-center w-full font-medium gap-5">
      <div 
      :class="isDarkMode ? 'text-textGreyDark' : 'text-textColorDark '"
      class="text-10 md:text-12">Total Amount Received</div>
      <div class="flex flex-col justify-center align-center overlay-container w-24 bg-white text-10">
        <div class="flex justify-center items-center bg-lightGreen p-2 gap-2 w-full cursor-pointer text-thickGreen" @click="changeisOverlayOpen()">
          {{ item.length > 0 ? "This " + getActiveDurationText()?.duration : '...' }} 
          <i class="fa-solid fa-angle-down" v-if="!isOverlayOpen"></i> 
          <i class="fa-solid fa-angle-up" v-if="isOverlayOpen"></i>
        </div>
        <div 
          :class="!isOverlayOpen && 'hide-overlay'"
          class="overlay flex flex-col mx-auto justify-center items-center w-full"
        >
          <div class="flex justify-center items-center border-t greyBorder border-b greyBorder py-2 px-5 w-full cursor-pointer" @click="changeDuration(item.toLowerCase())" v-for="(item, index) in durations">{{ item }}</div>
        </div>
      </div>
    </div>
    <div 
    :class="isDarkMode && 'text-white'"
    class="flex flex-col  w-full text-20 md:text-28 font-extrabold">
    {{ getActiveDurationText()?.amount || '' }}
    <div class="skeleton-loader" v-if="item.length < 1"></div>
  </div>
    <div class="flex justify-between items-center w-full text-brightRed text-12 font-medium border-t border-greyBorder pt-2 cursor-pointer">
      <div class="flex justify-center items-center gap-2">View Transactions <img src="@/assets/active-transactions.png" alt=""></div>
      <i class="fa-solid fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'TotalBox',
  props: {
    item: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      duration: 'week',
      isOverlayOpen: false,
    };
  },
  methods: {
    changeDuration(newDuration) {
      this.duration = newDuration;
      this.isOverlayOpen = false;
    },
    changeisOverlayOpen() {
      this.isOverlayOpen = !this.isOverlayOpen;
    },
    getActiveDurationText() {
      return this.item.find(i => i.duration.toLowerCase() == this.duration);
    },
  },
  computed: {
    durations() {
      return this.item.map(item => item.duration);
    },
    isDarkMode() {
      return useStore().getters.isDarkMode;
    },
  },
};
</script>

<style>
.radius-12 {
  border-radius: 12px;
}
.overlay-container {
  position: relative;
}
.overlay {
  position: absolute;
  top: 40px;
  box-shadow: -9px 3px 23px -38px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -9px 3px 23px -38px rgba(0, 0, 0, 1);
  -moz-box-shadow: -9px 3px 23px -38px rgba(0, 0, 0, 1);
  z-index: 1000;
  background-color: white;
}
.hide-overlay {
  visibility: hidden !important;
}
.overflow-hidden{
  overflow: hidden !important;
}
.skeleton-loader{
  height: 40px;
  width: 90%;
  background-color: #eef0f18e;
  animation: skeleton 1.5s ease infinite;
  opacity: 0.7;
}

  @keyframes skeleton {
    0% {
      background-color: #eef0f18e;
      opacity: 0.5;
    }
    50% {
      background-color: rgba(255, 255, 255, 0.209);
    }
    75% {
      background-color: #eef0f18e;
    }
    100% {
      opacity: 0.3;
      background-color: #ddd;
  }
  }
</style>
