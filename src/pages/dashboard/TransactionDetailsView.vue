<template>
  <TopMain 
    :title="'Transaction Details'"
  />
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 

export default {
  name: 'TransactionDetailsView',
  components: {
    TopMain
  }
}
</script>
