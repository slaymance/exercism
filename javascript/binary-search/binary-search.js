//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * When recursing the right side of an array, be sure to add the midpoint to offset the change in indeces.
 */
export const find = (array, value) => {
  if (!array.length) throw new Error('Value not in array');

  const midpoint = array.length / 2 | 0;
  if (array[midpoint] > value) return find(array.slice(0, midpoint), value);
  if (array[midpoint] < value) return find(array.slice(midpoint + 1), value) + midpoint + 1;
  return midpoint;
};
