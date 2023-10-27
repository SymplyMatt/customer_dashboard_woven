<template>
  <router-link :to="item.path">
    <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4">
      <img :src="require(`@/assets/${item.icon}`)" alt="Image Description" class="w-6">
      {{ item.text }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Link',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
