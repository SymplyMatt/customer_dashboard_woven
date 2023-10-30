import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isDarkMode: localStorage.getItem('mode') ?? false,
  },
  mutations: {
    toggleMode(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('mode', state.isDarkMode);
    },
  },
  actions: {
    toggleMode({ commit }) {
      commit('toggleMode');
    },
  },
  getters: {
    isDarkMode: (state) => state.isDarkMode,
  },
});

export default store;
