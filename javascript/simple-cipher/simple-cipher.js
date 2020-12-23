/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */
const ASCII_START = 97;
const ASCII_END = 122;
const ASCII_LENGTH = ASCII_END - ASCII_START + 1;

export class Cipher {
  static generateRandomKey() {
    return String.fromCharCode(...[...Array(100)].map(() => Math.floor(Math.random() * ASCII_LENGTH) + ASCII_START));
  }

  #key;
  #keyShift;

  /**
   * #keyShift is an array of the numerical values which represent shifts based on the key
   * e.g. a = 0, b = 1, c = 2, etc.
   */
  constructor(key = Cipher.generateRandomKey()) {
    this.#key = key.replace(/[^A-Za-z]/g, '');
    this.#keyShift = [...this.#key].map(char => char.toLowerCase().charCodeAt(0) - ASCII_START);
  }

  /**
   * Calculates each character's shift based on the key and interprets its ascii value
   * Wraps to first character of key if text is longer than key
   */
  encode([...chars]) {
    return String.fromCharCode(...chars.map((char, i) =>
      ((char.charCodeAt(0) - ASCII_START) + (this.#keyShift[i % this.#keyShift.length]))
      % ASCII_LENGTH + ASCII_START))
  }

  /**
   * Similar to encode, but subtracts the shift for each character based on the key
   */
  decode([...chars]) {
    return String.fromCharCode(...chars.map((char, i) =>
      ((char.charCodeAt(0) - ASCII_START) - (this.#keyShift[i % this.#keyShift.length]) + ASCII_LENGTH)
      % ASCII_LENGTH + ASCII_START))
  }

  get key() {
    return this.#key;
  }
}
