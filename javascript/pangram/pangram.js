/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const SIZE_OF_ENGLISH_ALPHABET = 26;

export const isPangram = letters => letters.replace(/([a-z])(?=.*\1)|[^a-z]/gi, '').length === SIZE_OF_ENGLISH_ALPHABET;
