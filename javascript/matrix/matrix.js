//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  #rows;
  #columns;

  constructor(matrix) {
    this.#rows = matrix
      .split('\n')
      .map(rowString => rowString.split(' ').map(Number));

    this.#columns = this.#rows[0].map((_, col) => this.#rows.map(row => row[col]));
  }

  get rows() {
    return this.#rows;
  }

  get columns() {
    return this.#columns;
  }
}
