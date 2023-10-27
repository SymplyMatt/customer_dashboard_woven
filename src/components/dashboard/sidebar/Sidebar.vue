<template>
  <div :class="classes">
    <div class="flex w-full justify-center items-center user-info px-5 py-5">
      <div class="rounded-full text-#79242F mx-auto bg-white flex p-2 justify-center items-center text-3xl text-darkBrown"><i class="fa-solid fa-user"></i></div>
      <div class="mx-auto text-white flex flex-col gap-1">
        <div class="text-12">Gamma Spark Updated</div>
        <div class="text-xs">sammyfish007@gmail.com</div>
      </div>
    </div>



    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      classes: "bg-sidebar min-h-screen hidden md:block h-full px-5 py-7",
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
</style>
