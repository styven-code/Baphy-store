import api from "../../api/books";

const namespaced = true;

const state = function () {
  return {
    books: [],
  };
};

const actions = {
  getbooks({ commit }) {
    try {
      api.display().then((result) => {
        commit("setbooks", result.data);
      });
    } catch (error) {
      console.log(error);
    }
  },
  createBook({ commit }, data) {
    api.create(data).then((result) => {
      commit("success", result.data);
      document.getElementById("respuesta").classList.remove("d-none");
    });
  },
};

const mutations = {
  setbooks(state, books) {
    state.books = books;
  },

  success(state, create) {
    console.log(create);
    state.customers = create;
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
