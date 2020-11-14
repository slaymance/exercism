//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = isbn => {
  const parsedISBN = isbn.match(/\d|X$/g) || [];
  return [
    digits => digits.length === 10,
    digits => digits.reduce((sum, digit, i) => sum + (digit === 'X' ? 10 : digit) * (10 - i), 0) % 11 === 0
  ].every(check => check(parsedISBN));
};