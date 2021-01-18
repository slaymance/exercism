/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const line = (object, subject) => `For want of a ${object} the ${subject} was lost.\n`;
const finalLine = (object, qualifier) => object
  ? `And all for the want of a ${(qualifier ? `${qualifier} ` : '') + object}.`
  : '';

export const proverb = (...inputs) => inputs.slice(0, inputs[inputs.length - 1]?.qualifier ? -2 : -1).reduce(
  (result, object, i) => result + line(object, inputs[i + 1]), ''
) + finalLine(inputs[0], inputs[inputs.length - 1]?.qualifier);
