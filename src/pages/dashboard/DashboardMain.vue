<template>
    <TopMain 
        :title="'Dashboard'"
    />
    <MainContent :route="view" :toggleView="toggleView"/>
</template>
  
  <script>
  import MainContent from '../../components/dashboard/main/MainContent.vue'; 
  import TopMain from '../../components/dashboard/main/TopMain.vue'; 
  
  export default {
    name: 'DashboardMain',
    data() {
      return {
        containerClasses: "grid grid-cols-[20%,80%] h-screen bg-[#F4F6F8] h-full dashboard-container",
        mainContentClasses: "bg-[#F4F6F8] h-full main-dashoard",
        view: 'transactions'
      };
    },
    components: {
      TopMain,
      MainContent
    },
    methods: {
      toggleView() {
        this.view = this.view === 'transactions' ? 'customers' : 'transactions';
      }
    }
  }
</script>
  