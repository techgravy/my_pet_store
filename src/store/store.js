import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    addToFavorites(state, payload) {
      state.favorites.push(payload);
    },
    addToFavorites(state, payload) {
      if (state.favorites.indexOf(payload) <= -1) {
        state.favorites.push(payload);
      }
    },
    removeFromFavorites(state, payload) {
      state.favorites.splice(state.favorites.indexOf(payload), 1);
    },
    removeFromFavorites({ commit }, payload) {
      commit("removeFromFavorites", payload);
    }
  },
  actions: {
    addToFavorites({ commit }, payload) {
      commit("addToFavorites", payload);
    }
  }
});
