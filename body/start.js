export function start() {
  return {
    board: Array(9).fill(null),
    player: 0,
    status: "PLAYER_TURN",
  };
}
