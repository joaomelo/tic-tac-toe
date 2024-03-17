import type { Game } from "./game";

export function createGame(): Game {
  return {
    board: [null, null, null, null, null, null, null, null, null],
    player: 0,
    status: "PLAYER_TURN",
  };
}
