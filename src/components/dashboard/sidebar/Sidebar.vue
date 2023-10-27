<template>
  <div :class="classes">

    <!-- //user details -->
    <div class="h-1/5 flex w-full justify-center items-center">
      <div class="flex w-full justify-center items-center user-info px-2 py-2 gap-2">
        <div class="rounded-full text-#79242F mx-auto bg-white flex p-2 justify-center items-center text-2xl text-darkBrown"><i class="fa-solid fa-user"></i></div>
        <div class="mx-auto text-white flex flex-col gap-1">
          <div class="text-12">Gamma Spark Updated</div>
          <div class="text-10">sammyfish007@gmail.com</div>
        </div>
      </div>
    </div>

    <!-- //links -->
    <div class="h-4/5 flex flex-col justify-between gap-50 overflow-y-scroll">
      <div class="flex flex-col gap-13">
        <div class="flex flex-col gap-2">
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4 pl-4"><img src="@/assets/globe.png" alt="Image Description" class="w-6"> Get Started</div>
          <div class="text-darkBrown gap-2 text-5 flex items-center pl-11 border-left font-extrabold cursor-pointer"><img src="@/assets/dashboard.png" alt="Image Description" class="w-6"> Dashboard</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-navTitle gap-2 text-5 flex items-center pl-4 font-extrabold">PAYMENTS</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/transactions.png" alt="Image Description" class="w-6"> Transactions</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/people.png" alt="Image Description" class="w-6"> People</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/settlements.png" alt="Image Description" class="w-6"> Settlements</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/payout.png" alt="Image Description" class="w-6"> Payout</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/tower.png" alt="Image Description" class="w-6"> VNUBANs</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/bank.png" alt="Image Description" class="w-6"> Subaccounts</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/note.png" alt="Image Description" class="w-6"> DD Mandates</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-navTitle gap-2 text-5 flex items-center pl-4 font-extrabold">OTHERS</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/audit.png" alt="Image Description" class="w-6"> Audit Trails</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/teams.png" alt="Image Description" class="w-6"> Teams</div>
          <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/code.png" alt="Image Description" class="w-6"> Development</div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/settings.png" alt="Image Description" class="w-6"> Settings</div>
        <div class="text-lightBlack font-medium cursor-pointer gap-2 text-5 flex items-center pl-4"><img src="@/assets/logout.png" alt="Image Description" class="w-6"> Log Out</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      classes: "bg-sidebar min-h-screen hidden md:block h-full px-5 py-7 flex flex-col h-screen gap-5",
    };
  },
};
</script>

<style scoped>
.bg-sidebar {
  background: linear-gradient(241.47deg, rgba(204, 255, 250, 0.25) -2.96%, rgba(255, 252, 245, 0.25) 44.27%, rgba(255, 229, 233, 0.25) 89.58%),
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
}
.user-info {
  background: #79242F;
  gap: 10px;
  border-radius: 6px;
}
.border-left {
  border-left: 5px solid #79242F;
}
</style>
