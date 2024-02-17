export class Game {
  board = Array(9).fill(null);
  player = null;
  status = null;

  move(cell) {
    if (this.board[cell] !== null) return;

    this.board[cell] = this.player;
    this.player = this.player === 0 ? 1 : 0;
  }

  start() {
    this.status = "PLAYER_TURN";
    this.player = 0;
    this.board = Array(9).fill(null);
  }
}
