/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

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
