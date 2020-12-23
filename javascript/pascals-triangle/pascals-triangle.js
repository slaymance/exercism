/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const buildNextRow = (lastRow = []) => Array.from(
  Array(lastRow.length + 1),
  (_, i) => lastRow[i - 1] + lastRow[i] || 1
);

export const rows = (numberOfRows = 0, triangle = []) => numberOfRows
  ? rows(numberOfRows - 1, [...triangle, buildNextRow(triangle[triangle.length - 1])])
  : triangle;
