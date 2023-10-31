<template>
  <div :class="isDarkMode ? 'bg-darkModeColorLight' : 'bg-white'" class="flex justify-between p-10 h-80 items-center">
    <div :class="isDarkMode ? 'text-white' : 'text-black'" class="phone:text-20 sm-phone-text-16 text-14 flex phone:gap-2 justify-center items-center">
      <div class="menu-wrap hamburger-container flex flex-col items-center justify-center md:hidden">
        <input type="checkbox" class="toggler">
        <div class="hamburger">
          <div :class="!isDarkMode ? 'bg-darkModeColorThick' : 'bg-white'"></div>
        </div>
        <div :class="isDarkMode ? 'bg-darkModeColorThick' : 'bg-white'" class="menu">
          <div>
            <div>
              <ul>
                <li :class="isDarkMode ? 'text-white' : 'text-black'" v-for="(link, index) in pageLinks" :key="index" @click="navigateTo(link.url)">{{ link.title }}</li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
      {{ title }}
    </div>
    <div class="flex items-center justify-center gap-2 phone:gap-5">
      <div :class="isDarkMode ? 'text-liveModeToggleDark' : 'text-liveGreen'" class="flex gap-1 items-center justify-center">
        <i class="fa-solid fa-toggle-off"></i>
        <div class="phone:text-16 sm-phone-text-14 text-10">Live Mode</div>
      </div>
      <div :class="isDarkMode ? 'text-greyBorder' : 'text-darkModeColorThick'" class="cursor-pointer phone:text-24 sm-phone-text-20 text-16" @click="toggleDarkMode">
        <i :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed, defineProps } from 'vue';
  import { useStore } from 'vuex';

  export default {
    name: 'TopMain',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  data() {
    return {
      pageLinks: [
        {
          title: 'Dashboard',
          url: '/',
        },
        {
          title: 'Transactions',
          url: '/',
        },
        {
          title: 'People',
          url: '/',
        },
        {
          title: 'Settlements',
          url: '/',
        },
        {
          title: 'VNUBANS',
          url: '/',
        },
        {
          title: 'Subaccounts',
          url: '/',
        },
        {
          title: 'DD Mandate',
          url: '/',
        },
      ],
    };
  },
  methods: {
    navigateTo(link) {
        this.$router.push(link);
      }
    },
  setup() {
    const store = useStore();

    const isDarkMode = computed(() => store.getters.isDarkMode);

    const toggleDarkMode = () => {
      store.dispatch('toggleMode');
    };

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>

<style>
   .menu-wrap {
    position: relative;
    z-index: 1;
  }
  
  .menu-wrap .toggler {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }
  
  .menu-wrap .hamburger {
    top: 0;
    right: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .menu-wrap .hamburger > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
  }
  
  .menu-wrap .hamburger > div::before,
  .menu-wrap .hamburger > div::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background: inherit;
  }
  
  .menu-wrap .hamburger > div::after {
    top: 10px;
  }
  
  .menu-wrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }
  
  .menu-wrap .toggler:checked + .hamburger > div:before,
  .menu-wrap .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
  }
  
  .menu-wrap .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
  }
  
  .menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
  }
  
  .menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: var(--menu-speed);
  }
  
  .menu-wrap .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition:  opacity 0.4s ease 0.4s;
  }
  
  .menu-wrap .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .menu-wrap .menu > div {
    background: var(--dark-color);
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;
  }
  
  .menu-wrap .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .menu-wrap .menu > div > div > ul > li {
    list-style: none;
    font-size: 1.5rem;
    padding: 1rem;
  }
  
  .menu-wrap .menu > div > div > ul > li > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
  }
</style>
