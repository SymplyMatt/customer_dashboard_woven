<template>
    <div class="flex flex-col justify-between items-center w-full bg-white radius-12 p-5 gap-6">
      <div class="flex justify-between items-center w-full text-textColorDark font-medium">
        <div class="text-12">Total Amount Received</div>
        <div class="flex flex-col justify-center align-center overlay-container w-24 bg-white text-10">
          <div class="flex justify-center items-center bg-lightGreen p-2 gap-2 w-full cursor-pointer" @click="changeisOverlayOpen()">
            {{ "This "+ getActiveDurationText().duration }} <i class="fa-solid fa-angle-down"></i>
          </div>
          <div 
          :class="!isOverlayOpen && 'hide-overlay'"
          class="overlay flex flex-col mx-auto justify-center items-center w-full"
          >
            <div class="flex justify-center items-center border-t greyBorder border-b greyBorder py-2 px-5 w-full cursor-pointer" @click="changeDuration(item.toLowerCase())" v-for="(item, index) in durations">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center w-full text-28 font-extrabold">{{ getActiveDurationText().amount }}</div>
      <div class="flex justify-between items-center w-full text-brightRed text-12 font-medium border-t border-greyBorder pt-2 cursor-pointer">
        <div class="flex justify-center items-center gap-2">View Transactions <img src="@/assets/active-transactions.png" alt=""></div>
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TotalBox',
    props: {
        item: {
        type: Array,
        required: true
        }
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
        }
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
  .hide-overlay{
    visibility: hidden !important;
  }
  </style>
  