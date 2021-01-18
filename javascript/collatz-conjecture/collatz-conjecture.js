/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const calculateSteps = n =>
  +(n !== 1) && 1 + calculateSteps(n & 1 ? 3 * n + 1 : n / 2);

export const steps = n => {
  if (n <= 0) throw new Error('Only positive numbers are allowed');
  return calculateSteps(n);
};
