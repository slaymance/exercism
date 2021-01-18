/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const CORNER = '+';
const HORIZONTAL = '-';
const VERTICAL = '|';
const MIDDLE = 's';
const VALID_HORIZONTALS = [CORNER, HORIZONTAL];

const validCrossOfLength = length => crossSection => new RegExp(
  `[\\${CORNER}\\${VERTICAL}][\\${VERTICAL}\\${MIDDLE}\\${CORNER}\\${HORIZONTAL}]{${length}}[\\${CORNER}\\${VERTICAL}]`
).test(crossSection);

const validRectangleOfLength = length => crossSection => new RegExp(
  `\\${CORNER}[\\${CORNER}\\${HORIZONTAL}]{${length}}\\${CORNER}`
).test(crossSection);

/**
 * It's not my favorite code ever but it works.
 * Basically it searches for a horizontal piece with two corners (e.g. +--+).
 * It then searches every cross section following it to see if a valid rectangle is formed and the count should be
 * incremented.
 * 
 * As soon as a possible cross section is found that would preclude a valid rectangle from forming in any of the
 * following cross sections, it breaks out of the rectangle search loop and looks for another possible rectangle.
 */
const count = (plane = []) => plane.reduce((rectangles, [...cross], crossInd) => rectangles +
  cross.reduce((count, char, charInd) => {
    if (char === CORNER) {
      for (const [i, nextChar] of [...cross.entries()].slice(charInd + 1)) {
        if (!VALID_HORIZONTALS.includes(nextChar)) break;
        if (nextChar === CORNER) {
          for (const nextCross of plane.slice(crossInd + 1)) {
            const possibleCross = nextCross.slice(charInd, i + 1);
            if (!validCrossOfLength(i - charInd - 1)(possibleCross)) break;
            if (validRectangleOfLength(i - charInd - 1)(possibleCross)) count++;
          }
        }
      }
    }

    return count;
  }, 0), 0);

/**
 * The below code is only used to make the tests pass.
 */
export class Rectangles {
  static count(...args) {
    return count(...args);
  }
}
