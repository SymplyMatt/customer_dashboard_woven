<template>
    <div
      :class="isActive ? 'text-darkBrown font-extrabold pl-11 border-left' : 'text-lightBlack pl-4'"
      class="font-medium gap-2 text-5 flex items-center justify-between pr-4 cursor-pointer"
    >  
        <router-link :to="item.path.toLowerCase()" v-if="item">
            <div class="font-medium cursor-pointer gap-2 text-5 flex items-center">
                <img :src="getImageSrc()" alt="Image Description" class="w-6">
                {{ item.text }}
            </div>
        </router-link>
        <i class="fa-solid fa-angle-right cursor-pointer" v-if="item.hasSubMenu"></i>
    </div>
</template>

<script>
    export default {
    name: 'Link',
    props: {
        item: {
        type: Object,
        required: true
        }
    },
    data() {
        return {
        currentPath: this.$route.path.toLowerCase()
        };
    },
    computed: {
        isActive() {
        return this.currentPath.startsWith(this.item.path.toLowerCase());
        }
    },
    watch: {
        '$route' (to, from) {
        this.currentPath = to.path.toLowerCase();
        }
    },
    methods: {
        getImageSrc() {
        if (this.isActive) {
            return require(`@/assets/active-${this.item.icon}`);
        } else {
            return require(`@/assets/${this.item.icon}`);
        }
        }
    }
    };
</script>

<style>
    .border-left {
        border-left: 5px solid #79242F;
    }
</style>
