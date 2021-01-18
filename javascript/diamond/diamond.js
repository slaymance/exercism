/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const ASCII_START = 65;

const letters = max => [...Array(max + 1).keys()]
  .concat([...Array(max).keys()].reverse())
  .map(key => String.fromCharCode(key + ASCII_START));

const padEnds = (string, asciiDiff) => {
  const padding = ' '.repeat(asciiDiff);
  return padding + string + padding;
};

const padMid = letter => [letter, letter !== 'A' ? letter : []]
  .join(' '.repeat(Math.max((letter.charCodeAt() - ASCII_START) * 2 - 1, 0)));

export const rows = letter => letters(letter.charCodeAt() - ASCII_START)
  .map(row => padEnds(padMid(row), letter.charCodeAt() - row.charCodeAt()));
