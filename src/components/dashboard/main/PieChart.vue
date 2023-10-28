<template>
    <div class="flex justify-between items-center w-full gap-10">
      <div class="pie-chart relative">
        <canvas id="myChart"></canvas>
        <div class="total-items text-10">
          <span class="font-extrabold">1260</span><br>Transactions
        </div>
      </div>
      <div class="legend  gap-2">
        <div v-for="(label, index) in chartData.labels" :key="index" class="legend-item gap-2">
          <div class="legend-color" :style="{ backgroundColor: chartData.datasets[0].backgroundColor[index] }"></div>
          <div class="legend-label">{{ label }}</div>
          <div class="legend-percent">{{ calculatePercentage(index) }}</div>
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
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
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
          return ((chartData.datasets[0].data[index] / total) * 100).toFixed(2) + '%';
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
    margin-right: 20px;
  }
  
  .legend-color {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  
  .legend-label {
    font-weight: bold;
    margin-right: 5px;
  }
  
  .legend-percent {
    font-style: italic;
  }
  </style>
  