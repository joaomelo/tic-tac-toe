import { createRouter, createWebHistory } from "vue-router";

import { routePlay } from "../play";

export class Helmsman {
  router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: routePlay.path },
      routePlay,
      { path: "/:pathMatch(.*)*", redirect: routePlay.path },
    ],
  });

  install(app) {
    app.use(this.router);
  }

  play() {
    this.router.push({ name: routePlay.name });
  }
}
