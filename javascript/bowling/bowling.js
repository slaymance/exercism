//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper function for better readability
const sumOf = (array = []) => array.reduce((sum, num) => sum + num, 0);
const last = array => array[array.length - 1];

export class Bowling {
  static ROUNDS = 10;
  static PINS = 10;

  static isSpare(frame) {
    return sumOf(frame) === Bowling.PINS && frame.length === 2;
  }

  static isStrike(frame) {
    return sumOf(frame) === Bowling.PINS && frame.length === 1;
  }

  #frames = [[]];
  #bonus = [];

  get gameOver() {
    if (this.#frames.length === Bowling.ROUNDS) {
      if (Bowling.isStrike(last(this.#frames))) return this.#bonus.length === 2;
      if (Bowling.isSpare(last(this.#frames))) return this.#bonus.length === 1;
      return last(this.#frames).length === 2;
    }
    return false;
  }

  get inBonus() {
    if (this.#frames.length === Bowling.ROUNDS) {
      if (Bowling.isStrike(last(this.#frames))) return this.#bonus.length !== 2;
      if (Bowling.isSpare(last(this.#frames))) return this.#bonus.length !== 1;
    }
    return false;
  }

  verifyRoll(pins) {
    if (pins < 0) throw new Error('Negative roll is invalid');
    if (this.gameOver) throw new Error('Cannot roll after game is over');
    if ([
      roll => roll,
      roll => !this.inBonus && sumOf(last(this.#frames).concat(roll)),
      roll => this.inBonus && this.#bonus[0] !== Bowling.PINS && sumOf(this.#bonus.concat(roll))
    ].some(count => count(pins) > Bowling.PINS)) throw new Error('Pin count exceeds pins on the lane');
  }

  roll(pins) {
    this.verifyRoll(pins);

    (this.inBonus ? this.#bonus : last(this.#frames)).push(pins);
    if (!this.gameOver && !this.inBonus) {
      if (Bowling.isStrike(last(this.#frames)) || last(this.#frames).length === 2) this.#frames.push([]);
    }
  }

  score() {
    if (!this.gameOver) throw new Error('Score cannot be taken until the end of the game');

    let accumulate = 0;
    return this.#frames.reduce((score, frame, i) => {
      score += sumOf(frame) + frame.reduce((bonus, roll) => {
        if (accumulate) {
          bonus += roll + (accumulate === 3 && roll);
          accumulate -= 1 + (accumulate === 3 && 1);
        }
        return bonus;
      }, 0);

      if (i + 1 === Bowling.ROUNDS) score += accumulate && this.#bonus[0];
      else accumulate += Bowling.isSpare(frame) && 1 || Bowling.isStrike(frame) && 2;

      return score;
    }, 0) + sumOf(this.#bonus);
  }
}
