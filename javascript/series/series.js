/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper functions for clarity
const containsNonDigits = string => /\D/.test(string);

export class Series {
  #digits;

  constructor(series = '') {
    if (containsNonDigits(series)) throw new Error('Digits input must only contain digits');
    this.#digits = [...series].map(Number);
  }

  get digits() {
    return this.#digits;
  }

  slices(size) {
    if (!this.digits.length) throw new Error('series cannot be empty');
    if (size > this.digits.length) throw new Error('slice length cannot be greater than series length');
    if (size === 0) throw new Error('slice length cannot be zero');
    if (size < 0) throw new Error('slice length cannot be negative');
    return Array.from(Array(this.digits.length - size + 1), (_, i) => this.digits.slice(i, i + size));
  }
}
