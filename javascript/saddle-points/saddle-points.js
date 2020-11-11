//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions for clarity
const maxIndeces = numbers => {
  const max = Math.max(...numbers);
  return numbers.flatMap((num, i) => num === max ? i : []);
};
const createSaddlePoint = (col, row) => ({ column: col + 1, row: row + 1 });

/**
 * Lately, when it comes to accumulating values in an array, I've been reaching for .flatMap instead of .reduce. When
 * you're faced with the problem of conditionally adding a value to the accumulated array (which is the case here since
 * we only want values that meet the saddle point criteria), .flatMap makes the code much less cluttered since you don't
 * need to spread the accumulator array and you just return an empty array if the condition isn't meant.
 */
export const saddlePoints = matrix => matrix.flatMap((nums, row) => maxIndeces(nums)
  .flatMap(col => matrix.every(nums2 => nums2[col] >= nums[col]) ? createSaddlePoint(col, row) : []));
