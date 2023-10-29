<template>
    <div class="flex flex-col gap-1 justify-start">
      <div class="text-lightBlack font-12 font-normal cursor-pointer" @click="goBack">
        <i class="fa-solid fa-angle-left"></i> Back
      </div>
      <div class="font-14 font-medium">
        Type: Payout
      </div>
    </div>
</template>
  
  <script>
  
  export default {
    name: 'TransactionDetailsBack',
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>  