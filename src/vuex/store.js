import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isDarkMode: false,
  },
  mutations: {
    toggleMode(state) {
      state.isDarkMode = !state.isDarkMode;
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
