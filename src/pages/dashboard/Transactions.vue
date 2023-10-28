<template>
  <TopMain 
    :title="'Dashboard'"
  />
  <div class="flex flex-col w-full items-center p-10 gap-10">
    <Stats />
    <div class="flex gap-6 bg-white py-2 px-5 w-full">
      <router-link :to="''">
        <div class="flex flex-col items-center gap-1">
          <div class="">
            Transactions
          </div>
          <div class="nav-border"></div>
        </div>
      </router-link>
      <router-link :to="''">
        <div class="flex flex-col items-center gap-1">
          <div class="">
            Customers
          </div>
          <div class="nav-border"></div>
        </div>
      </router-link>
    </div>
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
<style>
  .nav-border{
    height: 5px;
    width: 150px;
    background-color: #79242F;
  }
</style>
