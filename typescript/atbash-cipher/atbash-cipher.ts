/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const ASCII_START = 'a'.charCodeAt(0);
const ASCII_END = 'z'.charCodeAt(0);
const CHUNK_SIZE = 5;

const decode = (string: string): string =>
  string
    .replace(/\W/g, '')
    .replace(/[a-z]/g, (char) =>
      String.fromCharCode(ASCII_START + ASCII_END - char.charCodeAt(0))
    );

const encode = (string: string): string =>
  (
    decode(string.toLowerCase()).match(new RegExp(`.{1,${CHUNK_SIZE}}`, 'g')) ??
    []
  ).join(' ');

/**
 * The below code is only used to make the tests pass.
 */
export default class AtbashCipher {
  decode(string: string): string {
    return decode(string);
  }

  encode(string: string): string {
    return encode(string);
  }
}
