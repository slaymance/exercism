/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const SIZE_OF_ENGLISH_ALPHABET = 26;

export const isPangram = letters => letters.replace(/([a-z])(?=.*\1)|[^a-z]/gi, '').length === SIZE_OF_ENGLISH_ALPHABET;
