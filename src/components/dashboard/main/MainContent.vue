<template>
    <div class="flex flex-col w-full items-center p-10 gap-10 overflow-y-scroll main-content-dashboard">
      <Stats />
      <LowerNav :route="route"/>

      <div class="flex flex-col justify-center items-center">
        <div class="">
          <div class="">
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
          </div>
          <div class="">
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
            <div class="">Hello</div>
          </div>
        </div>
      </div>
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
<style>
  .main-content-dashboard{
    height: calc(100vh - 80px);
  }
</style>
  