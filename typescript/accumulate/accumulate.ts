/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const accumulate = <T, U>(
  [first, ...rest]: T[],
  callback: (el: T) => U
): U[] => [callback(first), ...accumulate(rest, callback)];

export default accumulate;
