/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

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

/**
 * I was so preoccupied with whether or not I could do it in one line, I didn't stop to think if I should.
 */
export const annotate = input => input.reduce((result, [...chars], row) => chars.reduce((result, char, col) => (char === MINE && ADJACENTS.map(([rowAdj, colAdj]) => [row + rowAdj, col + colAdj]).forEach(([row, col]) => ![MINE, undefined].includes(result[row]?.[col]) && ~~result[row][col]++)) || result, result), input.map(row => [...row])).map(row => row.join(''));
