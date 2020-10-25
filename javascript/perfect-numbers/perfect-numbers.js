//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

  const aliquotSum = [...Array(Math.floor(Math.sqrt(num)) + 1).keys()].reduce((sum, val) => num % val === 0 ?
    sum + val + (Math.sqrt(num) !== val && num / val) : sum) - num;
  return aliquotSum > num ? 'abundant' : aliquotSum < num ? 'deficient' : 'perfect';
};
