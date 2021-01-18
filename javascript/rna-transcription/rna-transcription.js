/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const NUCLEOTIDE_MAP = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = ([...nucleotides]) =>
  nucleotides.reduce((rna, nucleotide) => rna + NUCLEOTIDE_MAP[nucleotide], '');
