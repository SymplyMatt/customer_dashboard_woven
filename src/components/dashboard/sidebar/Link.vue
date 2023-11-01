<template>
    <div
        :class="computedClasses"
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
import { useStore } from 'vuex';

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
        },
        computedClasses() {
            const store = useStore();
            return {
                'text-darkBrown': this.isActive && store.getters.isDarkMode,
                'text-lightBlack': !this.isActive && !store.getters.isDarkMode,
                'text-white': !this.isActive && store.getters.isDarkMode,
                'font-extrabold': this.isActive && store.getters.isDarkMode,
                'font-medium': !this.isActive || !store.getters.isDarkMode,
                'pl-11': this.isActive && store.getters.isDarkMode,
                'pl-4': !this.isActive || !store.getters.isDarkMode,
                'border-left': this.isActive,
            };
        },
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
