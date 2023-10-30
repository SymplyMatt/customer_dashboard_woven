<template>
  <div 
  :class="isDarkMode ? 'bg-darkModeColorThick' : 'bg-[#F4F6F8] '"
  class="grid md:grid-cols-[20%,80%] grid-cols-1fr h-screen h-full dashboard-container">
    <Sidebar /> 
    <main 
    :class="isDarkMode ? 'bg-darkModeColorThick' : 'bg-[#F4F6F8] '"
    class="h-full main-dashoard">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { useStore } from 'vuex'; 
import Sidebar from '../../components/dashboard/sidebar/Sidebar.vue'; 

export default {
  name: 'DashboardView',
  components: {
    Sidebar, 
  },
  computed: {
    isDarkMode() {
      const store = useStore();
      return store.getters.isDarkMode;
    },
  },
  data() {
    return {
      containerClasses: "grid grid-cols-[20%,80%] h-screen bg-[#F4F6F8] h-full dashboard-container",
      mainContentClasses: "bg-[#F4F6F8] h-full main-dashoard",
    };
  },
}
</script>

<style>
  @import url('https://fonts.cdnfonts.com/css/avenir');

  .dashboard-container{
    font-family: Avenir;
  }
  .main-dashoard{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px calc(100vh - 80px);
  }
</style>
