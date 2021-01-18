/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export const compute = (str1, str2) => {
  if (!str1.length && str2.length) throw new Error('left strand must not be empty');
  if (str1.length && !str2.length) throw new Error('right strand must not be empty');
  if (str1.length !== str2.length) throw new Error('left and right strands must be of equal length');

  return [...str1].reduce((hamming, nucleotide, i) => hamming + (nucleotide !== str2[i]), 0);
};
