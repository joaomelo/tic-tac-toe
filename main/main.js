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

  // const i18n = new I18n({ locale: navigator.language, messages });
  // app.use(i18n);

  // const helmsman = new Helmsman();
  // app.use(helmsman);

  const globals = new Globals({
    control,
    game,
  });
  window.$dependencies = globals;
  app.use(globals);

  app.mount(elementId);
}
