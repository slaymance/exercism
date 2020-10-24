//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  #number;

  constructor(number = 0) {
    this.#number = number;
  }

  /**
   * What? You didn't think I would try to solve this without .reduce, did you?
   */
  get sumOfSquares() {
    return Array(this.#number + 1).fill().reduce((sum, _, i) => sum + i ** 2, 0);
  }

  get squareOfSum() {
    return (this.#number * (this.#number + 1) / 2) ** 2;
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
