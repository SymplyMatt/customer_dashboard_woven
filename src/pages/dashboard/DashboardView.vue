<template>
  <div>
    <Sidebar /> 
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '../../components/dashboard/sidebar/Sidebar.vue'; 

export default {
  name: 'DashboardView',
  components: {
    Sidebar, 
  }
}
</script>
