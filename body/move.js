import { hasWon } from "./has-won";

export function move({ cell, game }) {
  if (game.status !== "PLAYER_TURN") return game;
  if (game.board[cell] !== null) return game;

  const newGame = structuredClone(game);

  newGame.board[cell] = newGame.player;
  if (hasWon({ board: newGame.board, player: newGame.player })) {
    newGame.status = "WON";
    return newGame;
  }

  if (newGame.board.every(value => value !== null)) {
    newGame.status = "DRAW";
    return newGame;
  }

  newGame.status = "PLAYER_TURN";
  newGame.player = newGame.player === 0 ? 1 : 0;
  return newGame;
}
