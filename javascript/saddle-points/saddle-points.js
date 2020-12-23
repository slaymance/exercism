/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

// Helper functions for clarity
const lte = second => first => first <= second;
const gte = second => first => first >= second;
const column = (matrix, col) => matrix.map(nums => nums[col]);
const createSaddlePoint = (row, col) => ({ row: row + 1, column: col + 1 });
const isSaddlePoint = (matrix, row, col) =>
  matrix[row].every(lte(matrix[row][col])) && column(matrix, col).every(gte(matrix[row][col]));

/**
 * Lately, when it comes to accumulating values in an array, I've been reaching for .flatMap instead of .reduce. When
 * you're faced with the problem of conditionally adding a value to the accumulated array (which is the case here since
 * we only want values that meet the saddle point criteria), .flatMap makes the code much less cluttered since you don't
 * need to spread the accumulator array and you just return an empty array if the condition isn't met.
 */
export const saddlePoints = matrix => matrix.flatMap((nums, row) => nums.flatMap((_, col) =>
  isSaddlePoint(matrix, row, col) ? createSaddlePoint(row, col) : []));

/**
 * This is the same solution using .reduce intead of .flatMap.
 */
export const saddlePointsAltA = matrix => matrix.reduce((result, nums, row) => nums.reduce((points, _, col) =>
  isSaddlePoint(matrix, row, col) ? [...points, createSaddlePoint(row, col)] : points, result), []);

/**
 * Reduce solution using .concat instead of spreading (...) the points accumulator array.
 */
export const saddlePointsAltB = matrix => matrix.reduce((result, nums, row) => nums.reduce((points, _, col) =>
  points.concat(isSaddlePoint(matrix, row, col) ? createSaddlePoint(row, col) : []), result), []);