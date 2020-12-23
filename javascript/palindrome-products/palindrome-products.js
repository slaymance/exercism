/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

import { reverseString } from '../reverse-string/reverse-string';

const isPalindrome = num => `${num}` === reverseString(`${num}`);
const getFactors = (min, max, palindrome = 0) => [...Array(Math.min(max, Math.floor(Math.sqrt(palindrome))) + 1).keys()]
  .slice(min)
  .reduce((factors, num) => palindrome % num || palindrome / num > max
    ? factors
    : [...factors, [num, palindrome / num]], []);

export class Palindromes {
  #value;
  #factors;

  constructor(palindrome = null, factors = []) {
    this.#value = palindrome;
    this.#factors = factors;
  }

  get value() {
    return this.#value;
  }

  get factors() {
    return this.#factors;
  }

  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor) throw new Error('min must be <= max');

    let min;
    let max;

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (isPalindrome(product)) {
          min = Math.min(product, min ?? Infinity);
          max = Math.max(product, max ?? 0);
        }
      }
    }

    return {
      smallest: new Palindromes(min, getFactors(minFactor, maxFactor, min)),
      largest: new Palindromes(max, getFactors(minFactor, maxFactor, max))
    };
  }
}
