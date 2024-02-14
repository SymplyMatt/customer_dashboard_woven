<template>
  <div class="flex flex-col w-full items-center p-10 gap-10 overflow-y-scroll main-content-dashboard">
    <Stats />
    <div class="flex flex-col justify-center items-center w-full gap-4">
      <LowerNav :route="route" :toggleView="toggleView" />

      <div :class="computedClasses" class="flex flex-col w-full r-12 table-area">
        <i :class="spinnerColor" class="fa-solid fa-spinner spinner" v-if="loading"></i>
        <div class="flex flex-col justify-center items-center w-full table-container" v-if="route == 'transactions'">
          <div :class="computedClasses" class="grid-table-7 justify-between align-center w-full greyBorder-btm px-5 text-headerBlack font-extrabold text-12 py-2">
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
import { ref, onMounted, computed } from 'vue';
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

    const store = useStore();

    const isDarkMode = computed(() => store.getters.isDarkMode);

    onMounted(async () => {
      try {
        const response = await fetchData('get', '/tables');
        const transactions_data = [
        {
          id: "5f3c7e1821c7dd8e80d85da6",
          customerName: "John Doe",
          customerEmail: "johndoe@gmail.com",
          amount: "₦27,002,075.65",
          reference: "wf_py_53_1xyn9myhgrft",
          channel: "CARD",
          status: "Successful",
          type: "Payout",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85da7",
          customerName: "Alice Johnson",
          customerEmail: "alicejohnson@yahoo.com",
          amount: "₦18,762,345.12",
          reference: "wf_py_72_1xyn9myhgrft",
          channel: "Transfer",
          status: "Failed",
          type: "Collection",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85da8",
          customerName: "Bob Smith",
          customerEmail: "bobsmith@hotmail.com",
          amount: "₦8,550,981.89",
          reference: "wf_py_19_1xyn9myhgrft",
          channel: "CARD",
          status: "Successful",
          type: "Payout",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85da9",
          customerName: "Ella Brown",
          customerEmail: "ellabrown@gmail.com",
          amount: "₦35,942,743.77",
          reference: "wf_py_91_1xyn9myhgrft",
          channel: "Transfer",
          status: "Successful",
          type: "Collection",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85daa",
          customerName: "David Wilson",
          customerEmail: "davidwilson@outlook.com",
          amount: "₦13,678,921.50",
          reference: "wf_py_64_1xyn9myhgrft",
          channel: "CARD",
          status: "Failed",
          type: "Payout",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85dab",
          customerName: "John Doe",
          customerEmail: "johndoe@gmail.com",
          amount: "₦27,002,075.65",
          reference: "wf_py_53_1xyn9myhgrft",
          channel: "CARD",
          status: "Successful",
          type: "Payout",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85dac",
          customerName: "Alice Johnson",
          customerEmail: "alicejohnson@yahoo.com",
          amount: "₦18,762,345.12",
          reference: "wf_py_72_1xyn9myhgrft",
          channel: "Transfer",
          status: "Failed",
          type: "Collection",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85dad",
          customerName: "Bob Smith",
          customerEmail: "bobsmith@hotmail.com",
          amount: "₦8,550,981.89",
          reference: "wf_py_19_1xyn9myhgrft",
          channel: "CARD",
          status: "Successful",
          type: "Payout",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85dae",
          customerName: "Ella Brown",
          customerEmail: "ellabrown@gmail.com",
          amount: "₦35,942,743.77",
          reference: "wf_py_91_1xyn9myhgrft",
          channel: "Transfer",
          status: "Successful",
          type: "Collection",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85daf",
          customerName: "David Wilson",
          customerEmail: "davidwilson@outlook.com",
          amount: "₦13,678,921.50",
          reference: "wf_py_64_1xyn9myhgrft",
          channel: "CARD",
          status: "Failed",
          type: "Payout",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        {
          id: "5f3c7e1821c7dd8e80d85db0",
          customerName: "David Wilson",
          customerEmail: "davidwilson@outlook.com",
          amount: "₦13,678,921.50",
          reference: "wf_py_64_1xyn9myhgrft",
          channel: "CARD",
          status: "Failed",
          type: "Payout",
          paymentDate: "December 30, 2023 23:25 PM"
        },
        ];  
        const customers_data = [
          {
            "id": "8d09e172-c137-431f-917d-58aa128ff915",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "40b2d7e9-ea80-4670-8844-0c88dbf11e80",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "70a6a00d-4db3-4f87-9c49-e545b22cfc2a",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "3b02f72e-35d2-45fc-a2e3-7e08c4a9a53d",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "5e3b903e-0fc9-4631-b5c4-794edd05a33e",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "b9ca8a1d-042e-4fc1-bfad-d6f8b0e42cf5",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "8f6e62b9-e63e-43eb-8ec0-7cc05f02fde3",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "a7c1a3a1-6b82-4b15-92b3-e64f05c99a9e",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "64b50f5e-46aa-43f7-bd6d-289eeab3e81c",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          },
          {
            "id": "19a42a76-6d7a-4694-9c01-ec5f06a29a64",
            "customerName": "John Doe",
            "customerEmail": "johndoe@gmail.com",
            "phone": "09183746372",
            "reference": "COMPLETE SIZE",
            "nuban": "0938475648",
            "dateCreated": "December 30, 2023 23:25 PM"
          }
        ];
        const customers_headers = [
          {
              title : 'Customer'
          },
          {
              title : 'Phone'
          },
          {
              title : 'NUBAN'
          },
          {
              title : 'Reference'
          },
          {
              title : 'Date Created'
          },
        ];
        const transaction_headers = [
            {
              title : 'Customer',
              hasSub : false
            },
            {
              title : 'Amount',
              hasSub : false
            },
            {
              title : 'Reference',
              hasSub : false
            },
            {
              title : 'Channel',
              hasSub : false
            },
            {
              title : 'Status',
              hasSub : true
            },
            {
              title : 'Type',
              hasSub : true,
            },
            {
              title : 'Payment Date',
              hasSub : true
            },
        ]
        transactions.value = transactions_data;
        transactionsHeaders.value = transaction_headers;
        customers.value = customers_data;
        customersHeaders.value = customers_headers;
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

    return {
      transactions,
      transactionsHeaders,
      customers,
      customersHeaders,
      isDarkMode,
      loading,
    };
  },
  computed: {
    computedClasses() {
      return {
        'bg-darkModeColorThick': this.isDarkMode, 
        'bg-white': !this.isDarkMode, 
      };
    },
    spinnerColor() {
      return {
        'text-white': this.isDarkMode, 
        'text-brightRed': !this.isDarkMode, 
      };
    },
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
