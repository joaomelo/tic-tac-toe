export class Game {
  board;
  player;
  status;

  constructor() {
    this.start();
  }

  move(cell) {
    this.board[cell] = this.player;
    this.player = this.player === 0 ? 1 : 0;
  }

  start() {
    this.status = "PLAYER_TURN";
    this.player = 0;
    this.board = Array(9).fill(null);
  }
}
