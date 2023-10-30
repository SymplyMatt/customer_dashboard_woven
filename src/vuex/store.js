import { createStore } from 'vuex';

const localStorageKey = 'myApp';

const store = createStore({
  state: {
    isDarkMode: localStorage.getItem(localStorageKey) === 'true' || false,
  },
  mutations: {
    toggleMode(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem(localStorageKey, state.isDarkMode);
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
