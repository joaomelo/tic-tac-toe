import "@joaomelo/reset";
import "@joaomelo/tokens";
import { name, version } from "@main/../package.json";
import { createApp } from "vue";

import App from "./app.vue";

export function initApp(elementId) {
  console.info(`${name} v${version}`);

  const app = createApp(App);

  // const i18n = new I18n({ locale: navigator.language, messages });
  // app.use(i18n);

  // const helmsman = new Helmsman();
  // app.use(helmsman);

  // const dependencies = new Dependencies({
  //   artifacts,
  //   gatekeeper,
  //   helmsman,
  //   tags,
  // });
  // window.$dependencies = dependencies;
  // app.use(dependencies);

  app.mount(elementId);
}
