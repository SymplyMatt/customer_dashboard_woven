<template>
  <div class="flex flex-col items-center gap-1 cursor-pointer" @click="toggleView()">
    <div :class="getClassNames(item, route)">
      {{ item }} {{ item.toLowerCase() == 'customers' ? '[32]' : '' }}
    </div>
    <div :class="getClassNames(item, route, true)" class="nav-border"></div>
  </div>
</template>

<script>
export default {
  name: 'LowerNavItem',
  props: ['item', 'route', 'toggleView'],
  methods: {
    getClassNames(item, route, isBorder = false) {
      const classNames = [];

      if (item.toLowerCase() == route) {
        classNames.push('text-darkBrown');
      }

      if (item.toLowerCase() == route && this.isDarkMode) {
        classNames.push('text-liveModeToggleDark');
      }

      if (this.isDarkMode && item.toLowerCase() != route) {
        classNames.push('text-white');
      }

      if (isBorder) {
        classNames.push('nav-border');
          if (item.toLowerCase() != route) {
          classNames.push('visibility-hidden');
        }
        if(this.isDarkMode){
          classNames.push('darkModeBorder');
        }
      }

      return classNames.join(' ');
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style>
.nav-border {
  height: 5px;
  width: 150px;
  background-color: #79242F;
}
.nav-border.darkModeBorder {
  background-color: #17a2b8 !important ;
}

.text-darkBrown {
  color: #79242F;
}

.text-liveModeToggleDark {
  color: darkModeTextColor; 
}

.text-white {
  color: #fff;
}
.visibility-hidden{
    opacity: 0;
  }
</style>
