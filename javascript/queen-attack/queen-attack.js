/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export class QueenAttack {
  #board = Array.from({ length: 8 }, () => Array(8).fill('_'));
  #white;
  #black;

  constructor({ white, black } = { white: [0, 3], black: [7, 3] }) {
    if (white.every((_, i) => white[i] === black[i])) throw new Error('Queens cannot share the same space');

    this.#white = white;
    this.#black = black;

    this.#board[white[0]][white[1]] = 'W';
    this.#board[black[0]][black[1]] = 'B';
  }

  get white() {
    return [...this.#white];
  }

  get black() {
    return [...this.#black];
  }

  toString() {
    return `${this.#board.map(row => row.join(' ')).join('\n')  }\n`;
  }

  canAttack() {
    return [
      this.#white[0] === this.#black[0],
      this.#white[1] === this.#black[1],
      Math.abs(this.#white[0] - this.#black[0]) === Math.abs(this.#white[1] - this.#black[1])
    ].some(assertion => assertion);
  }
}
