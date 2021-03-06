/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const UPPER_ASCII_START = 'A'.charCodeAt();
const LOWER_ASCII_START = 'a'.charCodeAt();
const NUMBER_OF_LETTERS = 26;

const transpose = shift => char => {
  const asciiCode = char.charCodeAt();
  const asciiStart = asciiCode < LOWER_ASCII_START ? UPPER_ASCII_START : LOWER_ASCII_START;
  return String.fromCharCode((asciiCode - asciiStart + shift) % NUMBER_OF_LETTERS + asciiStart);
};

const rotate = (string, shift) => string.replace(/[a-z]/gi, transpose(shift));

/**
 * The below code is only used to make the tests pass.
 */
export class RotationalCipher {
  static rotate = rotate;
}
