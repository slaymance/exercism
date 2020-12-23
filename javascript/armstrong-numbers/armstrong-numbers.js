/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export const isArmstrongNumber = num => [...`${num}`]
  .reduce((sum, digit, _, { length }) => sum + digit ** length, 0) === num;
