<template>
    <div 
    class="flex flex-row items-center py-2 uppercase gap-2"
    :class="{
      'justify-center': index === 4 || index === 5 || index === 6,
      'text-white' : isDarkMode
    }">
    {{ item.title }}
    <div class="flex flex-col"
    v-if="item.hasSub"
    >
      <i class="fa-solid fa-angle-up"></i>
      <i class="fa-solid fa-angle-down"></i>
    </div>
    </div>
</template>
  
<script>
  import { useStore } from 'vuex';
  export default {
    name: 'TransactionTableHeader',
    props : ['item', 'index'],
    computed: {
    isDarkMode() {
      return useStore().getters.isDarkMode;
    },
  },
  }
</script> 