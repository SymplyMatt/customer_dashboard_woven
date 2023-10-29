<template>
    <div 
    class="flex flex-row items-center py-2 uppercase gap-2">
    {{ item.title }}
    </div>
</template>
  
<script>
  
  export default {
    name: 'TransactionTableHeader',
    props : ['item'],
  }
</script> 