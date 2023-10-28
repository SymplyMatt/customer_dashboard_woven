<template>
  <TopMain 
    :title="'Dashboard'"
  />
</template>

<script>
import TopMain from '../../components/dashboard/main/TopMain.vue'; 

export default {
  name: 'CustomerView',
  components: {
    TopMain
  }
}
</script>
