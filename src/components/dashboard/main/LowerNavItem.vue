<template>
      <div class="flex flex-col items-center gap-1 cursor-pointer" @click="toggleView()">
        <div :class="item.toLowerCase() == route && 'text-darkBrown'">
          {{ item }} {{ item.toLowerCase() == 'customers' ? '[32]' : '' }}
        </div>
        <div 
        :class="item.toLowerCase() != route && 'visibility-hidden'"
        class="nav-border"></div>
      </div>
</template>
  
<script>
  export default {
    name: 'LowerNavItem',
    props : ['item', 'route', 'toggleView']
  }
</script>
<style>
    .nav-border{
      height: 5px;
      width: 150px;
      background-color: #79242F;
    }
    .visibility-hidden{
      opacity: 0;
    }
</style>
  