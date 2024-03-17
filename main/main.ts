import { createGame } from "@body";
// import { createRouter } from "@control";
// import { extract, match } from "@joaomelo/i18n";
// import { name, version } from "@main/../package.json";
// import { messages } from "@view";
// import { createApp, reactive } from "vue";
import "@lib"; // styles

// import App from "./app.vue";

export function initApp(elementId: string) {
  // console.info(`${name} v${version}`);
  console.log(elementId);

  // const app = createApp(App);

  const game = createGame();
  console.log({ game });

  // const router = createRouter();
  // app.use(router);

  // const i18n = {
  //   locale: match(navigator.language, extract(messages)),
  //   messages,
  // };

  // const state = reactive({ game, i18n, router });
  // window.$state = state;
  // app.provide("state", state);

  // app.mount(elementId);
}
