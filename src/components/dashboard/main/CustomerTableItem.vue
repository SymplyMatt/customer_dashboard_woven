<template>
    <div 
    :class="computedClasses"
    class="grid-table-5 justify-between w-full px-5">
        <div 
        :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
        class="flex flex-col py-2 text-12 gap-1  justify-center">
        <div
          :class="isDarkMode ? 'text-textGreyDark' : 'text-blackName '"
          class="font-extrabold">{{ item.customerName}}</div>
        <div class="">{{ item.customerEmail}}</div>
        </div>
        <div 
          :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
          class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 justify-center">{{ item.phone}}</div>
        <div 
          :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
          class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 justify-center">{{ item.nuban}}</div>
        <div 
          :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
          class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 justify-center uppercase">{{ item.reference}}</div>
        <div 
          :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
          class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 justify-center">{{ item.dateCreated}}</div>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  export default {
    name: 'CustomerTableItem',
    props : ['item', 'index'],
    computed: {
    isDarkMode() {
      return useStore().getters.isDarkMode;
    },
    computedClasses() {
      return {
        'bg-sideBarDark': this.isDarkMode && this.index % 2 === 0,
        'bg-tableEven': !this.isDarkMode && this.index % 2 === 0,
      };
    },
  },
  }
</script>
<style>
    .r-4{
        border-radius: 5px;
    }
</style>
  