//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MINE = '*';
const ADJACENTS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];

const parseMatrix = board => board.map(row => [...row]);

export const annotate = input => input
  .reduce((result, [...chars], row) => chars.reduce((result, char, col) => {
    if (char === MINE) {
      ADJACENTS.forEach(([rowAdj, colAdj]) => {
        const [numRow, numCol] = [row + rowAdj, col + colAdj];
        if (![MINE, undefined].includes(result[numRow]?.[numCol]))
          result[numRow][numCol] = ~~result[numRow][numCol] + 1;
      });
    }

    return result;
  }, result), parseMatrix(input))
  .map(row => row.join(''));
