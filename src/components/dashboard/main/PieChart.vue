<template>
    <div class="flex justify-between items-center w-full gap-2">
      <div class="pie-chart relative">
        <canvas id="myChart"></canvas>
        <div class="total-items text-10">
          <span class="font-extrabold">1260</span><br>Transactions
        </div>
      </div>
      <div class="legend  gap-1">
        <div v-for="(label, index) in chartData.labels" :key="index" class="legend-item gap-1">
          <div class="legend-color" :style="{ backgroundColor: chartData.datasets[0].backgroundColor[index] }"></div>
          <div class="flex justify-center items-center">
              <span class="legend-label text-12">{{ label }}</span>
              <span class="italic text-12">{{ calculatePercentage(index) }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import { onMounted, ref } from 'vue';
  
  export default {
    name: 'PieChart',
    setup() {
      const chartData = {
        labels: ['Failed transactions', 'Successful transactions', 'Pending transactions'],
        datasets: [
          {
            data: [63, 1170, 25],
            backgroundColor: ['#A63241', '#4BDECA', '#EB8B1E'],
            hoverOffset: 4,
          },
        ]
        };
  
        const config = {
          type: 'doughnut',
          data: {
            labels: chartData.labels,
            datasets: chartData.datasets,
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        };
  
        const chartInstance = ref(null);
  
        onMounted(() => {
          chartInstance.value = new Chart(document.getElementById('myChart'), config);
        });
  
        function calculatePercentage(index) {
          const total = chartData.datasets[0].data.reduce((acc, value) => acc + value, 0);
          return (Math.round((chartData.datasets[0].data[index] / total) * 100)) + '%';
        }
  
        return {
          chartData,
          calculatePercentage,
          chartInstance,
        };
      },
    };
  </script>
  
  <style scoped>
  .pie-chart {
    width: 100%;
    height: 120px;
    position: relative;
  }
  
  .total-items {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
    text-align: center;
  }
  
  .legend {
    display: flex;
    flex-wrap: wrap;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
  }
  
  .legend-color {
    width: 20px;
    height: 20px;
  }
  
  .legend-label {
    font-weight: bold;
  }
  </style>
  