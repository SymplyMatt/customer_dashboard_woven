<template>
  <TopMain 
    :title="'Transaction Details'"
  />
  <div class="flex flex-col w-full items-center p-10">
    <div class="flex justify-between items-center w-full gap-5">
      <TotalBox :item="totalAmountReceived"/>
      <TotalBox :item="totalPayouts"/>
      <TotalBox :item="totalAmountReceived"/>
    </div>
    <div class=""></div>
    <div class=""></div>
  </div>
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 
import TotalBox from '../../components/dashboard/main/TotalBox.vue'; 

export default {
  name: 'TransactionDetailsView',
  components: {
    TopMain,
    TotalBox
  },
  data() {
    return {
      totalAmountReceived: [
        {
          duration: 'Week',
          amount: '₦10,002,075.65',
        },
        {
          duration: 'Month',
          amount: '₦20,002,075.65',
        },
        {
          duration: 'Year',
          amount: '₦30,002,075.65',
        },
      ],
      totalPayouts: [
        {
          duration: 'Week',
          amount: '₦200,002,075.65',
        },
        {
          duration: 'Month',
          amount: '₦300,002,075.65',
        },
        {
          duration: 'Year',
          amount: '₦400,002,075.65',
        },
      ],
    };
  },
}
</script>
