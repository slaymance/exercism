/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

/**
 * This solution splits the phrase on space and - delimiters then creates an acronym based on the first occurrence of
 * an alphabetical character in each string.
 */
export const parse = phrase => phrase
  .split(/[\s-]+/)
  .reduce((acronym, word) => acronym + word.match(/[A-Za-z]/)[0], '')
  .toUpperCase();
