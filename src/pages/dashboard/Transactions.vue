<template>
  <TopMain 
    :title="'Dashboard'"
  />
  <MainContent :route="route" />
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 
import MainContent from '../../components/dashboard/main/MainContent.vue'; 

export default {
  name: 'Transactions',
  components: {
    TopMain,
    MainContent,
  },
  data(){
    return {
      route : 'transactions'
    }
  }
}
</script>
