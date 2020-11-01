//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
    return this.scores.sort(descending).slice(0, 3);
  }

  /**
   * This solution is more optimized if the number of scores is large.
   */
  get personalTopThreeAlt() {
    return this.scores
      .reduce((topScores, score) => {
        const lowScore = Math.min(...topScores);
        return topScores[topScores.indexOf(lowScore)] = Math.max(score, lowScore) && topScores;
      }, Array(3).fill(0))
      .filter(score => score > 0)
      .sort(descending);
  }
}
