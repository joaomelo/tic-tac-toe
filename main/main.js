import { createGame } from "@body";
import { createRouter } from "@control";
import "@joaomelo/reset";
import "@joaomelo/tokens";
import { name, version } from "@main/../package.json";
import { createApp, reactive } from "vue";

import App from "./app.vue";

export function initApp(elementId) {
  console.info(`${name} v${version}`);

  const app = createApp(App);

  const router = createRouter();
  app.use(router);

  const game = createGame();
  const state = reactive({ game, router });
  window.$state = state;
  app.provide("state", state);

  app.mount(elementId);
}
