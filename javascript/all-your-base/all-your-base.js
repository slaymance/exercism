//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const verifyInputs = (digits, a = 0, b = 0) => {
  if (a <= 1 || a % 1) throw new Error('Wrong input base');
  if (b <= 1 || b % 1) throw new Error('Wrong output base');
  if ([
    !digits.length,
    digits.length > 1 && digits[0] === 0,
    digits.some(digit => digit < 0 || digit >= a),
  ].some(assertion => assertion)) throw new Error('Input has wrong format');
};

export const convert = (digits, a, b) => {
  verifyInputs(digits, a, b);

  let remainder = digits.reduce((num, digit, i, { length }) => num + digit * a ** (length - i - 1), 0);
  const result = Array(1 + ~~(Math.log(remainder) / Math.log(b)));

  if (remainder === 0) return [0];

  for (let i = 0; remainder; remainder -= result[result.length - i - 1] * b ** i++) {
    result[result.length - i - 1] = (remainder / b ** i % b)
  }

  return result;
};
