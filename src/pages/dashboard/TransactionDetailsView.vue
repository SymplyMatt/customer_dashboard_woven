<template>
  <TopMain 
      :title="'Transaction Details'"
  />
  <div class="flex flex-col w-full p-10 gap-10 overflow-y-scroll main-content-dashboard">
    <div class="flex flex-col gap-1 justify-start">
      <div class="text-lightBlack font-12 font-normal">
        <i class="fa-solid fa-angle-left"></i> Back
      </div>
      <div class="font-14 font-medium">
        Type: Payout
      </div>
    </div>
    
    <div class="flex flex-row justify-between items-center">
      <div class="">

      </div>
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 

export default {
  name: 'DashboardMain',
  components: {
    TopMain,
  },
}
</script>
<style>
  .main-content-dashboard{
    height: calc(100vh - 80px);
  }
</style>
