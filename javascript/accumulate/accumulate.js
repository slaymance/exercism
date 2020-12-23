/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export const accumulate = (collection, callback) => collection.reduce((result, el) => [...result, callback(el)], []);
