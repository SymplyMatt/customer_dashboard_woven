<template>
    <div class="mm:flex mm:justify-between items-center w-full gap-5 grid grid-cols-1fr">
      <TotalBox :item="totalAmountReceived"/>
      <TotalBox :item="totalPayouts"/>
      <Chart :item="totalAmountReceived"/>
    </div>
  </template>
  
  <script>
  import TotalBox from './TotalBox.vue'; 
  import Chart from './Chart.vue'; 
  
  export default {
    name: 'Stats',
    components: {
      TotalBox,
      Chart
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
  