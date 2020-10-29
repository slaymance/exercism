//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
    const [side1, side2, side3] = this.sides;
    return side1 ** 2 + side2 ** 2 === side3 ** 2;
  }

  /**
   * This brute forces all Pythagorean triples from the minFactor to the maxFactor. It only includes the triple if c
   * is an integer and a + b + c is equal to the sum if provided.
   */
  static where({ maxFactor = 0, minFactor = 3, sum }) {
    return range(minFactor, maxFactor - 1).flatMap(a =>
      range(a, maxFactor).reduce((triplets, b) => {
        const c = Math.sqrt(a ** 2 + b ** 2);
        return (Number.isInteger(c) && (a + b + c === sum || sum === undefined)) ?
          [...triplets, new Triplet(a, b, c)] :
          triplets;
      }, [])
    );
  }
}
