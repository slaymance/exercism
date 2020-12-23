/**
 * As with all language parsing problems, it comes down to arcane regular expressions.
 * ?<! is a negative lookbehind, so (?<!q)u will only match a 'u' that is not preceded by a 'q'.
 * ?<= is a positive lookbehind, so (?<=\w)y will only match a 'y' that is preceded by another letter.
 * 
 * This solution would not work for any words that have an 'xr' occurring after the start of the word but before any
 * other vowels occur. Luckily, I don't think any such words exist. I also don't deal with capitalization and
 * punctuation.
 * 
 * Also, it's a bit unclear if a word like 'query' would follow rule 3. If that's the case and it should be translated
 * to 'ueryqay', then the u regex would be changed to (?<!\wq)u to make sure a consonant sound precedes 'qu'.
 */
const firstVowelIndex = string => string.search(/[aeio]|(?<!q)u|(?<=\w)y|xr|yt/i);
const splitAtIndex = (string, index) => string.slice(index) + string.slice(0, index);

export const translate = string => string
  .split(' ')
  .map(word => `${splitAtIndex(word, firstVowelIndex(word))  }ay`)
  .join(' ');
