//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions for clarity
const containsNonDigits = string => /\D/.test(string);
const makeInteger = numString => +numString;
const range = max => [...Array(max + 1).keys()]; // Creates array of integers from 0 to max inclusive

export class Series {
  #digits;

  constructor(digits = '') {
    if (containsNonDigits(digits)) throw new Error('Series must contain only digits.');
    this.#digits = digits.split``.map(makeInteger);
  }

  get digits() {
    return this.#digits;
  }

  slices(length = 0) {
    if (length > this.digits.length) throw new Error('Slice size is too big.');
    return range(this.digits.length - length).map(i => this.digits.slice(i, i + length));
  }
}
