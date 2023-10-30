<template>
  <div 
  class="flex flex-row items-center py-2 uppercase gap-2"
  :class="{
    'justify-center': index === 4 || index === 5 || index === 6,
    'text-white' : isDarkMode
  }">
  {{ item.title }}
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'CustomersTableHeader',
  props : ['item', 'index'],
  computed: {
  isDarkMode() {
    return useStore().getters.isDarkMode;
  },
},
}
</script> 