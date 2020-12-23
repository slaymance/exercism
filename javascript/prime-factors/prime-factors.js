/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

// Helper function for clarity
const isFactor = num => factor => num % factor === 0;

/**
 * We don't actually need to check if a factor is a prime number. As long as we start our iteration at 2 (the lowest
 * prime number), then the first factor of the number we find is guaranteed to be a prime number.
 */
export const primeFactors = num => {
  if (num < 2) return [];

  const isFactorOfNum = isFactor(num);
  for (let i = 2; i <= num; i++) {
    if (isFactorOfNum(i)) return [i].concat(primeFactors(num / i));
  }
};