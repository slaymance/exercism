//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions for clarity
const containsNonDigits = string => /\D/.test(string);

export class Series {
  #digits;

  constructor(digits = '') {
    if (containsNonDigits(digits)) throw new Error('Series must contain only digits.');
    this.#digits = [...digits].map(Number);
  }

  get digits() {
    return this.#digits;
  }

  slices(length = 0) {
    if (length > this.digits.length) throw new Error('Slice size is too big.');
    return Array.from(Array(this.digits.length - length + 1), (_, i) => this.digits.slice(i, i + length))
  }
}
