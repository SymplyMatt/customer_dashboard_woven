<template>
    <div class="flex gap-6 bg-white py-2 px-5 w-full r-12">
        <LowerNavItem
        v-for="(i, index) in routes"
        :key="index"
        :item="i" 
        :route="route" 
        />
    </div>
  </template>
  
  <script>
  import LowerNavItem from './LowerNavItem.vue'; 
  
  export default {
    name: 'LowerNav',
    props : ['route'],
    components: {
      LowerNavItem
    },
    data(){
      return{
        routes : [
          "Transactions",
          "Customers"
        ]
      }
    }
  }
</script>
  