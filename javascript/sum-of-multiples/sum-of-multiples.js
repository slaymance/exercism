//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (factors, max) => [...Array(max).keys()]
  .reduce((multipleSum, multiple) => multipleSum + (factors.some(factor => multiple % factor === 0) && multiple), 0);
