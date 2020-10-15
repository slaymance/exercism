//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isNumber = n => !isNaN(n);
const isPositive = n => n > 0;

export class Triangle {
  static verifyTriangle(sides) {
    const [side1, side2, side3] = sides;
    return sides.length === 3 &&
      sides.every(side => isNumber(side) && isPositive(side)) &&
      Math.min(side1, side2) + Math.min(side2, side3) >= Math.max(side1, side2, side3);
  }

  #sides;
  #isEquilateral = false;
  #isIsosceles = false;
  #isScalene = false;

  constructor(...sides) {
    this.#sides = sides;

    if (Triangle.verifyTriangle(sides)) {
      const uniqueSides = new Set(sides);
      this.#isEquilateral = uniqueSides.size === 1;
      this.#isIsosceles = uniqueSides.size <= 2;
      this.#isScalene = uniqueSides.size === 3;
    }
  }

  get sides() {
    return this.#sides;
  }

  isEquilateral() {
    return this.#isEquilateral;
  }

  isIsosceles() {
    return this.#isIsosceles;
  }

  isScalene() {
    return this.#isScalene;
  }
}
