<template>
    <div class="mm:flex mm:justify-between items-center w-full gap-5 grid grid-cols-1fr">
      <TotalBox :item="totalAmountReceived" v-if="totalAmountReceived.length > 0"/>
      <TotalBox :item="totalPayouts"  v-if="totalPayouts.length > 0"/>
      <Chart :item="totalAmountReceived" v-if="totalPayouts.length > 0"/>
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
        if (response.status === 200) {
          totalAmountReceived.value = response.data.totalAmountReceived;
          totalPayouts.value = response.data.totalPayouts;
          loading.value = false;
          console.log('totalAmountReceived.value: ', totalAmountReceived.value);
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
  