/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

// Some helper functions for better clarity
const isNumber = n => typeof n === 'number' && !isNaN(n) && isFinite(n);
const isDivisibleByTen = n => !(n % 10);
const isOdd = n => !!(n & 1);
const luhnReduction = (sum, num, i, { length }) => sum + num + (!isOdd(length - i) && num - (num >= 5 && 9));

export const valid = string => {
  const nums = [...string.replace(/\s/g, '')].map(Number);
  return nums.length > 1 &&
    nums.every(isNumber) &&
    isDivisibleByTen(nums.reduceRight(luhnReduction));
};
