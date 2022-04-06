import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue";
import categories from "../views/Categories.vue";
import books from "../views/Books.vue";
import book from "../views/Book.vue";
import register from "../views/Register.vue";
import login from "../views/Login.vue";
import user from "../views/User.vue";

import create from "../components/books/Create.vue";
import update from "../components/books/Update.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/categorias",
    name: "categories",
    component: categories,
  },
  {
    path: "/books",
    name: "books",
    component: books,
  },
  {
    path: "/book/:id",
    name: "book",
    component: book,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/user",
    name: "user",
    component: user,
  },
  {
    path: "/create-book",
    name: "create",
    component: create,
  },
  {
    path: "/update-book/:id",
    name: "update",
    component: update,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
