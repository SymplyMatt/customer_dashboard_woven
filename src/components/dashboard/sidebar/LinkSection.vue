<template>
    <div class="flex flex-col gap-5">
        <div v-if="item.title" class="text-navTitle gap-2 text-5 flex items-center pl-4 font-extrabold">{{ item.title.toUpperCase() }}</div>
        <Link
        v-for="(link, index) in item.links"
        :key="index"
        :item="link"
        />
    </div>
</template>

<script>
import Link from './Link'; 
export default {
    name: 'LinkSection',
    components: {
    Link, 
    },
    props : {
        item: {
      type: Object, 
      required: true 
    }
    }
};
</script>
 