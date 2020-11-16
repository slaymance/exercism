//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUCLEOTIDE_MAP = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = ([...nucleotides]) =>
  nucleotides.reduce((rna, nucleotide) => rna + NUCLEOTIDE_MAP[nucleotide], '');
