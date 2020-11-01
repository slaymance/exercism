//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * This solution splits the phrase on space and - delimiters then creates an acronym based on the first occurrence of
 * an alphabetical character in each string.
 */
export const parse = phrase => phrase
  .split(/[\s-]+/)
  .reduce((acronym, word) => acronym + word.match(/[A-Za-z]/)[0], '')
  .toUpperCase();
