<template>
    <div class="">
        <div class="font-extrabold text-10">{{ item.logTitle }}</div>
        <div class="font-medium text-14 text-lightBlack">{{ item.date }}</div>
    </div>
</template>
  
<script>
    export default {
        name : 'LogItem',
        props : ['item']
    };
</script>
  