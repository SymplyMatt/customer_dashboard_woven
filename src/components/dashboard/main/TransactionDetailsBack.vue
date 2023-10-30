<template>
    <div class="flex flex-col gap-1 justify-start">
      <div 
        :class="isDarkMode ? 'text-white' : 'text-lightBlack'"
        class="font-12 font-normal cursor-pointer" @click="goBack">
        <i class="fa-solid fa-angle-left"></i> Back
      </div>
      <div
        :class="isDarkMode && 'text-textGreyDark' "
        class="font-14 font-medium">
        Type: Payout
      </div>
    </div>
</template>
  
  <script>
  import { useStore } from 'vuex';

  export default {
    name: 'TransactionDetailsBack',
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    },
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