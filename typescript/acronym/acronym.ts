/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

/**
 * This solution splits the phrase on space and - delimiters then creates an acronym based on the first occurrence of
 * an alphabetical character in each string.
 */
export const parse = (phrase: string): string =>
  phrase
    .split(/[\s-]+/)
    .flatMap((word) => word.match(/[A-Z][a-z]+/g) ?? word)
    .reduce((acronym, word) => acronym + word[0], '')
    .toUpperCase();

/**
 * The below code is only used to make the tests pass.
 */
export default class Acronym {
  static parse(phrase: string): string {
    return parse(phrase);
  }
}
