export function bind({ name, state }) {
  switch (name) {
    case "board": {
      return state.game.board;
    }
    case "status": {
      return state.game.status;
    }
    case "player": {
      return state.game.player;
    }
  }
}
