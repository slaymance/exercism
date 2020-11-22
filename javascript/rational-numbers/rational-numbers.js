//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions
const isFactor = denominator => numerator => numerator % denominator === 0;
const minMagnitude = (...nums) => Math.min(...nums.map(Math.abs));

export class Rational {
  constructor(a, b) {
    this.reduce(a, b);
  }

  add({ a, b }) {
    return new Rational(this.a * b + a * this.b, this.b * b);
  }

  sub({ a, b }) {
    return new Rational(this.a * b - a * this.b, this.b * b);
  }

  mul({ a, b }) {
    return new Rational(this.a * a, this.b * b);
  }

  div({ a, b }) {
    return new Rational(this.a * b, a * this.b);
  }

  abs() {
    return new Rational(...[this.a, this.b].map(Math.abs));
  }

  exprational(n) {
    return new Rational(this.a ** n, this.b ** n);
  }

  expreal(x) {
    return +(x ** (this.a / this.b)).toFixed(2); // .toFixed deals with floating point precision error
  }

  reduce(a = this.a, b = this.b) {
    for (let i = 2; i <= minMagnitude(a, b); i++) {
      if ([a, b].every(isFactor(i))) return this.reduce(a / i, b / i);
    }

    this.a = b < 0 ? -a : a;
    this.b = a === 0 ? 1 : Math.abs(b);

    return this;
  }
}
