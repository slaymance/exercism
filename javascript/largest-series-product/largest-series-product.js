//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions for clarity
const containsNonDigits = string => /\D/.test(string);
const productBy = array => array.reduce((product, num) => product * num, 1);

/**
 * These two functions are taken almost directly from my solution to Series exercise here on exercism
 * https://exercism.io/tracks/javascript/exercises/series/solutions/40ab3d8550d345b580e1aa67a1fd08bf
 */
const pullDigits = series => [...series].map(Number);
const digitSpans = (digits, span) => Array.from(Array(digits.length - span + 1), (_, i) => digits.slice(i, i + span));

/**
 * My solution uses the experimental pipeline operator which is a TC39 Stage 1 proposal to the JavaScript language. You
 * can read more about it here:
 * https://github.com/tc39/proposal-pipeline-operator
 * 
 * To run this code you'll need to add the "@babel/plugin-proposal-pipeline-operator" to your dev dependencies and
 * include the plugin in your babel.config file (the bigint plugin is already included in the project):
 * plugins: ["@babel/plugin-syntax-bigint", ["@babel/plugin-proposal-pipeline-operator", { "proposal": "smart" }]]
 */
export const largestProduct = (series = '', span = 0) => {
  if (span > series.length) throw new Error('Span must be smaller than string length');
  if (span < 0) throw new Error('Span must be greater than zero');
  if (containsNonDigits(series)) throw new Error('Digits input must only contain digits');

  return series
    |> pullDigits
    |> digitSpans(#, span)
    |> #.reduce((maxProduct, slice) => Math.max(maxProduct, productBy(slice)), 0);
};
