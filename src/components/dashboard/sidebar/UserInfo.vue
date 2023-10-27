<template>
    <div :class="classes">
      <div class="flex w-full justify-center items-center user-info px-2 py-2 gap-2 min-h-70">
        <div class="rounded-full text-#79242F mx-auto bg-white flex p-2 justify-center items-center text-2xl text-darkBrown"><i class="fa-solid fa-user"></i></div>
        <div class="mx-auto text-white flex flex-col gap-1">
          <div class="text-12">Gamma Spark Updated</div>
          <div class="text-10">sammyfish007@gmail.com</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: 'UserInfo',
data() {
    return {
    classes: "h-1/5 flex w-full justify-center items-center",
    };
},
};
</script>
 