<template>
  <div 
  :class="isDarkMode ? 'bg-darkModeColorLight' : 'bg-white'"
  class="flex justify-between p-10 h-80 items-center">
    <div 
    :class="isDarkMode ? 'text-white' : 'text-black'"
    class="text-20">{{ title }}</div>
    <div class="flex  items-center justify-center  gap-5">
      <div 
      :class="isDarkMode ? 'text-liveModeToggleDark' : 'text-liveGreen'"
      class="flex gap-1 items-center justify-center">
        <i class="fa-solid fa-toggle-off"></i>
        <div class="">Live Mode</div>
      </div>
      <div 
      :class="isDarkMode ? 'text-greyBorder' : 'text-darkModeColorThick'"
      class="cursor-pointer text-24" @click="toggleDarkMode">
        <i :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TopMain',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    // Access isDarkMode state from the store
    const isDarkMode = computed(() => store.getters.isDarkMode);

    // Toggle dark mode using the store mutation
    const toggleDarkMode = () => {
      store.dispatch('toggleMode');
    };

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
