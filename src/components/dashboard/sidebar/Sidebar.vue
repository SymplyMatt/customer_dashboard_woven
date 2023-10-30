<template>
  <div 
  :class="isDarkMode ? 'bg-sideBarDark' : 'bg-sidebar'"
  class="min-h-screen hidden md:block h-full px-5 py-7 flex flex-col h-screen gap-5">
    <UserInfo />
    <SidebarLinks />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import UserInfo from './UserInfo';
import SidebarLinks from './SidebarLinks';

export default {
  name: 'Sidebar',
  components: {
    UserInfo,
    SidebarLinks,
  },
  computed: {
    isDarkMode() {
      const store = useStore();
      return store.getters.isDarkMode;
    },
  }
};
</script>

<style>
.bg-sidebar {
  background: linear-gradient(241.47deg, rgba(204, 255, 250, 0.25) -2.96%, rgba(255, 252, 245, 0.25) 44.27%, rgba(255, 229, 233, 0.25) 89.58%),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
}

.user-info {
  background: #79242F;
  gap: 10px;
  border-radius: 6px;
}
.border-left {
  border-left: 5px solid #79242F;
}
</style>
