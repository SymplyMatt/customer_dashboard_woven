<template>
    <div class="">
        <div
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">{{ item.logTitle }}</div>
        <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14">{{ item.date }}</div>
    </div>
</template>
  
<script>
    import { useStore } from 'vuex';
    export default {
        name : 'LogItem',
        props : ['item'],
        computed: {
            isDarkMode() {
            return useStore().getters.isDarkMode;
            }
        },
    };
</script>
  