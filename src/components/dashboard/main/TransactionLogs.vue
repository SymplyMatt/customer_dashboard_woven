<template>
    <div class="bg-white px-10 w-full r-8 flex flex-col h-min-content">
        <div class="b-btm flex justify-between items-center py-5 w-full ">
            <div class="uppercase font-medium text-12">Transaction Logs</div>
            <div class="text-greenRound text-12 font-extrabold flex gap-1 justify-center items-center"><i class="fa-solid fa-repeat"></i>Resend callback</div>
        </div>
        <div class="flex flex-row gap-5 py-5">
            <div class="flex flex-col justify-center gap-log items-center">
                <div class="bg-orangeRound rounded-full h-log w-log"></div>
                <div class="h-10 w-thin h-8 bg-greyRound"></div>
                <div class="bg-greenRound rounded-full h-log w-log"></div>
            </div>

            <div class="flex flex-col justify-center gap-5">
                <LogItem 
                    v-for="(i,index) in logs"
                    :key="index"
                    :item="i"
                />
            </div>
        </div>
        <div class="bg-greyBtn py-2 px-10 text-10 align-center max-w-[230px] h-8 my-5 py-5 flex items-center">+ { /* Click to view response */ }</div>
    </div>
</template>
  
<script>
    import LogItem from './LogItem.vue'
    export default {
        components : {
            LogItem
        },
    data() {
        return {
        logs: [
            {
            logTitle: "Transaction initiated",
            date: "Wednesday, March 22nd 2023, 4:03:29 pm",
            },
            {
            logTitle: "Callback sent Response code: 429",
            date: "Thursday, March 23rd 2023, 2:21:17 am",
            },
        ],
        };
    },
    };
</script>
  