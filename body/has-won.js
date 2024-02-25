export function hasWon({ board, player }) {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of combos) {
    const matched = combo.reduce((acc, pos) => acc && board[pos] === player, true);
    if (matched) return true;
  }

  return false;
}
