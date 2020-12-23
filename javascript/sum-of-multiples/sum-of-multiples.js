/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export const sum = (factors, max) => [...Array(max).keys()]
  .reduce((multipleSum, multiple) => multipleSum + (factors.some(factor => multiple % factor === 0) && multiple), 0);
