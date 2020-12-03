//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = num => `${num}`
  .split('')
  .reduce((sum, digit, _, src) => sum + digit ** src.length, 0) === num;
