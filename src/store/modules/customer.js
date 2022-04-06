import api from "../../api/customers";

const namespaced = true;

const state = function () {
  return {
    customers: {},
  };
};

const actions = {
  createUser({ commit }, data) {
    api.createUser(data).then((result) => {
      commit("success", result.data);
      document.getElementById("respuesta").classList.remove("d-none");
    });
  },
};

const mutations = {
  success(state, register) {
    console.log(register);
    state.customers = register;
  },
};

export default {
  namespaced,
  state,
  actions,
  mutations,
};
