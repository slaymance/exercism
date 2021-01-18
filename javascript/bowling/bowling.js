/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper function for better readability
const sumOf = (array = []) => array.reduce((sum, num) => sum + num, 0);
const last = array => array[array.length - 1];

export class Bowling {
  static FRAMES = 10;
  static PINS = 10;

  static isSpare(frame) {
    return sumOf(frame) === Bowling.PINS && frame.length === 2;
  }

  static isStrike(frame) {
    return sumOf(frame) === Bowling.PINS && frame.length === 1;
  }

  static isFullFrame(frame) {
    return Bowling.isStrike(frame) ? frame.length === 1 : frame.length === 2;
  }

  #frames = [[]];
  #bonus = [];

  get inBonus() {
    if (this.isLastFrame()) {
      if (Bowling.isStrike(last(this.#frames))) return this.#bonus.length !== 2;
      if (Bowling.isSpare(last(this.#frames))) return this.#bonus.length !== 1;
    }
    return false;
  }

  get gameOver() {
    return this.isLastFrame() && !this.inBonus && Bowling.isFullFrame(last(this.#frames));
  }

  isLastFrame(frameNum = this.#frames.length) {
    return frameNum === Bowling.FRAMES;
  }

  verifyRoll(pins) {
    if (pins < 0) throw new Error('Negative roll is invalid');
    if (this.gameOver) throw new Error('Cannot roll after game is over');
    if ([
      roll => roll,
      roll => !this.inBonus && sumOf(last(this.#frames).concat(roll)),
      roll => this.inBonus && !Bowling.isStrike(this.#bonus) && sumOf(this.#bonus.concat(roll))
    ].some(count => count(pins) > Bowling.PINS)) throw new Error('Pin count exceeds pins on the lane');
  }

  roll(pins) {
    this.verifyRoll(pins);

    (this.inBonus ? this.#bonus : last(this.#frames)).push(pins);
    if (!this.gameOver && !this.inBonus && Bowling.isFullFrame(last(this.#frames))) this.#frames.push([]);
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

      if (this.isLastFrame(i + 1)) score += accumulate && this.#bonus[0];
      else accumulate += Bowling.isSpare(frame) && 1 || Bowling.isStrike(frame) && 2;

      return score;
    }, 0) + sumOf(this.#bonus);
  }
}
