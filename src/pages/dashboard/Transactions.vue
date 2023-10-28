<template>
    <TopMain 
      :title="'Dashboard'"
    />
  </template>
  
  <script>
  import TopMain from '../../components/dashboard/main/TopMain.vue'; 

  export default {
    name: 'TransactionView',
    components: {
      TopMain
    }
  }
  </script>
  