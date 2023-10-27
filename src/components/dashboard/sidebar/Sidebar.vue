<template>
  <div :class="classes">
    this is the sidebar
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      classes: "bg-sidebar w-30 min-h-screen hidden md:block h-full",
    };
  },
};
</script>

<style scoped>
.bg-sidebar {
  background: linear-gradient(241.47deg, rgba(204, 255, 250, 0.25) -2.96%, rgba(255, 252, 245, 0.25) 44.27%, rgba(255, 229, 233, 0.25) 89.58%),
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
}
</style>
