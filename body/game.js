import { hasWon } from "./has-won";
export class Game {
  board = Array(9).fill(null);
  player = null;
  status = null;

  move(cell) {
    if (this.status !== "PLAYER_TURN") return;
    if (this.board[cell] !== null) return;

    this.board[cell] = this.player;

    if (hasWon(this.board, this.player)) {
      this.status = "WON";
      return;
    }

    if (this.board.every(value => value !== null)) {
      this.status = "DRAW";
      return;
    }

    this.status = "PLAYER_TURN";
    this.player = this.player === 0 ? 1 : 0;
  }

  start() {
    this.status = "PLAYER_TURN";
    this.player = 0;
    this.board = Array(9).fill(null);
  }
}
