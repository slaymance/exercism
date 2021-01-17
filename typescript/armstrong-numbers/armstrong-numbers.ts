/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const isArmstrongNumber = (num: number): boolean =>
  [...`${num}`].reduce(
    (sum, digit, _, { length }) => sum + (+digit) ** length,
    0
  ) === num;

/**
 * The below code is only used to make the tests pass.
 */
export default class ArmstrongNumbers {
  static isArmstrongNumber = isArmstrongNumber;
}
