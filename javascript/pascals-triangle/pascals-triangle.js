/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const last = array => array[array.length - 1];

export class Triangle {
  static buildTriangle = (rows = 0, triangle = []) => {
    if (triangle.length === rows) return triangle;

    const lastRow = last(triangle) ?? [];
    return Triangle.buildTriangle(rows, [
      ...triangle,
      Array.from(Array(lastRow.length + 1), (_, i) => lastRow[i - 1] + lastRow[i] || 1)
    ]);
  };

  #triangle = [];

  constructor(numberOfRows) {
    this.#triangle = Triangle.buildTriangle(numberOfRows)
  }

  get lastRow() {
    return last(this.#triangle)?.slice();
  }

  get rows() {
    return [...this.#triangle];
  }
}
