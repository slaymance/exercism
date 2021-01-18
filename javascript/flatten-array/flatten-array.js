/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const isNil = value => value == null;
export const flatten = collection => collection
  .reduce((result, el) => [...result, ...(Array.isArray(el) ? flatten(el) : !isNil(el) ? [el] : [])], []);
