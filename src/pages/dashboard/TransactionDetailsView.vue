<template>
  <TopMain 
      :title="'Transaction Details'"
  />
  <div class="flex flex-col w-full p-10 gap-5 overflow-y-scroll main-content-dashboard">
    <TransactionDetailsBack />
    <div class="flex justify-between w-full gap-8">
      <TransactionInfo />
      <TransactionLogs />
    </div>
  </div>
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 
import TransactionInfo from '../../components/dashboard/main/TransactionInfo.vue'; 
import TransactionDetailsBack from '../../components/dashboard/main/TransactionDetailsBack.vue'; 
import TransactionLogs from '../../components/dashboard/main/TransactionLogs.vue'; 

export default {
  name: 'DashboardMain',
  components: {
    TopMain,
    TransactionInfo,
    TransactionDetailsBack,
    TransactionLogs
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style>
  .main-content-dashboard{
    height: calc(100vh - 80px);
  }
  .b-btm{
    border-bottom: 1px solid #EEF0F1;
  }
  .r-8{
    border-radius: 8px;
  }
  .b-1{
    border: 2px solid #188475;
  }
  .h-min-content{
    height: min-content !important;
  }
</style>
