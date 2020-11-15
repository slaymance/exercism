//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * As with all language parsing problems, it comes down to arcane regular expressions.
 * ?<! is a negative lookbehind, so (?<!q)u will only match a 'u' that is not preceded by a 'q'.
 * ?<= is a positive lookbehind, so (?<=[a-z])y will only match a 'y' that is preceded by another letter.
 * For startsWithVowel, I start each vowel in the regular expression with ^ which tests if the vowel occurs at the
 * beginning of the string.
 */
const VOWELS = ['[aeio]', '(?<!q)u', 'xr', 'yt', '(?<=[a-z])y'];

const startsWithVowel = string => new RegExp(`^${VOWELS.join('|^')}`, 'i').test(string);
const firstVowelIndex = string => string.search(new RegExp(VOWELS.join('|'), 'i'));
const splitAtIndex = (string, index) => string.slice(index) + string.slice(0, index);

export const translate = string => string
  .split(' ')
  .map(word => (startsWithVowel(word) ? word : splitAtIndex(word, firstVowelIndex(word))) + 'ay')
  .join(' ');

