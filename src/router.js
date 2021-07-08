/** @format */

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Honme", component: () => import("../src/views/Home") },
  {
    path: "/about",
    name: "About",
    component: () => import("../src/views/About"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
