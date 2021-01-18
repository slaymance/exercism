/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export const accumulate = (collection, callback) => collection.reduce((result, el) => [...result, callback(el)], []);
