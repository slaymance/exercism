/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export class Squares {
  #number;

  constructor(number = 0) {
    this.#number = number;
  }

  get number() {
    return this.#number;
  }

  get sum() {
    return this.number * (this.number + 1) / 2;
  }

  get sumOfSquares() {
    return this.sum * (2 * this.number + 1) / 3;
  }

  get squareOfSum() {
    return this.sum ** 2;
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
