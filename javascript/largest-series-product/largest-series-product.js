//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { Series } from '../series/series';

// Helper function for clarity
const productBy = array => array.reduce((product, num) => product * num, 1);

export const largestProduct = (series = '', span = 0) => {
  if (span > series.length) throw new Error('Span must be smaller than string length');
  if (span < 0) throw new Error('Span must be greater than zero');

  return new Series(series)
    .slices(span)
    .reduce((maxProduct, slice) => Math.max(maxProduct, productBy(slice)), 0);
};
