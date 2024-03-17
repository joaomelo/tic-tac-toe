export interface Game {
  board: Board;
  player: Player;
  status: Status;
}

export type Status = "DRAW" | "PLAYER_TURN" | "WON";
export type Player = 0 | 1;
export type Cell = 0 | 1 | null;
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
