/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const NUCLEOTIDE_INDECES = {
  'A': 0,
  'C': 1,
  'G': 2,
  'T': 3
};

/**
 * I refactored the problem and its tests to just use a function instead of a class.
 */
export const parse = ([...strand]) => strand.reduce((counts, nucleotide) => {
  if (NUCLEOTIDE_INDECES[nucleotide] === undefined) throw new Error('Invalid nucleotide in strand');
  return ++counts[NUCLEOTIDE_INDECES[nucleotide]] && counts;
}, [0, 0, 0, 0]).join(' ');