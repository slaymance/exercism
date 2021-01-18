/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export const isArmstrongNumber = num => [...`${num}`]
  .reduce((sum, digit, _, { length }) => sum + digit ** length, 0) === num;
