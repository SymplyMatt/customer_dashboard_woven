<template>
    <div class="flex flex-col justify-between items-center w-full radius-12 p-5 h-50 chart-container">
      <div class="flex justify-between items-center w-full text-textColorDark font-medium">
        <div class="text-12">Transaction analytics</div>
        <div class="flex flex-col justify-center align-center overlay-container w-24 bg-white text-10">
          <div class="flex justify-center items-center bg-white p-2 gap-2 w-full cursor-pointer text-thickGreen" @click="changeisOverlayOpen()">
            {{ item.length > 0 ? "This "+ getActiveDurationText()?.duration  : ''}} <i class="fa-solid fa-angle-down" v-if="!isOverlayOpen"></i> <i class="fa-solid fa-angle-up" v-if="isOverlayOpen"></i>
          </div>
          <div 
          :class="!isOverlayOpen && 'hide-overlay'"
          class="overlay flex flex-col mx-auto justify-center items-center w-full"
          >
            <div class="flex justify-center items-center border-t greyBorder border-b greyBorder py-2 px-5 w-full cursor-pointer" @click="changeDuration(item.toLowerCase())" v-for="(item, index) in durations">{{ item }}</div>
          </div>
        </div>
      </div>
      <PieChart />
    </div>
</template>
  
<script>
import PieChart from './PieChart.vue';
    export default {
        name: 'Chart',
        components : {
            PieChart
        },
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
            }
        },
    };
</script>
  
<style>
    .chart-container{
        background: linear-gradient(241.47deg, #CCFFFA -2.96%, #FFFCF5 44.27%, #FFE5E9 89.58%),
        linear-gradient(0deg, #FFFFFF, #FFFFFF);
    }
    canvas{
      background: inherit;
    }
</style> 