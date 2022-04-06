import { createStore } from "vuex";
import categoriesModule from "./modules/categories";
import customerModule from "./modules/customer";
import booksModule from "./modules/books";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    categoriesModule,
    customerModule,
    booksModule,
  },
});
