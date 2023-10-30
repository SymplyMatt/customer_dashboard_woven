<template>
    <div 
    :class="isDarkMode ? 'bg-darkModeColorLight' : 'bg-white'"
    class="flex gap-6 py-2 px-5 w-full r-12 overflow-x-auto">
        <LowerNavItem
        v-for="(i, index) in routes"
        :key="index"
        :item="i" 
        :route="route" 
        :toggleView="toggleView"
        />
    </div>
  </template>
  
  <script>
  import LowerNavItem from './LowerNavItem.vue'; 
  import { useStore } from 'vuex';
  
  export default {
    name: 'LowerNav',
    props : ['route', 'toggleView'],
    components: {
      LowerNavItem
    },
    data(){
      return{
        routes : [
          "Transactions",
          "Customers"
        ]
      }
    },
    computed: {
    durations() {
      return this.item.map(item => item.duration);
    },
    isDarkMode() {
      return useStore().getters.isDarkMode;
    },
  },
  }
</script>
  