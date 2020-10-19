//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RAIN_MAPPING = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
};

/**
 * You may notice that I'm able to perform modulo using the factor from RAIN_MAPPING directly, even though JavaScript
 * object keys are always strings. This is because % (along with / *) is a multiplicative operator. JavaScript converts
 * both expressions to the left and right of a multiplicative operator to a number before evaluating the expression.
 * For example:
 * 3 % '3' === 0,
 * 3 * '3' === 9,
 * 3 / '3' === 1, but
 * 3 + '3' === '33'
 * Since + can be used in string concatenation, the number coercion doesn't take place. You can also do subtraction
 * with a string and number:
 * 3 - '3' === 0
 */
export const convert = num => Object.entries(RAIN_MAPPING)
  .reduce((acc, [factor, rainDrop]) => num % factor ? acc : acc + rainDrop, '') || `${num}`;

