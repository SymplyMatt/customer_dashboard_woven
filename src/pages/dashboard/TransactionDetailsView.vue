<template>
  <TopMain 
      :title="'Transaction Details'"
  />
  <div class="flex flex-col w-full p-10 gap-5 overflow-y-scroll main-content-dashboard">
    <div class="flex flex-col gap-1 justify-start">
      <div class="text-lightBlack font-12 font-normal cursor-pointer" @click="goBack">
        <i class="fa-solid fa-angle-left"></i> Back
      </div>
      <div class="font-14 font-medium">
        Type: Payout
      </div>
    </div>

    <div class="flex flex-row justify-between w-full gap-8">
      <div class="bg-white flex flex-col px-5 w-full r-8">
        <div class="p-4 b-btm flex justify-between w-full items-center text-left">
          <div class="w-full flex flex gap-1 p-1 items-start"><div class="b-1 h-6 w-6 rounded-full text-14 bg-lightGreen flex items-center justify-center text-thickGreen font-etxrabold"><i class="fa-solid fa-check"></i></div> 8012682284</div>
          <div class="w-full flex flex-col items-end text-right">
            <div class="font-extrabold text-10">Amount</div>
            <div class="font-medium text-14 text-lightBlack">₦100.00</div>
          </div>
        </div>
        <div class="p-4 b-btm flex flex-row justify-between w-full items-center">
          <div class="w-full flex flex-col items-start text-left">
            <div class="font-extrabold text-10">Customer Reference</div>
            <div class="font-medium text-14 text-lightBlack">53</div>
          </div>
          <div class="w-full flex flex-col items-end text-right">
            <div class="font-extrabold text-10">Customer name</div>
            <div class="font-medium text-14 text-lightBlack">Gamma Spark Updated</div>
          </div>
        </div>
        <div class="p-4 b-btm flex flex-row justify-between w-full items-center">
          <div class="w-full flex flex-col items-start text-left">
            <div class="font-extrabold text-10">Customer Phone</div>
            <div class="font-medium text-14 text-lightBlack">7708809901</div>
          </div>
          <div class="w-full flex flex-col items-end text-right">
            <div class="font-extrabold text-10">Customer Email</div>
            <div class="font-medium text-14 text-lightBlack">gamma-sparks@yopmail.com</div>
          </div>
        </div>
        <div class="p-4 b-btm flex flex-row justify-between w-full items-center">
          <div class="w-full flex flex-col items-start">
            <div class="font-extrabold text-10">Source Account</div>
            <div class="font-medium text-14 text-lightBlack">CORONATION MERCHANT BANK <br/> Load Test Account</div>
          </div>
          <div class="w-full flex flex-col items-end">
            <div class="font-extrabold text-10">Settlement Account</div>
            <div class="font-medium text-14 text-lightBlack">Not Available</div>
          </div>
        </div>
        <div class="p-4 b-btm flex flex-row justify-between w-full items-center">
          <div class="w-full flex flex-col items-start">
            <div class="font-extrabold text-10">Transaction Date</div>
            <div class="font-medium text-14 text-lightBlack">Wednesday, March 22nd 2023, 4:03:29 pm</div>
          </div>
          <div class="w-full flex flex-col items-end">
            <div class="font-extrabold text-10">Status Description</div>
            <div class="font-medium text-14 text-lightBlack">Successful</div>
          </div>
        </div>
      </div>

      <div class="bg-white p-10 w-full r-8">

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
</style>
