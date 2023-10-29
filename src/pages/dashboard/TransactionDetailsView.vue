<template>
  <TopMain 
      :title="'Transaction Details'"
  />
  <div class="flex flex-col w-full p-10 gap-5 overflow-y-scroll main-content-dashboard">
    <TransactionDetailsBack />

    <div class="flex justify-between w-full gap-8">
      <TransactionInfo />

      <div class="bg-white px-10 w-full r-8 flex flex-col h-min-content">
        <div class="b-btm flex justify-between items-center py-5 w-full ">
          <div class="uppercase font-medium text-12">Transaction Logs</div>
          <div class="text-greenRound text-12 font-extrabold flex gap-1 justify-center items-center"><i class="fa-solid fa-repeat"></i>Resend callback</div>
        </div>

        <div class="flex flex-row gap-5 py-5">
          <div class="flex flex-col justify-center gap-log items-center">
            <div class="bg-orangeRound rounded-full h-log w-log"></div>
            <div class="h-10 w-thin h-8 bg-greyRound"></div>
            <div class="bg-greenRound rounded-full h-log w-log"></div>
          </div>

          <div class="flex flex-col justify-center items-center gap-5">
            <div class="">
              <div class="font-extrabold text-10">Transaction initiated</div>
              <div class="font-medium text-14 text-lightBlack">Wednesday, March 22nd 2023, 4:03:29 pm</div>
            </div>
            <div class="">
              <div class="font-extrabold text-10">Transaction initiated</div>
              <div class="font-medium text-14 text-lightBlack">Wednesday, March 22nd 2023, 4:03:29 pm</div>
            </div>
          </div>
        </div>
        <div class="bg-greyBtn py-2 px-10 text-10 align-center max-w-[230px] h-8 my-5 py-5 flex items-center">+ { /* Click to view response */ }</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 
import TransactionInfo from '../../components/dashboard/main/TransactionInfo.vue'; 
import TransactionDetailsBack from '../../components/dashboard/main/TransactionDetailsBack.vue'; 

export default {
  name: 'DashboardMain',
  components: {
    TopMain,
    TransactionInfo,
    TransactionDetailsBack
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
