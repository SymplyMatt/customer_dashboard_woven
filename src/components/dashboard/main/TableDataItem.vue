<template>
    <div 
    :class="index % 2 === 0 && 'bg-tableEven'"
    class="grid-table-7 justify-between w-full px-5">
        <div class="flex flex-col py-2 text-12 gap-1 text-headerBlack  justify-center">
        <div class="text-blackName font-extrabold">{{ item.customerName }}</div>
        <div class="">{{ item.customerEmail }}</div>
        </div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center">{{ item.amount }}</div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center uppercase">{{ item.reference }}</div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center uppercase items-center">{{ item.channel }}</div>
        <div 
        :class="item.status.toLowerCase() =='failed' ? 'bg-failed' : item.status.toLowerCase() == 'successful' ? 'bg-lightGreen' : ''"
        class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center items-center my-5 r-4">{{ item.status.toLowerCase() }}</div>
        <div 
        :class="item.type.toLowerCase() =='payout' ? 'text-payout' : item.type.toLowerCase() == 'collection' ? 'text-collection' : ''"
        class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center uppercase items-center">{{ item.type }}</div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center">{{ item.paymentDate }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TableDataItem',
    props : ['item', 'index']
  }
</script>
<style>
    .r-4{
        border-radius: 5px;
    }
</style>
  