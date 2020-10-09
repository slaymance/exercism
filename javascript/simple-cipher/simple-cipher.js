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

  constructor(key = 'aaaaaaaaaa') {
    this.#key = key;
    this.#keyShift = [...key].map(char => char.toLowerCase().charCodeAt(0) - ASCII_START);
  }

  encode([...chars]) {
    return chars.map((char, i) => String.fromCharCode(
      ((char.charCodeAt(0) - ASCII_START) + (this.#keyShift[i % this.#keyShift.length])) % ASCII_LENGTH + ASCII_START)
    ).join('');
  }

  decode([...chars]) {
    return chars.map((char, i) => String.fromCharCode(
      ((char.charCodeAt(0) - ASCII_START) - (this.#keyShift[i % this.#keyShift.length]) + ASCII_LENGTH) % ASCII_LENGTH + ASCII_START)
    ).join('');
  }

  get key() {
    return this.#key;
  }
}
