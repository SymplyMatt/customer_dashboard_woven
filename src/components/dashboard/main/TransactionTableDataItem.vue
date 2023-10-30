<template>
  <div :class="computedClasses" class="grid-table-7 justify-between w-full px-5 cursor-pointer" @click="navigateTo">
    <div class="flex flex-col py-2 text-12 gap-1  justify-center">
      <div 
      :class="isDarkMode ? 'text-textGreyDark' : 'text-blackName '"
      class="font-extrabold">{{ item.customerName }}</div>
      <div
      :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
      >{{ item.customerEmail }}</div>
    </div>
    <div 
    :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
    class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1  justify-center">{{ item.amount }}</div>
    <div 
      :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
      class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1  justify-center uppercase">{{ item.reference }}</div>
    <div 
      :class="isDarkMode ? 'text-white' : 'text-headerBlack'" 
      class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1  justify-center uppercase items-center">{{ item.channel }}</div>
    <div :class="item.status.toLowerCase() == 'failed' ? 'bg-failed text-failedText' : item.status.toLowerCase() == 'successful' ? 'bg-lightGreen text-collection' : ''" class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 justify-center items-center my-5 r-4">{{ item.status.toLowerCase() }}</div>
    <div :class="item.type.toLowerCase() == 'payout' ? 'text-payout' : item.type.toLowerCase() == 'collection' ? 'text-collection' : ''" class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1 justify-center uppercase items-center font-bold">{{ item.type }}</div>
    <div 
      :class="isDarkMode ? 'text-white' : 'text-headerBlack'"
      class="flex flex-row py-2 flex flex-col py-2 text-12 gap-1  justify-center overflow-x-auto">{{ item.paymentDate }}</div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'TransactionTableDataItem',
  props: ['item', 'index'],
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
  methods: {
    navigateTo() {
        this.$router.push('/dashboard/transaction/1234');
      }
    }
};
</script>

<style>
.r-4 {
  border-radius: 5px;
}
</style>
