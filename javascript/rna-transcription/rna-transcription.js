/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const NUCLEOTIDE_MAP = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = ([...nucleotides]) =>
  nucleotides.reduce((rna, nucleotide) => rna + NUCLEOTIDE_MAP[nucleotide], '');
