<template>
    <div class="flex flex-col w-full items-center p-10 gap-10 overflow-y-scroll main-content-dashboard">
      <Stats />
      <div class="flex flex-col justify-center items-center w-full gap-4">
        <LowerNav :route="route"/>

        <div class="flex flex-col w-full  bg-white r-12">
          <div class="flex flex-col justify-center items-center  w-full"  v-if="route == 'transactions'">
            <div class="grid-table-7 justify-between align-center w-full greyBorder-btm px-5 text-headerBlack font-extrabold text-12  py-2">
              <TransactionTableHeader 
                v-for="(i, index) in transactionsHeaders"
                :key="index"
                :item="i"
                :index="index + 1"
              />
            </div>
            <TransactionTableDataItem 
              v-for="(i, index) in transactions"
              :key="index"
              :item="i"
              :index="index + 1"
            />
          </div>
          
          <div class="flex flex-col justify-center items-center  w-full"   v-if="route == 'customers'">
            <div class="grid-table-5 justify-between align-center w-full greyBorder-btm px-5 text-headerBlack font-extrabold text-12  py-2">
              <CustomersTableHeaders 
                v-for="(i, index) in customersHeaders"
                :key="index"
                :item="i"
              />
            </div>
            <CustomerTableItem 
              v-for="(i, index) in customers"
              :key="index"
              :item="i"
              :index="index + 1"
            />
          </div>
          <div class="flex flex-row justify-end w-full px-5 greyBorder-top uppercase py-2 text-12 text-darkBrown underline font-extrabold cursor-pointer">
            <div v-if="route === 'transactions'">
              See all transactions
            </div>
            <div v-else-if="route === 'customers'">
              See all customers</div>
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
  
  export default {
    name: 'MainContent',
    props : ['route'],
    components: {
      Stats,
      LowerNav,
      TransactionTableDataItem,
      TransactionTableHeader,
      CustomersTableHeaders,
      CustomerTableItem
    },
    data(){
      return{
        transactions : [
          {
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
            customerName: "David Wilson",
            customerEmail: "davidwilson@outlook.com",
            amount: "₦13,678,921.50",
            reference: "wf_py_64_1xyn9myhgrft",
            channel: "CARD",
            status: "Failed",
            type: "Payout",
            paymentDate: "December 30, 2023 23:25 PM"
          },
        ],
        transactionsHeaders :[
          {
            title : 'Customer'
          },
          {
            title : 'Amount'
          },
          {
            title : 'Reference'
          },
          {
            title : 'Channel'
          },
          {
            title : 'Status',
            hasSub : true
          },
          {
            title : 'Type',
            hasSub : true
          },
          {
            title : 'Payment Date',
            hasSub : true
          },
        ], 
        customers : [
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            phone: "09183746372",
            reference: "COMPLETE SIZE",
            nuban: "0938475648",
            dateCreated: "December 30, 2023 23:25 PM"
          },

        ],
        customersHeaders :[
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
        ] 
      }
    }
  }
</script>
<style>
  .main-content-dashboard{
    height: calc(100vh - 80px);
  }
  .grid-table-7{
    display: grid;
    grid-template-columns: 2fr 1.5fr 2fr 1fr 1fr 1fr 2fr;
  }
  .grid-table-5{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr 2fr 
  }
  .greyBorder-btm{
    border-bottom:  2px solid #EEF0F1;
  }
  .greyBorder-top{
    border-top:  2px solid #EEF0F1;
  }
  .r-12{
    border-radius: 12px;
  }
</style>
  