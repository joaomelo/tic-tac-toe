import { move, start } from "@body";
import { toRaw } from "vue";

import { push } from "./push";

export function handle({ name, payload, state }) {
  switch (name) {
    case "app-ready": {
      state.game = start();
      push({ name: "play", router: state.router });
      break;
    }

    case "move": {
      state.game = move({ cell: payload, game: toRaw(state.game) });
      break;
    }
  }
}
