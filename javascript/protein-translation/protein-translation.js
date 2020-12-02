//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const invert = obj => Object.fromEntries(
  Object.entries(obj).flatMap(([protein, codons]) => codons.map(codon => [codon, protein]))
);

const TRANSLATIONS = invert({
  Methionine: ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
  STOP: ['', 'UAA', 'UAG', 'UGA']
});

export const translate = (rna = '') => {
  const protein = TRANSLATIONS[rna.slice(0, 3)];
  if (!protein) throw new Error('Invalid codon');
  return protein === 'STOP' ? [] : [protein].concat(translate(rna.slice(3)));
};
