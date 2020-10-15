//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isNumber = n => !isNaN(n);
const isPositive = n => n > 0;

export class Triangle {
  static verifyTriangle(side1, side2, side3) {
    return [side1, side2, side3].every(side => isNumber(side) && isPositive(side)) &&
      Math.min(side1, side2) + Math.min(side2, side3) >= Math.max(side1, side2, side3);
  }

  #validTriangle
  #sides

  constructor(...sides) {
    this.#validTriangle = Triangle.verifyTriangle(...sides);
    this.#sides = sides.sort();
  }

  isEquilateral() {
    return this.#validTriangle && this.#sides[0] === this.#sides[1] && this.#sides[1] === this.#sides[2];
  }

  isIsosceles() {
    return this.#validTriangle && this.#sides[0] === this.#sides[1] || this.#sides[1] === this.#sides[2];
  }

  isScalene() {
    return this.#validTriangle && !this.isIsosceles();
  }
}
