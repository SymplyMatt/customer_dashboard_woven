<template>
    <div class="flex justify-between  p-5 h-80 bg-white items-center">
        <div class="text-20">{{ title }}</div>
        <div class="flex gap-1 text-liveGreen">
        <div class=""><i class="fa-solid fa-toggle-off"></i></div>
        <div class="">Live</div>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'TopMain',
    props: {
        title: {
        type: String,
        required: true
        }
    },
  }
  </script>
                  
  