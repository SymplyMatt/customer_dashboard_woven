<template>
  <div 
  :class="isDarkMode ? 'bg-darkModeColorLight' : 'bg-white'"
  class="flex justify-between p-10 h-80 items-center">
    <div 
    :class="isDarkMode ? 'text-white' : 'text-black'"
    class="phone:text-20 sm-phone-text-16 text-14">{{ title }}</div>
    <div class="flex  items-center justify-center  gap-5">
      <div 
      :class="isDarkMode ? 'text-liveModeToggleDark' : 'text-liveGreen'"
      class="flex gap-1 items-center justify-center">
        <i class="fa-solid fa-toggle-off"></i>
        <div class="phone:text-16 sm-phone-text-14 text-10">Live Mode</div>
      </div>
      <div 
      :class="isDarkMode ? 'text-greyBorder' : 'text-darkModeColorThick'"
      class="cursor-pointer phone:text-24 sm-phone-text-20 text-16" @click="toggleDarkMode">
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
