//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const verify = isbn => [
  digits => digits.length === 10,
  digits => digits.reverse().reduce((sum, digit, i) => sum + (digit === 'X' ? 10 : digit) * (i + 1), 0) % 11 === 0
].every(check => check(isbn));

export const isValid = isbn => verify(isbn.match(/\d|X$/g) || []);