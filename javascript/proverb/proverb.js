//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper function for clarity
const isString = value => typeof value === 'string';

const line = (object, subject) => `For want of a ${object} the ${subject} was lost.\n`;
const finalLine = (object, qualifier) => `And all for the want of a ${(qualifier ? qualifier + ' ' : '') + object}.`

export const proverb = (...inputs) => inputs.slice(0, -1).reduce(
  (result, object, i) => result + (isString(inputs[i + 1]) ? line(object, inputs[i + 1]) : ''), ''
) + finalLine(inputs[0], inputs[inputs.length - 1]?.qualifier);
