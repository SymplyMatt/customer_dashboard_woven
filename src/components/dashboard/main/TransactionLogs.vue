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

            <div class="flex flex-col justify-center items-center gap-5">
            <div class="">
                <div class="font-extrabold text-10">Transaction initiated</div>
                <div class="font-medium text-14 text-lightBlack">Wednesday, March 22nd 2023, 4:03:29 pm</div>
            </div>
            <div class="">
                <div class="font-extrabold text-10">Transaction initiated</div>
                <div class="font-medium text-14 text-lightBlack">Wednesday, March 22nd 2023, 4:03:29 pm</div>
            </div>
            </div>
        </div>
        <div class="bg-greyBtn py-2 px-10 text-10 align-center max-w-[230px] h-8 my-5 py-5 flex items-center">+ { /* Click to view response */ }</div>
    </div>
</template>
  
<script>
  export default {
    name: 'TransactionLogs',
}
</script>
  