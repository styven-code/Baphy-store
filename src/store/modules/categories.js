import api from "../../api/categories";

const namespaced = true;

const state = function () {
  return {
    categories: [],
  };
};

const actions = {
  getcategories({ commit }) {
    try {
      api.display().then((result) => {
        commit("setcategories", result.data);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setcategories(state, categories) {
    state.categories = categories;
  },
};

const getters = {};

export default {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
