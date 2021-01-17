/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

interface LetterMapping {
  [letter: string]: number;
}

type LetterTuples = [string, number][];
type Solution = LetterMapping | undefined;

const FULCRUM = ' == ';
const DIGITS = [...Array(10).keys()];

const evalPermutation = (
  letterCounts: LetterTuples,
  digits: number[]
): Solution =>
  letterCounts.reduce((sum, [, count], i) => sum + count * digits[i], 0) === 0
    ? Object.fromEntries(letterCounts.map(([letter], i) => [letter, digits[i]]))
    : undefined;

const tryPermutations = (
  terms: string[],
  letterCounts: LetterTuples,
  digits: number[] = []
): Solution => {
  if (digits.length === letterCounts.length)
    return evalPermutation(letterCounts, digits);

  for (const testDigit of DIGITS) {
    if (
      digits.includes(testDigit) ||
      (testDigit === 0 &&
        terms.some((term) => term[0] === letterCounts[digits.length][0]))
    )
      continue;

    const result = tryPermutations(terms, letterCounts, [...digits, testDigit]);

    if (result) return result;
  }
};

const countLetters = (expressions: string[][]) =>
  Object.entries(
    expressions.reduce(
      (counts: LetterMapping, exp, right) =>
        exp.reduce(
          (counts, term) =>
            [...term].reduce(
              (counts, letter, i, { length }) => ({
                ...counts,
                [letter]:
                  ~~counts[letter] + 10 ** (length - 1 - i) * (right ? -1 : 1),
              }),
              counts
            ),
          counts
        ),
      {}
    )
  );

const solve = (equation: string): Solution | undefined => {
  const expressions = equation
    .split(FULCRUM)
    .map((expression) => expression.match(/\w+/g) ?? []);

  return tryPermutations(expressions.flat(), countLetters(expressions));
};

/**
 * The below code is only used to make the tests pass.
 */
export default class Alphametics {
  private puzzle;

  constructor(puzzle: string) {
    this.puzzle = puzzle;
  }

  solve() {
    return solve(this.puzzle);
  }
}
