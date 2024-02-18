import { Game } from "@body";
import { Control } from "@control";
import { Globals } from "@joaomelo/globals";
import "@joaomelo/reset";
import "@joaomelo/tokens";
import { name, version } from "@main/../package.json";
import { createApp } from "vue";

import App from "./app.vue";

export function initApp(elementId) {
  console.info(`${name} v${version}`);

  const app = createApp(App);

  const game = new Game();
  const control = new Control(game);
  app.use(control);

  const globals = new Globals({ control, game });
  window.$globals = globals;
  app.use(globals);

  app.mount(elementId);
}
