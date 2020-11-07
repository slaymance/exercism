//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper function for clarity
const getMaxLength = input => input.reduce((maxLength, { length }) => Math.max(maxLength, length), 0)

export const transpose = input => Array.from(Array(getMaxLength(input)),
  (_, i) => input.reduce((transposedText, text, j) =>
    transposedText + (text[i]?.padStart(j - transposedText.length + 1, ' ') || ''), '')
);
