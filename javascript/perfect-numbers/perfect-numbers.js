/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

/**
 * Helper functions for argument validation.
 */
const isFiniteNumber = n => typeof n === 'number' && isFinite(n);
const isNaturalNumber = n => isFiniteNumber(n) && n > 0;

/**
 * A little confusing but pretty efficient since I'm only iterating Math.floor(Math.sqrt(num) + 1) times.
 * So for 33550337 I'm iterating 5,793 times instead of 33,550,337 times.
 */
export const classify = num => {
  if (!isNaturalNumber(num)) throw new Error('Classification is only possible for natural numbers.');

  const aliquotSum = [...Array(Math.floor(Math.sqrt(num)) + 1).keys()]
    .reduce((sum, val) => sum + (num % val === 0 && val + (Math.sqrt(num) !== val && num / val))) - num;
  return aliquotSum > num ? 'abundant' : aliquotSum < num ? 'deficient' : 'perfect';
};

/**
 * Here's a more readable version so people can learn from it.
 */
const isFactor = num => val => num % val === 0;
const isSqrt = num => val => Math.sqrt(num) === val;

export const classifyReadable = num => {
  if (!isNaturalNumber(num)) throw new Error('Classification is only possible for natural numbers.');

  const isFactorOfNum = isFactor(num);
  const isSqrtOfNum = isSqrt(num);

  const numsUpToSqrt = [...Array(Math.floor(Math.sqrt(num)) + 1).keys()];
  const aliquotSum = numsUpToSqrt.reduce((sum, val) => {
    if (isFactorOfNum(val)) {
      if (isSqrtOfNum(val)) return sum + val;
      return sum + val + num / val;
    }
    return sum;

  }) - num; // We subtract num here since the algorith adds 1 and num together

  if (aliquotSum > num) return 'abundant';
  else if (aliquotSum < num) return 'deficient';
  return 'perfect';
};