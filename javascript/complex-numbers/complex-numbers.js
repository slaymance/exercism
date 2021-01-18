/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper function for argument validation
const isRealNumber = n => typeof n == 'number' && !isNaN(n) && isFinite(n);

export class ComplexNumber {
  #real;
  #imag;

  constructor(real = 0, imag = 0) {
    if (![real, imag].every(isRealNumber)) throw new Error('Complex number\'s a and b must be real numbers.');

    this.#real = real;
    this.#imag = imag;
  }

  get real() {
    return this.#real;
  }

  get imag() {
    return this.#imag;
  }

  add({ imag, real }) {
    return new ComplexNumber(this.real + real, this.imag + imag);
  }

  sub({ imag, real }) {
    return new ComplexNumber(this.real - real, this.imag - imag);
  }

  div({ imag, real }) {
    const denominator = real ** 2 + imag ** 2;
    return new ComplexNumber(
      (this.real * real + this.imag * imag) / denominator,
      (this.imag * real - this.real * imag) / denominator
    );
  }

  mul({ imag, real }) {
    return new ComplexNumber(
      this.real * real - this.imag * imag,
      this.real * imag + this.imag * real
    );
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj() {
    return new ComplexNumber(this.real, -this.imag);
  }

  get exp() {
    const factor = Math.exp(this.real);
    return new ComplexNumber(
      Math.cos(this.imag) * factor,
      Math.sin(this.imag) * factor
    );
  }
}
