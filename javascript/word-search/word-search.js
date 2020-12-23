//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class GridTraversal {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

class WordSearch {
  static #MOVEMENTS = [
    new GridTraversal(-1, 1),
    new GridTraversal(-1, 0),
    new GridTraversal(-1, -1),
    new GridTraversal(0, -1),
    new GridTraversal(0, 1),
    new GridTraversal(1, -1),
    new GridTraversal(1, 0),
    new GridTraversal(1, 1),
  ];

  #grid;

  constructor(grid = []) {
    this.#grid = grid;
  }

  /**
   * This yields an array of representing each character and its position in the grid on each iteration.
   */
  *[Symbol.iterator]() {
    for (let row = 0; row < this.#grid.length; row++) {
      for (let col = 0; col < this.#grid[row].length; col++) {
        yield [this.#grid[row][col], row, col];
      }
    }
  }

  #search([first, ...rest], row, col, direction) {
    if (this.#grid[row]?.[col] !== first) return;
    if (!rest.length) return [row + 1, col + 1];
    return this.#search(rest.join(''), row + direction.row, col + direction.col, direction);
  }

  #traverseGrid(word) {
    for (const [char, row, col] of this) {
      if (char === word[0]) {
        for (const direction of WordSearch.#MOVEMENTS) {
          const end = this.#search(word, row, col, direction);
          if (end) return { start: this.#search(char, row, col), end };
        }
      }
    }
  }

  find(words = []) {
    return Object.assign(...words.map(word => ({ [word]: this.#traverseGrid(word) })));
  }
}

export default WordSearch;
