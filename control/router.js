import { createRouter as createVueRouter, createWebHistory } from "vue-router";

import { routePlay } from "./play";

export function createRouter() {
  return createVueRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: routePlay.path },
      routePlay,
      { path: "/:pathMatch(.*)*", redirect: routePlay.path },
    ],
  });
}
