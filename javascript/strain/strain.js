/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const negate = fn => (...args) => !fn(...args);

export const keep = (collection, pred) => collection.reduce((result, el) => pred(el) ? [...result, el] : result, []);
export const discard = (collection, pred) => keep(collection, negate(pred));
