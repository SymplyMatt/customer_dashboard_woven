<template>
  <div class="flex flex-col w-full items-center p-10 gap-10 overflow-y-scroll main-content-dashboard">
    <Stats />
    <div class="flex flex-col justify-center items-center w-full gap-4">
      <LowerNav :route="route" :toggleView="toggleView" />

      <div :class="isDarkMode ? 'bg-darkModeColorLight' : 'bg-white'" class="flex flex-col w-full r-12 table-area">
        <i class="fa-solid fa-spinner spinner" v-if="loading"></i>
        <div class="flex flex-col justify-center items-center w-full table-container" v-if="route == 'transactions'">
          <div class="grid-table-7 justify-between align-center w-full greyBorder-btm px-5 text-headerBlack font-extrabold text-12 py-2">
            <TransactionTableHeader v-for="(i, index) in transactionsHeaders" :key="index" :item="i" :index="index + 1" />
          </div>
          <TransactionTableDataItem v-for="(i, index) in transactions" :key="index" :item="i" :index="index + 1" />
        </div>
        
        <div class="flex flex-col justify-center items-center w-full table-container" v-if="route == 'customers'">
          <div class="grid-table-5 justify-between align-center w-full greyBorder-btm px-5 text-headerBlack font-extrabold text-12 py-2">
            <CustomersTableHeaders v-for="(i, index) in customersHeaders" :key="index" :item="i" />
          </div>
          <CustomerTableItem v-for="(i, index) in customers" :key="index" :item="i" :index="index + 1" />
        </div>
        <div class="flex flex-row justify-end w-full px-5 greyBorder-top uppercase py-2 text-12 text-darkBrown underline font-extrabold cursor-pointer">
          <div v-if="route === 'transactions'">See all transactions</div>
          <div v-else-if="route === 'customers'">See all customers</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stats from './Stats.vue';
import LowerNav from './LowerNav.vue';
import TransactionTableHeader from './TransactionTableHeader.vue';
import TransactionTableDataItem from './TransactionTableDataItem.vue';
import CustomersTableHeaders from './CustomersTableHeaders.vue';
import CustomerTableItem from './CustomerTableItem.vue';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
import fetchData from '../../../config/fetchData';

export default {
  name: 'MainContent',
  props: ['route', 'toggleView'],
  components: {
    Stats,
    LowerNav,
    TransactionTableDataItem,
    TransactionTableHeader,
    CustomersTableHeaders,
    CustomerTableItem,
  },
  setup() {
    const transactions = ref([]);
    const transactionsHeaders = ref([]);
    const customers = ref([]);
    const customersHeaders = ref([]);
    const loading = ref(true);
    onMounted(async () => {
      try {
        const response = await fetchData('get', '/tables');
        if (response.status === 200) {
          transactions.value = response.data.transactions;
          transactionsHeaders.value = response.data.transactionsHeaders;
          customers.value = response.data.customers;
          customersHeaders.value = response.data.customersHeaders;
          loading.value = false;
        } else {
          loading.value = false; 
        }
      } catch (error) {
        console.error('An error occurred while fetching data');
        loading.value = false;
      }
    });

    const isDarkMode = useStore().getters.isDarkMode;

    return {
      transactions,
      transactionsHeaders,
      customers,
      customersHeaders,
      isDarkMode,
      loading,
    };
  },
};
</script>

<style>
  .spinner {
    font-size: 50px;
    animation: spin 1s linear infinite;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    color: white;
  }


  .main-content-dashboard {
    height: calc(100vh - 80px);
  }

  .grid-table-7 {
    display: grid;
    grid-template-columns: 2fr 1.5fr 2fr 1fr 1fr 1fr 2fr;
  }

  .grid-table-5 {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr 2fr;
  }

  .greyBorder-btm {
    border-bottom: 2px solid #EEF0F1;
  }

  .greyBorder-top {
    border-top: 2px solid #EEF0F1;
  }

  .r-12 {
    border-radius: 12px;
  }

  @media (max-width: 900px) {
    .table-container {
      width: 1000px !important;
      overflow-x: scroll !important;
    }

    .table-container > div,
    .table-area {
      overflow-x: scroll !important;
    }
  }
</style>
