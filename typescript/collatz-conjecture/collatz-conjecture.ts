/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const calculateSteps = (n: number): number =>
  +(n !== 1) && 1 + calculateSteps(n & 1 ? 3 * n + 1 : n / 2);

const steps = (n: number): number => {
  if (n <= 0) throw new Error('Only positive numbers are allowed');
  return calculateSteps(n);
};

/**
 * The below code is only used to make the tests pass.
 */
export default class CollatzConjecture {
  static steps = steps;
}
