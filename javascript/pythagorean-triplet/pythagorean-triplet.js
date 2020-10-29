//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions
const isIntLessThan = comparator => num => Number.isInteger(num) && num <= comparator;
const meetsRequirment = sum => (a, b, c) => sum === undefined || a + b + c === sum;
// Creates an array of integers from min to, but not including, max.
const range = (min, max) => [...Array(max).keys()].slice(min);

export class Triplet {
  #sides;

  constructor(...sides) {
    this.#sides = sides.sort((a, b) => a - b);
  }

  get sides() {
    return this.#sides;
  }

  sum() {
    return this.sides.reduce((sum, side) => sum + side);
  }

  product() {
    return this.sides.reduce((sum, side) => sum * side);
  }

  isPythagorean() {
    const [a, b, c] = this.sides;
    return a ** 2 + b ** 2 === c ** 2;
  }

  /**
   * This brute forces all Pythagorean triples from the minFactor to the maxFactor. It only includes the triple if c
   * is an integer less than/equal to maxFactor and a + b + c is equal to the sum if provided.
   */
  static where({ maxFactor = 0, minFactor = 3, sum }) {
    const isIntLessThanMaxFactor = isIntLessThan(maxFactor);
    const meetsSumRequirement = meetsRequirment(sum);

    return range(minFactor, maxFactor - 1).flatMap(a =>
      range(a + 1, maxFactor).reduce((triplets, b) => {
        const c = Math.sqrt(a ** 2 + b ** 2);
        return (isIntLessThanMaxFactor(c) && meetsSumRequirement(a, b, c)) ?
          [...triplets, new Triplet(a, b, c)] :
          triplets;
      }, [])
    );
  }
}
