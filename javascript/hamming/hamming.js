//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (str1, str2) => {
  if (!str1.length && str2.length) throw new Error('left strand must not be empty');
  if (str1.length && !str2.length) throw new Error('right strand must not be empty');
  if (str1.length !== str2.length) throw new Error('left and right strands must be of equal length');

  return [...str1].reduce((acc, cur, i) => cur === str2[i] ? acc : acc + 1, 0);
};
