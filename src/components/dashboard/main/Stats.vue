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
  import fetchData from '../../../config/fetchData';
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Stats',
    components: {
      TotalBox,
      Chart
    },
    setup() {
    const totalPayouts = ref([]);
    const totalAmountReceived = ref([]);
    const loading = ref(true);
    onMounted(async () => {
      try {
        const response = await fetchData('get', '/getTotals');
        const totalAmountRec = [
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
        ];
        const total_payouts = [
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
        ];
        totalAmountReceived.value = totalAmountRec;
        totalPayouts.value = total_payouts;
        if (response.status === 200) {
          totalAmountReceived.value = response.data.totalAmountReceived;
          totalPayouts.value = response.data.totalPayouts;
          loading.value = false;
        } else {
          loading.value = false; 
        }
      } catch (error) {
        console.error('An error occurred while fetching data');
        loading.value = false;
      }
    });

    return {
      totalPayouts,
      totalAmountReceived,
      loading
    };
  },
  }
  </script>
  