/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const STOP = 'STOP';

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
  [STOP]: ['', 'UAA', 'UAG', 'UGA']
});

export const translate = (rna = '') => {
  const protein = TRANSLATIONS[rna.slice(0, 3)];
  if (!protein) throw new Error('Invalid codon');
  return protein === STOP ? [] : [protein, ...translate(rna.slice(3))];
};
