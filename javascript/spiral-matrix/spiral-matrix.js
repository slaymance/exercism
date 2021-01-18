/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const ofSize = (size = 0) => {
  const matrix = Array.from(Array(size), () => []);
  let num = 1;
  let min = 0;
  let max = size - 1;
  let row = 0;
  let col = 0;

  while (num <= size ** 2) {
    while (col < max) { matrix[row][col++] = num++; }
    while (row < max) { matrix[row++][col] = num++; }
    while (col > min) { matrix[row][col--] = num++; }
    min++;
    while (row > min) { matrix[row--][col] = num++; }
    max--;
    if (num === size ** 2) matrix[row][col] = num++;
  }

  return matrix;
};

/**
 * The below code is only used to make the tests pass.
 */
export class SpiralMatrix {
  static ofSize(...args) {
    return ofSize(...args);
  }
}
