/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const isNil = value => value == null;
export const flatten = collection => collection
  .reduce((result, el) => [...result, ...(Array.isArray(el) ? flatten(el) : !isNil(el) ? [el] : [])], []);
