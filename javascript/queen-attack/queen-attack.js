/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export class QueenAttack {
  static BOARD_DIMENSION = 8;

  static isOnBoard(coordinates) {
    return coordinates.every(coordinate => coordinate >= 0 && coordinate < QueenAttack.BOARD_DIMENSION);
  }

  #board = Array.from({ length: QueenAttack.BOARD_DIMENSION }, () => Array(QueenAttack.BOARD_DIMENSION).fill('_'));
  #white;
  #black;

  constructor({ white = [7, 3], black = [0, 3] } = {}) {
    if (white.every((_, i) => white[i] === black[i])) throw new Error('Queens cannot share the same space');
    if (![white, black].every(QueenAttack.isOnBoard)) throw new Error('Queen must be placed on the board');

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

  get canAttack() {
    return [
      this.#white[0] === this.#black[0],
      this.#white[1] === this.#black[1],
      Math.abs(this.#white[0] - this.#black[0]) === Math.abs(this.#white[1] - this.#black[1])
    ].some(assertion => assertion);
  }

  toString() {
    return this.#board.map(row => row.join(' ')).join('\n');
  }
}
