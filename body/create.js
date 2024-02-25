export function createGame() {
  return {
    board: Array(9).fill(null),
    player: null,
    status: null,
  };
}
