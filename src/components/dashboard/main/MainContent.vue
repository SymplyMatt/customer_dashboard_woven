<template>
    <div class="flex flex-col w-full items-center p-10 gap-10">
      <Stats />
      <LowerNav :route="route"/>
    </div>
  </template>
  
  <script>
  import Stats from './Stats.vue'; 
  import LowerNav from './LowerNav.vue'; 
  
  export default {
    name: 'MainContent',
    props : ['route'],
    components: {
      Stats,
      LowerNav
    },
  }
  </script>
  