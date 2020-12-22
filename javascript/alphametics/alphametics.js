//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions for clarity
const isNumber = num => typeof num === 'number' && isFinite(num);
const last = array => array[array.length - 1];

const DIGITS = [...Array(10).keys()];

const evalPermuation = terms => isNumber(+last(terms)) &&
  +last(terms) === terms.slice(0, -1).reduce((sum, term) => sum + +term, 0);

const tryPermutations = (terms, digits = DIGITS, mapping = {}) => {
  const letter = terms.flatMap(term => term.match(/[A-Z]/i) ?? [])[0];

  if (!letter) return evalPermuation(terms) ? mapping : null;

  for (const testDigit of digits) {
    if (testDigit === 0 && terms.some(term => term[0] === letter)) continue; // Skip testing 0 if leading

    const permutationResult = tryPermutations(
      terms.map(term => term.replace(new RegExp(letter, 'g'), testDigit)),
      digits.filter(digit => digit !== testDigit),
      { ...mapping, [letter]: testDigit }
    );

    if (permutationResult || testDigit === last(digits)) return permutationResult;
  }
};

export const solve = equation => tryPermutations(equation.match(/\w+/g));

/**
 * I went with a brute-force approach which isn't very efficient. I toyed with the idea of solving this
 * using a more deductive approach, but quickly realized it would be pretty complicated to code. Here's
 * some of the notes I took on rules that would be applied:
 *
 * General:
 *          left term = ((right term - sum of other left terms - carry) % 10 + 10) % 10
 *          right term = (sum of left terms + carry) % 10
 *
 * Carry Rules:
 *   - Column (A) has length of 1:
 *          column has carry
 *          A = 1
 *   - Column (AB) has length of 2:
 *          column has carry
 *          A = B % 10 - carry
 *          B = (A + carry) % 10
 *
 * Let me know if you attempt a non-brute force approach. I'd be interested to see it!
 */