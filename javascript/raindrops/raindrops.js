//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RAIN_MAPPING = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
};

export const convert = num => Object.entries(RAIN_MAPPING)
  .reduce((acc, [factor, rainDrop]) => num % +factor ? acc : acc + rainDrop, '') || `${num}`;

