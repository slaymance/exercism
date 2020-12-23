/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const negate = fn => (...args) => !fn(...args);

export const keep = (collection, pred) => collection.reduce((result, el) => pred(el) ? [...result, el] : result, []);
export const discard = (collection, pred) => keep(collection, negate(pred));
