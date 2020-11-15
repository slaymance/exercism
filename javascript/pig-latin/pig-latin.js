/**
 * As with all language parsing problems, it comes down to arcane regular expressions.
 * ?<! is a negative lookbehind, so (?<!q)u will only match a 'u' that is not preceded by a 'q'.
 * ?<= is a positive lookbehind, so (?<=[a-z])y will only match a 'y' that is preceded by another letter.
 * 
 * This solution would not work for any words that have an 'xr' occurring after the start of the word but before any
 * other vowels occur. Luckily, I don't think any such words exist. I also don't deal with capitalization and
 * punctuation.
 */
const VOWELS = ['[aeio]', '(?<!q)u', '(?<=[a-z])y', 'xr', 'yt'];

const firstVowelIndex = string => string.search(new RegExp(VOWELS.join('|'), 'i'));
const splitAtIndex = (string, index) => string.slice(index) + string.slice(0, index);

export const translate = string => string
  .split(' ')
  .map(word => splitAtIndex(word, firstVowelIndex(word)) + 'ay')
  .join(' ');
