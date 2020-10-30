//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { reverseString } from '../reverse-string/reverse-string';

const range = (min, max) => [...Array(max + 1).keys()].slice(min);

/**
 * This isn't an efficient solution. It could be made more efficient by getting factor pairs through for loops rather
 * than my range function. Also, the filtering out of non-palindromes could be more efficient without string conversion
 * since that can be costly. Finally, I suppose you could do iteration from the left until you find your first
 * palindrome, then do the same from the right. You don't need to generate every possible palindrome to meet the test
 * cases, just the smallest and largest in the given range.
 */
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

    const palindromes = Object.entries(range(minFactor, maxFactor)
      .flatMap(factor => range(factor, maxFactor).map(num => [factor, num]))
      .filter(([factor, num]) => `${factor * num}` === reverseString(`${factor * num}`))
      .reduce((map, [factor, num]) => ({ ...map, [factor * num]: [...(map[factor * num] || []), [factor, num]] }), {})
    ).map(([palindrome, factors]) => new Palindromes(+palindrome, factors));

    return {
      smallest: palindromes[0] || new Palindromes(),
      largest: palindromes[palindromes.length - 1] || new Palindromes()
    };
  }
}
