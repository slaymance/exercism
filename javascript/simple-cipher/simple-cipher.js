//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ASCII_START = 97;
const ASCII_END = 122;
const ASCII_LENGTH = ASCII_END - ASCII_START + 1;

export class Cipher {
  #key
  #keyShift

  /**
   * #keyShift is an array of the numerical values which represent shifts based on the key
   * e.g. a = 0, b = 1, c = 2, etc.
   */
  constructor(key = Cipher.generateRandomKey()) {
    this.#key = key;
    this.#keyShift = [...key].map(char => char.toLowerCase().charCodeAt(0) - ASCII_START);
  }

  /**
   * Calculates each character's shift based on the key and interprets its ascii value
   * Wraps to first character of key if text is longer than key
   */
  encode([...chars]) {
    return chars.map((char, i) => String.fromCharCode(
      ((char.charCodeAt(0) - ASCII_START) + (this.#keyShift[i % this.#keyShift.length])) % ASCII_LENGTH + ASCII_START)
    ).join('');
  }

  // Similar to encode, but subtracts the shift for each character based on the key
  decode([...chars]) {
    return chars.map((char, i) => String.fromCharCode(
      ((char.charCodeAt(0) - ASCII_START) - (this.#keyShift[i % this.#keyShift.length]) + ASCII_LENGTH) % ASCII_LENGTH + ASCII_START)
    ).join('');
  }

  static generateRandomKey() {
    return [...Array(100)].map(() => String.fromCharCode(Math.floor(Math.random() * ASCII_LENGTH) + ASCII_START)).join('');
  }

  get key() {
    return this.#key;
  }
}
