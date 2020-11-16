//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  #matrix;

  constructor(matrix) {
    this.#matrix = matrix
      .split('\n')
      .map(rowString => rowString.split(' ').map(Number));
  }

  get rows() {
    return this.#matrix;
  }

  get columns() {
    return this.rows[0].map((_, col) => this.rows.map(row => row[col]));
  }
}
