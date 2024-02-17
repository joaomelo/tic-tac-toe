import { reactive } from "vue";

export class Control {
  game;

  constructor(game) {
    this.game = reactive(game);
  }

  // returns reactive data pointers to be used in the ui
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
      case "ready": {
        this.game.start();
        break;
      }

      case "attempt": {
        this.game.move(payload);
        break;
      }
    }
  }
}
