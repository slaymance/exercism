//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  #real;
  #imag;

  constructor(real, imag) {
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
