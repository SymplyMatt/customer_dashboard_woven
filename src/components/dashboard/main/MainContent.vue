<template>
    <div class="flex flex-col w-full items-center p-10 gap-10 overflow-y-scroll main-content-dashboard">
      <Stats />
      <div class="flex flex-col justify-center items-center w-full gap-4">
        <LowerNav :route="route"/>

        <div class="flex flex-col justify-center items-center w-full  bg-white r-12">
          <div class="flex flex-col justify-center items-center  w-full">
            <div class="grid-table-7 justify-between align-center w-full greyBorder px-5 text-headerBlack font-extrabold text-12  py-2">
              <div class="flex flex-row items-center py-2 uppercase">Customer</div>
              <div class="flex flex-row items-center py-2 uppercase">Amount</div>
              <div class="flex flex-row items-center py-2 uppercase">Reference</div>
              <div class="flex flex-row items-center py-2 uppercase items-center justify-center">Channel</div>
              <div class="flex flex-row items-center py-2 uppercase items-center justify-center">Status</div>
              <div class="flex flex-row items-center py-2 uppercase items-center justify-center">Type</div>
              <div class="flex flex-row items-center py-2 uppercase">Payment Date</div>
            </div>
            <TableDataItem 
              v-for="(i, index) in transactions"
              :key="index"
              :item="i"
              :index="index + 1"
            />
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  import Stats from './Stats.vue'; 
  import LowerNav from './LowerNav.vue'; 
  import TableDataItem from './TableDataItem.vue'; 
  
  export default {
    name: 'MainContent',
    props : ['route'],
    components: {
      Stats,
      LowerNav,
      TableDataItem
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
            paymentDate: "March 3, 2023 4:25 PM"
          },
          {
            customerName: "Alice Johnson",
            customerEmail: "alicejohnson@yahoo.com",
            amount: "₦18,762,345.12",
            reference: "wf_py_72_1xyn9myhgrft",
            channel: "Transfer",
            status: "Failed",
            type: "Collection",
            paymentDate: "March 12, 2023 2:10 PM"
          },
          {
            customerName: "Bob Smith",
            customerEmail: "bobsmith@hotmail.com",
            amount: "₦8,550,981.89",
            reference: "wf_py_19_1xyn9myhgrft",
            channel: "CARD",
            status: "Successful",
            type: "Payout",
            paymentDate: "March 7, 2023 8:45 AM"
          },
          {
            customerName: "Ella Brown",
            customerEmail: "ellabrown@gmail.com",
            amount: "₦35,942,743.77",
            reference: "wf_py_91_1xyn9myhgrft",
            channel: "Transfer",
            status: "Successful",
            type: "Collection",
            paymentDate: "March 9, 2023 1:30 PM"
          },
          {
            customerName: "David Wilson",
            customerEmail: "davidwilson@outlook.com",
            amount: "₦13,678,921.50",
            reference: "wf_py_64_1xyn9myhgrft",
            channel: "CARD",
            status: "Failed",
            type: "Payout",
            paymentDate: "March 15, 2023 6:55 AM"
          },
          {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            amount: "₦27,002,075.65",
            reference: "wf_py_53_1xyn9myhgrft",
            channel: "CARD",
            status: "Successful",
            type: "Payout",
            paymentDate: "March 3, 2023 4:25 PM"
          },
          {
            customerName: "Alice Johnson",
            customerEmail: "alicejohnson@yahoo.com",
            amount: "₦18,762,345.12",
            reference: "wf_py_72_1xyn9myhgrft",
            channel: "Transfer",
            status: "Failed",
            type: "Collection",
            paymentDate: "March 12, 2023 2:10 PM"
          },
          {
            customerName: "Bob Smith",
            customerEmail: "bobsmith@hotmail.com",
            amount: "₦8,550,981.89",
            reference: "wf_py_19_1xyn9myhgrft",
            channel: "CARD",
            status: "Successful",
            type: "Payout",
            paymentDate: "March 7, 2023 8:45 AM"
          },
          {
            customerName: "Ella Brown",
            customerEmail: "ellabrown@gmail.com",
            amount: "₦35,942,743.77",
            reference: "wf_py_91_1xyn9myhgrft",
            channel: "Transfer",
            status: "Successful",
            type: "Collection",
            paymentDate: "March 9, 2023 1:30 PM"
          },
          {
            customerName: "David Wilson",
            customerEmail: "davidwilson@outlook.com",
            amount: "₦13,678,921.50",
            reference: "wf_py_64_1xyn9myhgrft",
            channel: "CARD",
            status: "Failed",
            type: "Payout",
            paymentDate: "March 15, 2023 6:55 AM"
          },
          {
            customerName: "David Wilson",
            customerEmail: "davidwilson@outlook.com",
            amount: "₦13,678,921.50",
            reference: "wf_py_64_1xyn9myhgrft",
            channel: "CARD",
            status: "Failed",
            type: "Payout",
            paymentDate: "March 15, 2023 6:55 AM"
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
  .greyBorder{
    border-bottom:  2px solid #EEF0F1;
  }
  .r-12{
    border-radius: 12px;
  }
</style>
  