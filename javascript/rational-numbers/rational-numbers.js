//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions
const isFactor = denominator => numerator => numerator % denominator === 0;
const minMagnitude = (...nums) => Math.min(...nums.map(Math.abs));

export class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add({ a, b }) {
    return new Rational(this.a * b + a * this.b, this.b * b).reduce();
  }

  sub({ a, b }) {
    return new Rational(this.a * b - a * this.b, this.b * b).reduce();
  }

  mul({ a, b }) {
    return new Rational(this.a * a, this.b * b).reduce();
  }

  div({ a, b }) {
    return new Rational(this.a * b, a * this.b).reduce();
  }

  abs() {
    return new Rational(...[this.a, this.b].map(Math.abs)).reduce();
  }

  exprational(n) {
    return new Rational(this.a ** n, this.b ** n).reduce();
  }

  expreal(x) {
    return +(x ** (this.a / this.b)).toFixed(2); // .toFixed deals with floating point precision error
  }

  reduce() {
    if (this.a === 0) return new Rational(0, 1);
    if (this.b < 0) return new Rational(-this.a, -this.b).reduce();

    for (let i = 2; i <= minMagnitude(this.a, this.b); i++) {
      if ([this.a, this.b].every(isFactor(i))) return new Rational(this.a / i, this.b / i).reduce();
    }

    return this;
  }
}
