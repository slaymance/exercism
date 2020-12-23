/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const UPPER_ASCII_START = 'A'.charCodeAt();
const LOWER_ASCII_START = 'a'.charCodeAt();
const NUMBER_OF_LETTERS = 26;

const transpose = shift => char => {
  const asciiCode = char.charCodeAt();
  const asciiStart = asciiCode < LOWER_ASCII_START ? UPPER_ASCII_START : LOWER_ASCII_START;
  return String.fromCharCode((asciiCode - asciiStart + shift) % NUMBER_OF_LETTERS + asciiStart);
};

export const rotate = (string, shift) => string.replace(/[a-z]/gi, transpose(shift));
