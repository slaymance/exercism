/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper function
const range = length => [...Array(length).keys()];

const bottleLyrics = (num, capitalize, wall) => `${num === 0 ?
  `${capitalize ? 'N' : 'n'  }o more` :
  (num + 100) % 100} bottle${num === 1 ? '' : 's'} of beer${wall ? ' on the wall' : ''}`;
const firstLine = bottles => `${bottleLyrics(bottles, true, true)}, ${bottleLyrics(bottles, false, false)}.`;
const secondLine = bottles => `${bottles === 0 ?
  'Go to the store and buy some more' :
  `Take ${bottles === 1 ? 'it' : 'one'} down and pass it around`}, ${bottleLyrics(bottles - 1, false, true)}.`;

export const recite = (initialBottlesCount, takeDownCount) => range(takeDownCount).flatMap(num => [
  firstLine(initialBottlesCount - num),
  secondLine(initialBottlesCount - num),
].concat(num !== takeDownCount - 1 ? '' : []));
