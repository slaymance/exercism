/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const cipher = text => {
  const normalized = text.toLowerCase().replace(/\W/g, '');
  const size = Math.ceil(Math.sqrt(normalized.length));
  const segments = normalized
    .match(new RegExp(`.{1,${size || 1}}`, 'g'))
    ?.map(str => str.padEnd(size, ' '));

  return Array
    .from(Array(size), (_, col) => segments.map((_, row, src) => src[row][col]).join(''))
    .join(' ');
};

/**
 * The below code is only used to make the tests pass.
 */
export class Crypto {
  constructor(text) {
    this.ciphertext = cipher(text);
  }
}
