<template>
    <div
        :class="isDarkMode ? 'bg-darkModeColorLight' : 'bg-white'" 
        class="flex flex-col px-5 w-full r-8 h-min-content">
        <div class="p-4 b-btm flex flex-col phone:flex-row phone:justify-between justify-center w-full items-center text-left gap-2">
            <div 
                :class="isDarkMode && 'text-white'"
                class="w-full flex flex gap-1 phone:items-start justify-center"><div class="b-1 h-6 w-6 rounded-full text-14 bg-lightGreen flex items-center justify-center text-thickGreen font-etxrabold"><i class="fa-solid fa-check"></i></div> 8012682284</div>
            <div class="w-full flex flex-col phone:items-end phone:text-right justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Amount</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">₦100.00</div>
            </div>
        </div>



        <div class="p-4 b-btm flex  flex-col gap-1 phone:flex-row phone:justify-between justify-center w-full items-center">
            <div class="w-full flex flex-col phone:items-start phone:text-left justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Customer Reference</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">53</div>
            </div>
            <div class="w-full flex flex-col phone:items-end phone:text-right  justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Customer name</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">Gamma Spark Updated</div>
            </div>
        </div>
        <div class="p-4 b-btm flex  flex-col gap-1 phone:flex-row phone:justify-between justify-center w-full items-center">
            <div class="w-full flex flex-col phone:items-start phone:text-left  justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Customer Phone</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">7708809901</div>
            </div>

            <div class="w-full flex flex-col phone:items-end phone:text-right  justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Customer Email</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">gamma-sparks@yopmail.com</div>
            </div>
        </div>


        <div class="p-4 b-btm flex  flex-col gap-1 phone:flex-row phone:justify-between justify-center w-full items-center">
            <div class="w-full flex flex-col gap-1 phone:items-start  justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Source Account</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 phone:text-left text-center">CORONATION MERCHANT BANK <br/> Load Test Account</div>
            </div>
            <div class="w-full flex flex-col phone:items-end  justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Settlement Account</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">Not Available</div>
            </div>
        </div>
        <div class="p-4 b-btm flex  flex-col gap-1 phone:flex-row phone:justify-between justify-center w-full items-center border-none">
            <div class="w-full flex flex-col phone:items-start  justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Transaction Date</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">Wednesday, March 22nd 2023, 4:03:29 pm</div>
            </div>
            <div class="w-full flex flex-col phone:items-end  justify-center items-center">
            <div 
            :class="isDarkMode && 'text-white'"
            class="font-extrabold text-10">Status Description</div>
            <div 
            :class="isDarkMode ? 'text-textGreyDark' : 'text-lightBlack'"
            class="font-medium text-14 ">Successful</div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import { useStore } from 'vuex';
    export default {
        name: 'TransactionInfo',
        computed: {
    isDarkMode() {
      return useStore().getters.isDarkMode;
    }
  },
    }
</script>
  