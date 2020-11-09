//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
export const count = (plane = []) => plane.reduce((rectangles, cross, crossInd) => rectangles +
  [...cross].reduce((count, char, charInd) => {
    if (char === CORNER) {
      for (let i = charInd + 1; i < cross.length; i++) {
        if (!VALID_HORIZONTALS.includes(cross[i])) break;
        if (cross[i] === CORNER) {
          for (let j = crossInd + 1; j < plane.length; j++) {
            const possibleCross = plane[j].slice(charInd, i + 1);
            if (!validCrossOfLength(i - charInd - 1)(possibleCross)) break;
            if (validRectangleOfLength(i - charInd - 1)(possibleCross)) count++;
          }
        }
      }
    }

    return count;
  }, 0), 0);
