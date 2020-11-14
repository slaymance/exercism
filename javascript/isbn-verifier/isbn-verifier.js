//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = isbn => {
  const parsedISBN = isbn.match(/\d|X$/g) || [];
  return parsedISBN.length === 10 &&
    parsedISBN.reverse().reduce((check, digit, i) => check + (digit === 'X' ? 10 : digit) * (i + 1), 0) % 11 === 0;
};
