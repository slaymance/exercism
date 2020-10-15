//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const calculateSteps = (n, stepCount = 0) =>
  n === 1 ? stepCount : calculateSteps(n & 1 ? 3 * n + 1 : n / 2, ++stepCount);

export const steps = n => {
  if (n <= 0) throw new Error('Only positive numbers are allowed');

  return calculateSteps(n);
};