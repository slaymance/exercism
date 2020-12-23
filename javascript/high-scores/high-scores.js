/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

// Helper function for clarity.
const descending = (a, b) => b - a;

export class HighScores {
  #scores;

  constructor(scores = []) {
    this.#scores = scores;
  }

  get scores() {
    return this.#scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return [...this.scores].sort(descending).slice(0, 3);
  }
}
