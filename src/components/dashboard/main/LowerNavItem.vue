<template>
    <router-link :to="'/dashboard/'+ item.toLowerCase()">
        <div class="flex flex-col items-center gap-1">
          <div :class="item.toLowerCase() == route && 'text-darkBrown'">
            {{ item }} {{ item.toLowerCase() == 'customers' ? '[32]' : '' }}
          </div>
          <div 
          :class="item.toLowerCase() != route && 'visibility-hidden'"
          class="nav-border"></div>
        </div>
    </router-link>  
</template>
  
<script>
  export default {
    name: 'LowerNavItem',
    props : ['item', 'route']
  }
</script>
<style>
    .nav-border{
      height: 5px;
      width: 150px;
      background-color: #79242F;
      transition: all 3s ease-in;
    }
    .visibility-hidden{
      opacity: 0;
    }
</style>
  