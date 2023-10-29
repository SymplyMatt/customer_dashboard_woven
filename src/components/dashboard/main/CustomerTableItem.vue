<template>
    <div 
    :class="index % 2 === 0 && 'bg-tableEven'"
    class="grid-table-5 justify-between w-full px-5">
        <div class="flex flex-col py-2 text-12 gap-1 text-headerBlack  justify-center">
        <div class="text-blackName font-extrabold">{{ item.customerName}}</div>
        <div class="">{{ item.customerEmail}}</div>
        </div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center">{{ item.phone}}</div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center">{{ item.nuban}}</div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center uppercase">{{ item.reference}}</div>
        <div class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 text-headerBlack justify-center">{{ item.dateCreated}}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerTableItem',
    props : ['item', 'index']
  }
</script>
<style>
    .r-4{
        border-radius: 5px;
    }
</style>
  