/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export class Triangle {
  static buildNextRow = (lastRow = []) => Array.from(
    Array(lastRow.length + 1),
    (_, i) => lastRow[i - 1] + lastRow[i] || 1
  );

  #triangle = [];

  constructor(numberOfRows) {
    Array.from(Array(numberOfRows), () => this.#triangle.push(Triangle.buildNextRow(this.lastRow)));
  }

  get lastRow() {
    return this.#triangle[this.#triangle.length - 1]?.slice();
  }

  get rows() {
    return [...this.#triangle];
  }
}
