/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper function for clarity
const getMaxLength = input => input.reduce((maxLength, { length }) => Math.max(maxLength, length), 0)

export const transpose = input => Array.from(Array(getMaxLength(input)),
  (_, i) => input.reduce((transposedText, text, j) =>
    transposedText + (text[i]?.padStart(j - transposedText.length + 1, ' ') || ''), '')
);
