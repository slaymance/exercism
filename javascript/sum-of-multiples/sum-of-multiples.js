/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export const sum = (factors, max) => [...Array(max).keys()]
  .reduce((multipleSum, multiple) => multipleSum + (factors.some(factor => multiple % factor === 0) && multiple), 0);
