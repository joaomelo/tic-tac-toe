import { reactive } from "vue";

import { Helmsman } from "./helmsman";

export class Control {
  game;
  helmsman;

  constructor(game) {
    this.game = reactive(game);
    this.helmsman = new Helmsman();
  }

  // returns pointers to reactive data to be used in the ui
  bind(name) {
    switch (name) {
      case "board": {
        return this.game.board;
      }
      case "status": {
        return this.game.status;
      }
      case "player": {
        return this.game.player;
      }
    }
  }

  // process ui events
  handle({ name, payload }) {
    switch (name) {
      case "app-ready": {
        this.game.start();
        this.helmsman.play();
        break;
      }

      case "move": {
        this.game.move(payload);
        break;
      }
    }
  }

  install(app) {
    this.helmsman.install(app);
  }
}
