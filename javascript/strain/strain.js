//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const negate = fn => (...args) => !fn(...args);

export const keep = (collection, pred) => collection.reduce((result, el) => pred(el) ? [...result, el] : result, []);
export const discard = (collection, pred) => keep(collection, negate(pred));
