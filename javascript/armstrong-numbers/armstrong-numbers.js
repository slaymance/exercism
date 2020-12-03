//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = num => [...`${num}`]
  .reduce((sum, digit, _, { length }) => sum + digit ** length, 0) === num;
