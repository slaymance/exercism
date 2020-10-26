//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isNumber = n => typeof n === 'number' && !isNaN(n) && isFinite(n);

export const valid = string => {
  const nums = [...string.replace(/\s/g, '')].map(Number);
  return nums.length > 1 &&
    nums.every(isNumber) &&
    !(nums.reduceRight((sum, num, i, src) => sum + num + (!(src.length - i & 1) && num - (num >= 5 && 9))) % 10);
};
