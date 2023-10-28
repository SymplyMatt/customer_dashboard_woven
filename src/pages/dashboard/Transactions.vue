<template>
  <TopMain 
    :title="'Dashboard'"
  />
  <div class="flex flex-col w-full items-center p-10">
    <Stats />
    <div class=""></div>
    <div class=""></div>
  </div>
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 
import Stats from '../../components/dashboard/main/Stats.vue'; 

export default {
  name: 'Transactions',
  components: {
    TopMain,
    Stats
  },
}
</script>
