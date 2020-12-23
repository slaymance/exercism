/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
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

  slices(size = 0) {
    if (size > this.digits.length) throw new Error('Slice size is too big.');
    return Array.from(Array(this.digits.length - size + 1), (_, i) => this.digits.slice(i, i + size));
  }
}
