/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const convertToBase = (
  num: number,
  base: number,
  numLength = 1 + ~~(Math.log(num) / Math.log(base))
): number[] =>
  numLength
    ? [...convertToBase((num / base) | 0, base, numLength - 1), num % base]
    : [];

const convert = (digits: number[], a = 0, b = 0): number[] => {
  if (a <= 1 || a % 1) throw new Error('Wrong input base');
  if (b <= 1 || b % 1) throw new Error('Wrong output base');
  if (
    [
      !digits.length,
      digits.length > 1 && digits[0] === 0,
      digits.some((digit) => digit < 0 || digit >= a),
    ].some((assertion) => assertion)
  )
    throw new Error('Input has wrong format');

  // Convert digits in base a to base 10 then convert that number to base b.
  return convertToBase(
    digits.reduce((num, digit) => digit + num * a),
    b
  );
};

/**
 * The below code is only used to make the tests pass.
 */
export default class Converter {
  convert(digits: number[], a: number, b: number): number[] {
    return convert(digits, a, b);
  }
}
