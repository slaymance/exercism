//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const convertToBase = (num, base, numLength = 1 + ~~(Math.log(num) / Math.log(base))) =>
  numLength ? [...convertToBase(num / base | 0, base, numLength - 1), num % base] : [];

export const convert = (digits, a = 0, b = 0) => {
  if (a <= 1 || a % 1) throw new Error('Wrong input base');
  if (b <= 1 || b % 1) throw new Error('Wrong output base');
  if ([
    !digits.length,
    digits.length > 1 && digits[0] === 0,
    digits.some(digit => digit < 0 || digit >= a),
  ].some(assertion => assertion)) throw new Error('Input has wrong format');

  // Convert digits in base a to base 10 then convert that number to base b.
  return convertToBase(digits.reduce((num, digit) => digit + num * a), b);
};
