<template>
  <div>
    <Sidebar /> 
    <main>
      This is the dashboard view
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/dashboard/sidebar/Sidebar.vue'; 

export default {
  name: 'DashboardView',
  components: {
    Sidebar, 
  }
}
</script>
