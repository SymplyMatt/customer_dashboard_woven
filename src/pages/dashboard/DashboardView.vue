<template>
  <div :class="containerClasses">
    <Sidebar /> 
    <main :class="mainContentClasses">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '../../components/dashboard/sidebar/Sidebar.vue'; 

export default {
  name: 'DashboardView',
  data() {
    return {
      containerClasses: "grid grid-cols-[20%,80%] h-screen bg-[#F4F6F8] h-full dashboard-container",
      mainContentClasses: "bg-[#F4F6F8] h-full main-dashoard",
    };
  },
  components: {
    Sidebar, 
  }
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
                
