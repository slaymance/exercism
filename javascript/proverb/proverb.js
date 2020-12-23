/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const line = (object, subject) => `For want of a ${object} the ${subject} was lost.\n`;
const finalLine = (object, qualifier) => `And all for the want of a ${(qualifier ? `${qualifier  } ` : '') + object}.`

export const proverb = (...inputs) => inputs.slice(0, inputs[inputs.length - 1]?.qualifier ? -2 : -1).reduce(
  (result, object, i) => result + line(object, inputs[i + 1]), ''
) + finalLine(inputs[0], inputs[inputs.length - 1]?.qualifier);
