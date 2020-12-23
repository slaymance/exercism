/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

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
